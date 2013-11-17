var io = require('socket.io').listen(3002);
var net = require('net');
var server = net.createServer(function(c){


io.sockets.on('connection', function(socket){
	console.log ('connected');
	socket.on('movement', function(data){
		console.log(data);
		if (data.direction == 'forward'){
			c.write('w');
		}
		if (data.direction == 'backward'){
			c.write('s');
		}
		if (data.direction == 'forward left'){
			c.write('a');
		}
		if (data.direction == 'forward right'){
			c.write('d');
		}
		if (data.direction == 'backward left'){
			c.write('z');
		}
		if (data.direction == 'backward right'){
			c.write('c');
		}
		if (data.direction == 'stop'){
			c.write('e');	
		};
		if (data.direction == 'fire'){
			c.write('f');
		};
		if (data.direction == 'reload'){
			c.write('r');
		};
	});
	socket.on('sound', function(data){
		io.sockets.emit('sound', data);
	});
});
});

server.listen(3007);
