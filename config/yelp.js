var yelp = require('yelp');

module.exports = yelp.createClient({
  consumer_key: process.env.YELP_CONSUMER_KEY, 
  consumer_secret: process.env.YELP_CONSUMER_SECRET,
  token: process.env.YELP_TOKEN,
  token_secret: process.env.YELP_TOKEN_SECRET
});