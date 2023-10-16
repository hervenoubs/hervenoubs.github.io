var http = require('http');
var url =  require('url');
var fs = require('fs');

http.createServer(function(req, res){

	var q  = url.parse(req.url, true);
	var thefile = '.' + q.pathname;
	fs.readFile(thefile, function(err, data){
		
		if(err){
			res.writeHead(404, {'ContentType':'text/html'});
			return res.end('404 not found');
		}
		res.writeHead(202, {'ContentType':'text/html'});
		res.write(data);
		return res.end();

	});

}).listen(8080);