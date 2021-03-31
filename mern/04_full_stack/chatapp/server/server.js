const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const port = 8000;
app.use(cors());

const server = app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

// to initialize the socket, we need to invoke a new instance
//     of socket.io and pass it our express server instance
// We must also include a configuration settings object to prevent CORS errors
const io = socket(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true,
    }
});

io.on("connection", socket => {
    let messages = [];

    const updateMessages = (newMsg) => {
        messages.push(newMsg)
    }

    // NOTE: Each client that connects get their own socket id!
    // if this is logged in our node terminal, that means we a new client
    //     has successfully completed the handshake!
    console.log('socket id: ' + socket.id);
    
    // We add our additional event listeners right inside this function
    // NOTE: "connection" is a BUILT IN events listener


    socket.on("new_message", data => {
        // send a message with "data" to ALL clients EXCEPT for the one that emitted the
    	//     "new_message" event
        updateMessages(data);
        socket.broadcast.emit("update_other_clients", data);
    });

    socket.on("new_client_connected", () => {
        // respond to the client that just pinged us
        if ( messages.length > 0)
            socket.send(messages);
    });
});

