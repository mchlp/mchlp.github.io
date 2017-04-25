//data for weather
var position;

//when document is ready
$(document).ready(pageReady);

//page ready
function pageReady() {
    getLocation();
} 

//get location
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        showError(0);
    }
}

function showPosition(loc) {
    position = loc
    getWeather(position.coords.latitude, position.coords.longitude);
}

function showError(error) {
    switch(error.code) {
        case 0:
            $("#alert").find("p")[0].innerText= "Geolocation is not supported by this browser.";
        case error.PERMISSION_DENIED:
            $("#alert").find("p")[0].innerText = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            $("#alert").find("p")[0].innerText = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            $("#alert").find("p")[0].innerText = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            $("#alert").find("p")[0].innerText = "An unknown error occurred."
            break;
    }
    $("#alert")[0].style.display="block";
    getWeather(43.7, -79.42);
}

//get weather data
function getWeather(latitude, longitude) {

    //var url = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&APPID=438a542b168299975bc97da70d9a1817&units=metric"
    var url = "https://api.darksky.net/forecast/c46581f326fecee15bcaa599c2aa04bf/"+latitude+","+longitude+"?units=si"
    
    $.ajax({
        xhrFields: {cors: false},
        type: "GET",
        url: url,
        dataType: "jsonp",
        async: true,
        success: function(data) {
            console.log(data);
            updateWeather(data);
        }
    });
    
    console.log(url);
}

//update weather data 
function updateWeather(data) {
    var temp = Math.round(data["currently"]["temperature"]);
    var loc = data["timezone"].substring(data["timezone"].indexOf("/")+1).replace("_", " ");
    var type = data["currently"]["icon"];
    
    $("#weatherTemp")[0].innerText = temp+"°C";
    $("#weatherLoc")[0].innerText = loc;
    
    var image;
    console.log(type);
    switch(type) {
        case "clear-day":
        case "clear-night":
            image = "sunny.png";
            break;
        case "rain":
            image = "rain.png";
            break;
        case "snow":
        case "sleet":
            image = "snow.png";
            break;
        case "wind":
        case "fog":
        case "cloudy":
            image = "cloudy.png";
            break;
        case "partly-cloudy-day":
        case "partly-cloudy-night":
            image = "sunAndClouds.png";
            break;
        default:
            image = "question.png";
            break;
    }
    
    $("#weatherImage").attr("src", "images/"+image);
}