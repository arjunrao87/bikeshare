var express = require('express');  
var request = require('request');

var app = express();
console.log( "Starting up...");

app.use('/data', function(req, res) {  
	console.log( "Requesting data from bay area bike share..." );
	var url = "http://feeds.bayareabikeshare.com/stations/stations.json";
	req.pipe(request(url)).pipe(res);
});

app.listen(process.env.API_PORT || 3100);  