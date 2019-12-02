var key = "3689129273ba0cb220b574b2f2631334";
var tempUnit = "metric";
var searchMethod;
//$(document).ready(); 


$.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?",
    method: "GET"
}).then(function(response){
    console.log(response);
});

function searchWeather(){

}