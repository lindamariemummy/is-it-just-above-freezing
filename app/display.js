module.exports = function(temperature, criticalTemperature) {
  var x = document.getElementById("demo");

  if (temperature < criticalTemperature) {
    x.innerHTML = "<h1> YES </h1>";
  }
  else {
    x.innerHTML =  "<h1> NO </h1>";
  }
}