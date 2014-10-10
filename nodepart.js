var spawn = require('child_process').spawn;
var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port:8080});

var cpart = spawn('./cpart', ['./']);

wss.on('connection', function(ws){
	
	cpart.stdout.on('data', function(data){

  	console.log('stdout: ' + data);

		ws.send(data);

	});

	cpart.stderr.on('data', function(data){

	  console.log('stderr: ' + data);

	});

	cpart.on('close', function(code){

	  console.log('cpart exited with code ' + code);

		// todo: probably shouldn't let the cpart die,
		// but if it does, close the connectinon,
		// and find a way to ressurect on new connection
		ws.close();

	});

	ws.on('message', function(message){

		console.log('message: ' + message);

		cpart.stdin.write(message + '\n');

	});

});
