const express = require('express');

const app = express();

const socket = require('socket.io');

// link to public folder
app.use(express.static('public'));

// link to views folder
app.set('view engine', 'ejs');
app.set('views', 'views')

// create routes
app.use(require('./routes/index'))
app.use(require('./routes/albums'))
app.use(require('./routes/chatroom'))
app.use(require('./routes/forum'))
app.use(require('./routes/api'))
app.use(require('./routes/chat'))


// Start Server

let server = app.listen(3000, () => {
    console.log('Listening on port 3000');
})

// pass the server into the socket server

let io = socket(server);

// start server listener for connections

io.on('connect', (socket) => {  //socket is the pool of connected clients
    
    // this message will send upon connection

    socket.on('chatRoom', (msgClient) => {
        
        console.log(msgClient);
        
        // broadcasting to all conected clients

        io.emit('chatRoom', msgClient)

    })

})