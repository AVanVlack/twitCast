var Twitter = require('twitter');

var twit = new Twitter({
	consumer_key: '',
	consumer_secret: '',
	access_token_key: '',
	access_token_secret: ''
})

twit.post('statuses/update', {status: 'At work on my first fullstack project. A twitter dashboard for chromecast.'},  function(error, tweet, response){
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
});
