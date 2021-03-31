import React, { useEffect, useState } from 'react';
import './style.css';


const ChatWindow = (props) => {
    const {socket, name} = props;
    const [messages, setMessages] = useState([]);
    const [loaded,setLoaded] = useState(false);
    const [msg, setMsg] = useState("");
    const [validation, setValidation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( msg === "" ) {
            setValidation("You must include a message");
        } else {
            setValidation("")
            setMessages(prevMessages => {
                return [msg, ...prevMessages]
            });
            socket.emit("new_message", msg);
            setMsg("");
        }
    }

    useEffect(() => {
        if ( !loaded ) {
            socket.emit("new_client_connected", data => setMessages(data))
            setLoaded(true);
        }
        
        socket.on("update_other_clients", msg => {
                console.log("Incoming msg: " + msg);
                setMessages(prevMessages => {
                    return [msg, ...prevMessages]
                });
            }
        );
        console.log(name);
    }, []);

    return (
        <div className="main-content">
            <div className="chat-window">
                { loaded &&
                    messages.slice(0).reverse().map( ( message, index ) => {
                        return (
                            index % 2 === 0 ? 
                                <div key={index} className="sender">
                                    <p>{message}</p>
                                </div>
                            :
                                <div key={index} className="receiver">
                                    <p>{message}</p>
                                </div>
                        )
                    })
                }
            </div>
            <input className="msg-input" 
                type="text"
                placeholder="Begin typing..." 
                value={msg}
                onChange = {(e)=>setMsg(e.target.value)}
            />
            {
                validation !== "" && msg === "" ? 
                    <p className="validation-warning">{validation}</p>
                    : null
            }
            <button className="btn-submit" onClick={handleSubmit}>Send</button>
        </div>
    )
}



export default ChatWindow;