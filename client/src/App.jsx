import React, { useState, useEffect } from 'react';
import socket from './sockets';
import './App.css'

function App() {

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const newMessage = {
      username,
      message,
      timestamp: new Date().toLocaleTimeString(),
    };

    socket.emit("send_message", newMessage);
    setMessage("");
  };

  return (
    <div className="chat-container">
      <h2>Real-Time Chat App</h2>
      {!username ? (
        <div className="username-input">
          <input
            placeholder="Enter your username"
            onKeyDown={(e) => {
              if (e.key === "Enter") setUsername(e.target.value);
            }}
          />
        </div>
      ) : (
        <>
          <div className="chat-box">
            {messages.map((msg, i) => (
              <div key={i} className="message">
                <strong>{msg.username}</strong>: {msg.message} <span>({msg.timestamp})</span>
              </div>
            ))}
          </div>
          <div className="input-box">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App
