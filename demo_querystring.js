var http = require('http');
var url = require('url');

http.createServer(function(req, res){

	res.writeHeader(200, {'Content-Type':'text/html'});
	var q = url.parse(req.url, true).query;
	var message = q.year + " " + q.month;
	res.write(message);
	res.end();

}).listen(8080);

console.log('Your app is runnning..');