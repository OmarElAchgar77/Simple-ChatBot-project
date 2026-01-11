import { useEffect, useRef } from 'react'
import ChatMessage from '../components/ChatMessage'
import './ChatMessages.css'

function ChatMessages( { Messages } ){
    const chatMessagesRef = useRef(null);

    useEffect(()=>{
        const containerElem = chatMessagesRef.current ;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight ;
        }
    }, [Messages]);
    return (
        <div className="chat-messages" ref={chatMessagesRef}>
            {
                Messages.map((Message)=>{
                    return (
                        <ChatMessage message={Message.message} sender={Message.sender} key={Message.id} />
                    );
                })
            }
        </div> 
    );
}

export default ChatMessages ;