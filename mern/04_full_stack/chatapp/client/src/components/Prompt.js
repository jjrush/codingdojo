import React from 'react'
// import io from 'socket.io-client';
import { navigate } from '@reach/router';
import axios from 'axios';
import './style.css'

const Prompt = (props) => {
    const {setName} = props;

    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/chat/`);
    }

    return (
        <div className="main-content">
            <h2>Get started chatting!</h2>
            <label>I want to use the name:</label>
            <input className="name-input" 
                type="text" 
                onChange = {(e)=>setName(e.target.value)}
            />
            <button className="chat-btn" onClick={handleClick}>Chat</button>
        </div>
    )
}



export default Prompt;