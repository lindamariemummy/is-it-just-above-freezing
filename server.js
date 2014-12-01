'use strict';
var express = require('express');
var app = express();
var request = require('superagent');

app.use(express.static(__dirname + '/build'));

//code modified from Ivan Storck's in class demonstration
app.get('/api/:lat/:lon', function (req, res) {
  var id = process.env.API_ID;
  var WU_URL = 'http://api.wunderground.com/api/' + id +
  '/conditions/q/' + req.params.lat + ','+ req.params.lon + '.json';
  request
  .get(WU_URL)
  .end(function (err, data) {
    var parsedData = JSON.parse(data.text);
    res.status(200).json({temp: parsedData.current_observation.temp_f});
  });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('server running on port: ' + app.get('port'));
});
