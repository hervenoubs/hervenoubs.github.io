var http = require('http');

http.createServer(function(req, res){

	res.writeHeader(200, {'Content-Type':'text/html'});
	res.write(req.url);
	res.end();

}).listen(8080);

console.log('Your app is runnning..');