// Get last test result
function getListOfDevicesAjax(callback) {
    $.ajax({
        type: 'GET',
        url:  '/getListOfDevices',
        dataType: "json",
        success: function(data)
        {
            if( callback ) callback(data);
        },
        error: function(err)
        {
           console.log("Παρουσιάστηκε σφάλμα!");
        }
    });
}

// Get search result
function getSearchResultsAjax(search_terms, callback) {
    $.ajax({
        type: 'POST',
        url:  '/getSearchResults',
        dataType: "json",
        data:{
           "search_terms": search_terms
        },
        success: function(data)
        {
            if( callback ) callback(data);
        },
        error: function(err)
        {
           console.log("Παρουσιάστηκε σφάλμα!");
        }
    });
}

// Play the song
function playSongAjax(number, callback) {
    $.ajax({
        type: 'POST',
        url:  '/playSong',
        dataType: "json",
        data:{
           "number": number
        },
        success: function(data)
        {
            if( callback ) callback(data);
        },
        error: function(err)
        {
           console.log("Παρουσιάστηκε σφάλμα!");
        }
    });
}