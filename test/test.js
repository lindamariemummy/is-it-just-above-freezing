// grunt test runs of different database (notes_test)
process.env.MONGO_URL = 'mongodb://localhost/notes_test';
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

require('../server');

var expect = chai.expect;
var temp1, temp2;
var yesNo;

describe('basic weather test', function() {
  it('gets a temperature', function(done) {
    chai.request('http://api.wunderground.com/api/')
    .get(process.env.API_ID
      + '/conditions/q/'
      + '47.60' + ',' + '-122.33'
      + '.json')
    .end(function(err, data) {
      var parsedData = JSON.parse(data.text);
      temp1 = parsedData.current_observation.temp_f;
      done();
    });
  });
  it('should display the correct response for Seattle', function(done) {
    chai.request('http://localhost:3000')
    .get('/api/47.60/-122.33')
    .end(function(err, res) {
      expect(res.statusCode).to.eql(200);
      temp2 = res.body.temp;
      expect(temp1).to.eql(temp2);
      done();
    });
  });
});
