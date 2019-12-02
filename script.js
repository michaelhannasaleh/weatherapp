var key = "27643ed14a014e6ae93bb7e28d2eeb94";
var city = "";
var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "appid=" + key
var searchMethod = "city";
var tempUnit = "metric";
$(document).ready(); 

 function searchWeather(searchTerm){
 fetch(`http://api.openweathermap.org/data/2.5/forecast?${searchMethod}=${searchTerm}&key=${key}&tempUnit=${tempUnit}`).then(result => {
    return result.json();
}).then(result => {
    init(result);
})
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
    var tempelement = $('#temp');
    var humidity = $("humidity");
    var wind = $("wind");
    var uvIndex = $("uv-index");
    var cityHeader = $("city-header");
    var weatherImg = $("document-img");
    var resultDiscription = resultFromServer.weather[0].description;
    weatherDiscription.innertext = resultDiscription.charAt(0).upperCase() + resultDiscription.slice(1);
    tempelement.innerHTML = resultFromServer.main.temp;
    wind.innerHTML = " wind at " + resultFromServer.wind.speed;
    cityHeader.innerHTML = resultFromServer.name;
    humidity.innerHTML = " Humidity Levels at " + resultFromServer.main.humidity;
    uvIndex.innerHTML = " UV Index at " + resultFromServer

    weatherImg.src = "http://openweathermap.org/img/wn/" + resultFromServer.weather[0].icon + ".pmg";
}

    function infoBoxPosition(){
        var weatherContainer = $("#weather-container");
        var infoBoxH = weatherContainer.clientHeight;
        var infoBoxW = weatherContainer.clientWidth;

        wweatherContainer.style.left = `calc(50% - ${infoBoxH/2}px)`;
        weatherContainer.style.top = `calc(50% - ${infoBoxW/1.3}px)`;
        weatherContainer.style.visibility = 'visible';
    }


document.getElementById("search-button").addEventListener("click", () => {
var searchTerm = document.getElementById("search-input").value;

if(searchTerm)
searchWeather(searchTerm);
})


