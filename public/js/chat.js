const socket = io();

var chatUserName = document.querySelector('#chat-username');
var chatMessage = document.querySelector('#chat-message');


socket.on('connect', () => {
    
    
    let chatform = document.getElementById('chatForm');
    console.log(chatform);
    if(chatform){
        // add event listener
        // broadcast message back to server

        chatform.addEventListener('submit', (e) => {
            
            e.preventDefault();
            
            socket.emit('chatRoom', {
                username: chatUserName.value,
                message: chatMessage.value
            })

            chatMessage.value = ''

            
        })
    }

    socket.on('chatRoom', (msgFromServer) => {
        
        showMessage(msgFromServer);

    })
})

function showMessage(data) {
    var chatDisplay = document.querySelector('.chat-display');
    var newMessage = document.createElement('p');
    if (chatUserName.value == data.username) {
      newMessage.className = 'bg-success chat-text';
    } else {
      newMessage.className = 'bg-info text-warning chat-text';
    }
    newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
  }