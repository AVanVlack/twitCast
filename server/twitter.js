var app =  require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

var Twitter = require('twit');
var Key = require('./key.js');

var T = new Twitter({
	consumer_key: Key.consumer_key,
	consumer_secret: Key.consumer_secret,
	access_token: Key.access_token_key,
	access_token_secret: Key.access_token_secret
})

var tweets = T.stream('statuses/filter', { track: 'apple', language: 'en' })
var stream = function(keyword){
    tweets.stop();
    tweets = T.stream('statuses/filter', { track: keyword, language: 'en' })
    tweets.on('tweet', function (tweet) {
        io.emit('chat message', tweet.text);
    })
    tweets.on('error', function(error) {
        console.error(error);
      });
}


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        stream(msg);
  });
})



http.listen(3000, function(){
    console.log('listening on *:3000');
});



// io.sockets.on('connection', function(socket){
//     //On client connect

//     if(users.indexOf(socket.id) === -1) {
//         users.push(socket.id);
//     }
//     socket.on('keyword', function(data){
//         //Update/start stream
//     })

//     socket.on('close' function(data){
//         //Application has close. close stream
//     })
// })

