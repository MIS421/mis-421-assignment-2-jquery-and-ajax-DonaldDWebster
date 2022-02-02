var len;
var results = '';

function apiSearch() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "c944f7827ad34d0e962bbd5e42caef9c");
        },
        type: "GET",
    })
        .done(function (data) {
            len = data.webPages.value.length;
            for (i = 0; i < len; i++) {
                results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
            }

            $('#searchResults').html(results);
            $('#searchResults').dialog();

            var results2 = document.getElementById("searchResults");
            results2.style.visibility = "visible";

            document.getElementById("searchResults").style.visibility= "visible";

        })
        .fail(function () {
            alert("error");
        });
}

function changeBackground()
{
  
    document.body.style.backgroundImage = "url(https://listverse.com/wp-content/uploads/2013/03/6a00d8341c4f9453ef0162fc13d4b4970d.jpg)";
   
}



function getTime() {

    
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    //alert(time);

    document.getElementById("time").style.visibility = "visible";
    $('#time').html(time);
    $('#time').dialog();

}


