var $ = require('jquery');
var fixDecPlaces = require('./fixDecPlaces');
var display = require('./display');

//I used information and code from
//http://www.w3schools.com/html/html5_geolocation.asp
//to help me access the browser's geolocation ability
module.exports = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(usePosition);
  } else {
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }
};

function usePosition(position) {
  $.get('http://localhost:3000/api/' +
    fixDecPlaces(position.coords.latitude, 2) + '/' +
    fixDecPlaces(position.coords.longitude, 2), function(data) {
      display(data.temp, 32);
    });
}
