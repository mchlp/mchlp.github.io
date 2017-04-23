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
            $("#alert").find("p")[0].innerHTML= "Geolocation is not supported by this browser.";
        case error.PERMISSION_DENIED:
            $("#alert").find("p")[0].innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            $("#alert").find("p")[0].innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            $("#alert").find("p")[0].innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            $("#alert").find("p")[0].innerHTML = "An unknown error occurred."
            break;
    }
    $("#alert")[0].style.display="block";
    getWeather(43.7, -79.42);
}

//get weather data
function getWeather(latitude, longitude) {
    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&APPID=438a542b168299975bc97da70d9a1817&units=metric"

    var xhttp = new XMLHttpRequest();
    //xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=toronto,ca&APPID=438a542b168299975bc97da70d9a1817&units=metric", true);
    xhttp.open("GET", url, true);
    
    xhttp.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            updateWeather(data);
        }
    };
    xhttp.send();
    
    console.log(url);
}

//update weather data 
function updateWeather(data) {
    temp = Math.round(data["main"]["temp"]);
    loc = data["name"];

    $("#weatherLoc")[0].innerHTML = loc;
    $("#weatherTemp")[0].innerHTML = temp+"&deg;C";
}