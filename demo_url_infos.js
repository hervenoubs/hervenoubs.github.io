var http = require('http');
var url = require('url');

http.createServer(function(req, res){

	res.writeHead(200, {'contentType':'text/html'});
	var q = url.parse(req.url, true).query;
	var rq = q.year + '' + q.month;
	res.write(rq);
	res.end();

}).listen(8080);