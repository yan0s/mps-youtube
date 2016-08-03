function printDevices(){
    getListOfDevicesAjax(function(json_file){
        $(".table_body").empty();
        for (var i=0 ; i < json_file["media"].length ; i++ ){

            console.log(json_file["media"][i]);

            var row_class = "warning";
            var play_button = "<button class=\"btn btn-success btn-circle\" type=\"button\"><i class=\"fa fa-play\"></i></button>"

            if (json_file["media"][i]["Id"]%2 == 0){
                row_class = "success";
                play_button = "<button class=\"btn btn-success btn-circle\" type=\"button\"><i class=\"fa fa-play\"></i></button>"
            }
            else if(json_file["media"][i]["Id"]%2 == 1){
                row_class = "danger";
                play_button = "<button class=\"btn btn-success btn-circle\" type=\"button\"><i class=\"fa fa-play\"></i></button>"
            }


            var tr = "<tr class=\""+ row_class +"\">" +
                        "<td>" + json_file["media"][i]["Id"] + "</td>" +
                        "<td>" + json_file["media"][i]["Title"] + "</td>" +
                        "<td>" + play_button + "</td>" +
                     "</tr>";

            $(".table_body").append(tr);

        }

    });
}

function startYoutubeSearch(search_youtube_input){
    getSearchResultsAjax(search_youtube_input, function(data){

        console.log(data.items);

        $(".table_body").empty();
        for (var i=0 ; i < data.items.length ; i++ ){

            console.log(data.items[i]);

            var row_class = "warning";
            var play_button = "<button class=\"btn btn-success btn-circle\" type=\"button\"><i class=\"fa fa-play\"></i></button>"

            if (i%2 == 0){
                row_class = "success";
                play_button = "<button class=\"btn btn-success btn-circle\" type=\"button\" onclick=\"playSong(" + i + ")\"><i class=\"fa fa-play\"></i></button>"
            }
            else if(i%2 == 1){
                row_class = "danger";
                play_button = "<button class=\"btn btn-success btn-circle\" type=\"button\" onclick=\"playSong(" + i + ")\"><i class=\"fa fa-play\"></i></button>"
            }

            var i_plus_1 = i + 1;

            var tr = "<tr class=\""+ row_class +"\">" +
                        "<td>" + i_plus_1 + "</td>" +
                        "<td>" + data.items[i].snippet.localized.title + "</td>" +
                        "<td>" + play_button + "</td>" +
                     "</tr>";

            $(".table_body").append(tr);

        }
    });

}

function playSong(number){
    playSongAjax(number, function(data){
        console.log("Playing..")
    });

}

$("#search_youtube").on("click", function(){
    startYoutubeSearch( $("#search_youtube_input").val() );
} );

$(".play_song").on("click", function(){
    startYoutubeSearch( $("#search_youtube_input").val() );
} );


//var interval = 2000;
//printDevices();
//
//setInterval(function(){
//    printDevices()
//}, interval);


