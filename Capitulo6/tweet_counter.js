	var Twitter = require('twit'), // módulo Twit
		credentials = require('./credentials.json'), // credenciais do Twitter
		twitter, stream,
		counts = {};

	counts.love = 0;
	
	twitter = new Twitter(credentials);

	stream = twitter.stream('statuses/filter', {track: ['love']});
		
		stream.on('tweet', function(tweet){
			
			if (tweet.text.indexOf('love') > -1) { 
				counts.love = counts.love + 1;}
		});

		
		setInterval(function(){
  					console.log("love:" + counts.love);
  				}, 3000);

module.exports = counts;
