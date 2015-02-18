var Twitter = require('twitter');
var Key = require('./Key.js');

var twit = new Twitter({
	consumer_key: Key.c_key,
	consumer_secret: Key.c_secret,
	access_token_key: Key.a_key,
	access_token_secret: Key.a_secret
})

twit.stream('statuses/filter', {track: 'apple'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });
 
  stream.on('error', function(error) {
    throw error;
  });
});
