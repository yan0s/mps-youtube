from flask import Flask, request, jsonify, render_template
import json
from mps_youtube.models import SearchModel, PlayModel


app = Flask(__name__)


def get_json_file(json_file):

    jsonFile = open(json_file, "r")
    json_data = json.load(jsonFile)
    jsonFile.close()

    return json.dumps(json_data)


# HTTP routes
@app.route('/')
def index_html(): return render_template('index.html')

@app.route('/header')
def header_html(): return render_template('header.html')


@app.route('/sidebar')
def sidebar_html(): return render_template('sidebar.html')

@app.route('/listofdevices')
def listofdevices_html(): return render_template('listofdevices.html')

@app.route("/getListOfDevices", methods=['GET'])
def get_list_of_devices():
    return get_json_file("listofdevices.json")


@app.route("/getSearchResults", methods=['POST'])
def get_search_results():
    search_terms = request.form["search_terms"]
    term = search_terms
    search = SearchModel.Search(term=term)
    search.get_result()
    print(search.result)
    return json.dumps(search.result)

@app.route("/playSong", methods=['POST'])
def play_song():
    number = request.form["number"]
    play = PlayModel.Play(number=number)
    play.play()
    return "playing"

# json.dumps(last_test, default=lambda o: o.__dict__)



if __name__ == '__main__':
    app.debug = True
    app.run(host='localhost', port=8082, threaded=True)
