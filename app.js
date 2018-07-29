const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=17%20moira%20ave%20west%20ryde',
  json: true
}, (err, res, body) => {
  console.log(JSON.stringify(body, undefined, 2));
});