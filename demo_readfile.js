var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

	fs.readFile('demofile1.html', function(err, data){
		res.writeHeader(200, {'Content-Type':'text/html'});
		res.write(data);
		return res.end();
	});

}).listen(8080);

console.log('Your app is runnning..');