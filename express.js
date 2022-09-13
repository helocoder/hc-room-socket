var express = require('express');
var app = express();
var socket = require('socket.io');

var server = app.listen(4000,()=>{
     console.log('listening....')
});
//middleware//
app.use(express.static('./public'));

//socket connection

var io = socket(server);
io.on('connection',(socket)=>{
    console.log('socket connection made...',socket.id);
   
    socket.on('chat',(data)=>{
       
        io.sockets.emit('chat',data);

    });
});

