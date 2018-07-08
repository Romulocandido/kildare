var port = 8091;
var express = require('express');
var app = express();

app.get('/', function(req, res){
	
	res.send("OLA MUNDO");					
					
});

var server = app.listen(port);