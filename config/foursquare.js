var endpoint = 'https://api.foursquare.com/v2/venues/search?client_id=' + process.env.FOURSQUARE_CLIENT_ID + '&client_secret='+ process.env.FOURSQUARE_CLIENT_SECRET + '&v=20130815&ll=40.7,-74&query=donuts';

module.exports = endpoint;