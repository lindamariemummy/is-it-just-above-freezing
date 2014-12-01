$(document).ready(function() {
  var x = document.getElementById("demo");
  getLocation();
  });

  //I used information and code from
  //http://www.w3schools.com/html/html5_geolocation.asp
  //to help me access the browser's geolocation ability
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(usePosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function usePosition(position) {
    var x = document.getElementById("demo");
    var temperature;
   $.get('https://isitcoldenough.herokuapp.com/api/'+
    parseFloat(position.coords.latitude).toFixed(2) + '/' +
    parseFloat(position.coords.longitude).toFixed(2), function(data) {
     temperature = data.temp;
     if (temperature < 32) {
      x.innerHTML = "<h1> YES </h1>";
     }
     else {
      x.innerHTML =  "<h1> NO </h1>";
     }
  });
}
