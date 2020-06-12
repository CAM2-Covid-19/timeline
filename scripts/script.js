// function httpGet(url){
//     var httpreq = new XMLHttpRequest();
//     httpreq.open("GET", url, false);
//     httpreq.send(null);
//     return JSON.parse(httpreq.responseText)
// }

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


$(document).ready(function(){
    //var worldwide = httpGet("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats");
    //var worldwide = httpGet("https://api.covid19api.com/summary");
    // var countries = httpGet("https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search");
    // console.log(worldwide)
    // console.log(countries)
    $.ajax({ 
        type : "GET", 
        url : "https://api.smartable.ai/coronavirus/stats/US", 
        beforeSend: function(xhr){xhr.setRequestHeader('Subscription-Key', '3009d4ccc29e4808af1ccc25c69b4d5d');},
        success : function(result) { 
            //set your variable to the result 
            console.log(result)
            $("#usalive").text(numberWithCommas(result.stats.totalConfirmedCases));
            $("#usalived").text(numberWithCommas(result.stats.totalDeaths));
        }, 
        error : function(result) { 
          //handle the error 
            console.log(result)
        } 
    });
    $.ajax({ 
        type : "GET", 
        url : "https://api.smartable.ai/coronavirus/stats/global", 
        beforeSend: function(xhr){xhr.setRequestHeader('Subscription-Key', '3009d4ccc29e4808af1ccc25c69b4d5d');},
        success : function(result) { 
            //set your variable to the result 
            $("#wwlive").text(numberWithCommas(result.stats.totalConfirmedCases));
            $("#wwlived").text(numberWithCommas(result.stats.totalDeaths));
        }, 
        error : function(result) { 
          //handle the error 
            console.log(result)
        } 
    });

    // fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search").then(
    //     response => response.json()
    // ).then(
    //     data => {
    //         console.log(data["data"])
    //         $("#usalive").text(data["data"]["rows"][1]["total_cases"])
    //         $("#usalived").text(data["data"]["rows"][1]["total_deaths"])
    //     }
    // )
});


