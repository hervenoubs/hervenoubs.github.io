const express = require('express');
const router = require('./things');

var app = express();

app.use('/hello', router);

app.listen(3000, function(){
	console.log('Sevrer running on port 3000');
});