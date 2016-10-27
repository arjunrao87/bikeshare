var express = require('express');  
var request = require('request');
var app = express();

app.listen(process.env.API_PORT || 3100);  

console.log( "Started up Express Server");

app.use('/data', function(req, res) {  
	console.log( "Requesting data from Bay Area Bike Share..." );
	var url = "http://feeds.bayareabikeshare.com/stations/stations.json";
	req.pipe(request(url)).pipe(res);
});