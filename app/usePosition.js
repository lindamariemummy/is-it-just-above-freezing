var fixDecPlaces = require('./fixDecPlaces');
var $ = require('jquery');

module.exports = function() {
  var x = document.getElementById('demo');
  var temperature;
  $.get('http://localhost:3000/api/' +
    fixDecPlaces(position.coords.latitude, 2) + '/' +
    fixDecPlaces(position.coords.longitude, 2), function(data) {
      temperature = data.temp;
      console.log(temperature, fixDecPlaces(position.coords.latitude, 2));
      if (temperature < 32) {
        x.innerHTML = '<h1> YES </h1>';
      }
      else {
        x.innerHTML =  '<h1> NO </h1>';
      }
    });
};
