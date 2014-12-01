var $ = require('jquery');
var getLocation = require('./getLocation');

$(document).ready(function() {
  var x = document.getElementById('demo');
  getLocation();
});
