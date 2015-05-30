var config = {
  'secrets' : {
    'clientId' : process.env.FOURSQUARE_CLIENT_ID,
    'clientSecret' : process.env.FOURSQUARE_CLIENT_SECRET,
    'redirectUrl' : 'https://whereTO.com/location'
  }
}

var foursquare = require('node-foursquare')(config);