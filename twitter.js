var Twitter = require('twitter');

var twit = new Twitter({
	consumer_key: 'ugR8aw3Ap19C2rj2fiVGn7Idy',
	consumer_secret: '3pnwnceFcG9GnhvJGQtddiLK7jyNiaTwKsyzTUJdw1BfUdUzFb',
	access_token_key: '83310757-cLa2Nn6gzQnb0eorENnWqWUe5K4bsN0K0CyA3vynr',
	access_token_secret: 'EG6XkUOMNVyBYs2jfoA9bUutjjX8poDexegBOlDv9JIZC'
})

twit.post('statuses/update', {status: 'At work on my first fullstack project. A twitter dashboard for chromecast.'},  function(error, tweet, response){
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
});