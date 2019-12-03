var key = "b69c113763b7ef255682264fdb188c14";
var city = "";
var searchMethod = "city";
var tempUnit = "metric";
$(document).ready(); 

function searchWeather(searchTm){
    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + searchTm + "&appid=" + key + "&units=" + tempUnit
 $.get(queryUrl)
 .then((result) => {
    init(result);

});

}
//  $.ajax({
//  url: queryUrl,
//      Method: "GET"
//  }).then(function(results){
//      console.log(results);
//  });

function init(resultFromServer) {
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
            document.body.style.backgroundImage = "url('clear.jpg')";
            break;
        
        case 'Clouds':
            document.body.style.backgroundImage = "url('cloudy.jpg')";
            break;

        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = "url('rain.jpg')";
            break;
        
        case 'Thunderstorm':
            document.body.style.backgroundImage = "url('stormy.jpg')";
            break;
        
        case 'Snow':
            document.body.style.backgroundImage = "url('snowy.jpg')";
            break;

        default:
            break;
    }

    var weatherDiscription = $("weather-discrip-header");
    var tempelement = document.querySelector('#temp');
    var humidity = document.querySelector("#humidity");
    var wind = document.querySelector("#wind");
    //var uvIndex = document.querySelector("#uv-index");
    var cityHeader = document.querySelector("#city-header");
    var weatherImg = $("document-img");
    var resultDiscription = resultFromServer.weather[0].description;
    weatherDiscription.innertext = resultDiscription;
    tempelement.innerHTML = resultFromServer.main.temp + " &#176; "
    wind.innerHTML = " wind at " + resultFromServer.wind.speed + " M/S "
    cityHeader.innerHTML = resultFromServer.name;
    humidity.innerHTML = " Humidity Levels at " + resultFromServer.main.humidity + " % "
    uvIndex.innerHTML = " UV Index at " + resultFromServer;

    weatherImg.src = "http://openweathermap.org/img/wn/" + resultFromServer.weather[0].icon + ".pmg";
}

    function infoBoxPosition(){
        var weatherContainer = $("#wather-container");
        var infoBoxH = weatherContainer.clientHeight;
        var infoBoxW = weatherContainer.clientWidth;

        wweatherContainer.style.left = `calc(50% - ${infoBoxH/2}px)`;
        weatherContainer.style.top = `calc(50% - ${infoBoxW/1.3}px)`;
        weatherContainer.style.visibility = 'visible';
    }


document.getElementById("search-button").addEventListener("click", () => {
var searchTerm = document.querySelector("#search-input").value;

//if(searchTerm)
searchWeather(searchTerm);
})


