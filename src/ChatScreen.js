import React, {useState} from 'react';
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";


function ChatScreen() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
           name: "Billie",
           image: "https://c.ndtvimg.com/2020-03/r23rm1q8_billie-eilish-body-shaming_120x90_11_March_20.jpg",
           message: "Hey, how are you?", 
        },
        {
            message: "Hi! I'm good.",
        },
    ]);

const handleSend = e => {
    e.preventDefault();
    setMessages([...messages, {message: input}]);
    setInput("");
}

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH BILLIE ON 10/08/20</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar 
                        className="chatScreen__image"
                        alt={message.name} 
                        src={message.image} 
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>   
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>   
                )   
            ))}
            <div className="chatScreen__input">
                <form className="chatScreen__input">
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField"
                    placeholder="Type a message..."
                    type="text" />
                    <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
                </form> 
        </div>
        </div>

        
    );
}

export default ChatScreen;
