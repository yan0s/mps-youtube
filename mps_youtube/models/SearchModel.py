from mps_youtube.commands import search
# from .util import getxy, fmt_time, uea_pad, yt_datetime, F

class Search:

    def __init__(self, term = None, result = None):
        self.term = term
        self.result = result

    def get_result(self):

        self.result = search.search(self.term)