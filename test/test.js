var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

require('../server');

var expect = chai.expect;
var temp1, temp2;

describe('basic weather test', function() {
  it('gets a temperature', function(done) {
    chai.request('http://api.wunderground.com/api/')
    .get(process.env.API_ID
      + '/conditions/q/'
      + '47.60' + ',' + '-122.33'
      + '.json')
    .end(function(err, data) {
      console.log(data.body.current_observation.temp_f);
      temp1 = data.body.current_observation.temp_f;
      done();
    });
  });
  it('should display the correct response for Seattle', function(done) {
    chai.request('https://isitcoldenough.herokuapp.com')
    .get('/api/47.60/-122.33')
    .end(function(err, res) {
      expect(res.statusCode).to.eql(200);
      temp2 = res.body.temp;
      expect(temp1).to.eql(temp2);
      done();
    });
  });
});
