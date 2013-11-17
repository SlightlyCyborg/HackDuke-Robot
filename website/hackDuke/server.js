var http = require('http');
var net = require('net');


////////////////////////////////////////////////////////////////
// tcp socket
// Connection part to my python server
////////////////////////////////////////////////////////////////
var tcpClient = net.connect({port: 3001, host:"localhost"});
tcpClient.setEncoding("utf8");

tcpClient.on('connect',function() {
    console.log('client connected');
    tcpClient.write('node - tcp server a bağlanıldı!');
});

tcpClient.on('data', function(data) {
    console.log("tcp den gelen mesaj = "+ data.toString());
});

tcpClient.on('end', function() {
    console.log('client disconnected');
});

tcpClient.on('error', function(data) {
    console.log("error = " + data);
});