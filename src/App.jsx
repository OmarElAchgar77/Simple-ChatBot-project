import { useState, useEffect } from 'react'
import ChatMessages from './components/ChatMessages'
import ChatInput from './components/ChatInput'
import './App.css'

function App() {
    const [Messages, setMessages] = useState( JSON.parse(localStorage.getItem('messages')) ||  [
            // {message: "Hi chatbot", sender: "user", id: "1"},
            // {message: "Hi, How can i help you ?", sender: "robot", id: "2"},
            // {message: "What is today date ?", sender: "user", id: "3"},
            // {message: "Today is 06/02/2026", sender: "robot", id: "4"},
            // {message: "Thanks", sender: "user", id: "5"},
            // {message: "You welcom", sender: "robot", id: "6"},
    ]);

    useEffect(() => {
        localStorage.setItem('messages', JSON.stringify(Messages));
    }, [Messages]);

    return (
        <div className="app-container">
            {
                (Messages.length===0) && (
                    <p className="welcomMessage">Welcome to the chatbot project! Send a message using the textbox below.</p>
                )
            }
            <ChatMessages Messages={Messages} />
            <ChatInput Messages={Messages} setMessages={setMessages} />
        </div> 
    );
}

export default App
