import robotProfile from '../assets/robot.png'
// import userProfile from '../assets/user.png'
import userProfile from '../assets/profile-1.jpg'
import './ChatMessage.css'

function ChatMessage(props){
    return (
        <div className={props.sender=="robot"? "message-robot" : "message-user"}>
            {props.sender=="robot" && <img src={robotProfile} className="chat-profile" alt=""/> }
            <div className="chat-message-txt">{props.message}</div>
            {props.sender=="user" && <img src={userProfile} className="chat-profile" alt=""/> }
        </div>
    );
}

export default ChatMessage ;