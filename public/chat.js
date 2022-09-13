//query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

//emitting events
btn.addEventListener('click',()=>{
    socket.emit('chat',{
        message:message.value,
        handle:handle.value
    });
    message.value = "";
});

//listen for events//
socket.on('chat',(data)=>{
    var audio = new Audio('./ting.mp3');
   audio.play();
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})
