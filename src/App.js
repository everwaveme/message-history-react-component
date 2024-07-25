import './App.css';
import React from "react";
import ChatHeader from './components/ChatHeader';
import MessageHistory from "./components/MessageHistory";
import messages from "./data/messages";

function App() {

  return (
    <div className="container">
      <div className="chat-wrap">
        <div className="chat-list">
        </div>
        <div className="chat-header-history-container">
          <div className="chat-header">
            <ChatHeader chatInfo={messages} />
          </div>
          <div className="chat-history">
            <MessageHistory list={messages} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
