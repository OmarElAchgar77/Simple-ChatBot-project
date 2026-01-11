import { useState } from 'react'
import {Chatbot} from 'supersimpledev' 
import loadingSpinner from '../assets/loading-spinner.gif'
import './ChatInput.css'

let i = 7;
function ChatInput( {Messages, setMessages} ) {
    const [inpt, setInpt] = useState('');

    function saveMessage(event) {
        setInpt(event.target.value);
    }

    async function sendMessage() {
        const newChatMessages = [
            ...Messages,
            {
                message: inpt,
                sender: "user",
                id: `${i++}` 
            }
        ] ;
        setInpt("");
        setMessages([
                ...Messages,
                {
                    message: <img className="loadinf-gif" src={loadingSpinner} />,
                    sender: "robot",
                    id: `${i++}` 
                }
            ] 
        );

        const response = await Chatbot.getResponseAsync(inpt);

        setMessages([
            ...newChatMessages,
            {
                message: response,
                sender: "robot",
                id: `${i++}` 
            }
        ]);
    }

    function deleteText(event) {
        if (event.key=="Enter") sendMessage();
        if (event.key=="Escape") setInpt("");
    }

    return (
        <div className="chat-input-container">                    
            <input 
                placeholder="Send a message to chatbot" 
                size= '40'
                onChange={saveMessage}
                value={inpt}
                onKeyDown={deleteText}
                className="chat-input"
            />
            <button className="send-bttn" onClick={sendMessage}>Send</button>
        </div>
    ); 
}

export default ChatInput ;