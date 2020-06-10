function httpGet(url){
    var httpreq = new XMLHttpRequest();
    httpreq.open("GET", url, false);
    httpreq.send(null);
    return JSON.parse(httpreq.responseText)
}


$(document).ready(function(){
    //var worldwide = httpGet("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats");
    //var worldwide = httpGet("https://api.covid19api.com/summary");
    // var countries = httpGet("https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search");
    // console.log(worldwide)
    // console.log(countries)
    fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats").then(
        response => response.json()
    ).then(
        data => {
            // console.log(data);
            console.log(data)
            $("#wwlive").text(data["data"]["total_cases"])
            $("#wwlived").text(data["data"]["death_cases"])
        }
    )

    fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search").then(
        response => response.json()
    ).then(
        data => {
            console.log(data["data"])
            $("#usalive").text(data["data"]["rows"][1]["total_cases"])
            $("#usalived").text(data["data"]["rows"][1]["total_deaths"])
        }
    )
});


