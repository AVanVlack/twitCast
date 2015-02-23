var Twitter = require('twitter');
var Key = require('./key.js');

var twit = new Twitter({
	consumer_key: Key.consumer_key,
	consumer_secret: Key.consumer_secret,
	access_token_key: Key.access_token_key,
	access_token_secret: Key.access_token_secret
})


twit.stream('statuses/filter', {track: 'javascript'}, function(stream) {
    stream.on('data', function(tweet) {
        console.log(tweet.text);
    });

    stream.on('error', function(error) {
        throw error;
    });
});
