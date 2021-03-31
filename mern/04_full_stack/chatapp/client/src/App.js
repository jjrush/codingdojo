import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Prompt from './components/Prompt'
import ChatWindow from './components/ChatWindow'
import { Router } from '@reach/router';
import './App.css';
import './components/style.css';

function App() {
    // notice that we pass a callback function to initialize the socket
    // we don't need to destructure the 'setSocket' function since we won't be updating the socket state
    const [socket] = useState(() => io(':8000'));
    const [name,setName] = useState("");

    useEffect(() => {
        // we need to set up all of our event listeners
        // in the useEffect callback function
        // socket.on('Welcome', data => console.log(data));

        // note that we're returning a callback function
        // this ensures that the underlying socket will be closed if App is unmounted
        // this would be more critical if we were creating the socket in a subcomponent
        return () => socket.disconnect(true);
    }, []);
    
    return (
        <div className="App">
            <h1 className="header">MERN Chat</h1>
            <Router>
                <Prompt path="/" default socket={socket} 
                        name={name} setName={setName} 
                />
                <ChatWindow path={`/chat`} socket={socket} name={name}
                />
            </Router>
        </div>
    );
}

export default App;