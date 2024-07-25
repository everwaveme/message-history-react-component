import React from "react";

function Message({ from, message }) {

    return (
        <li className="message">
            <div className="message-container">
                <div className="message-header">
                    <div className="message-name-online-wrap">
                        <span className="message-name">{from.name}</span>
                        <div className="online-icon"></div>
                    </div>
                    <span className="message-time">{message.time}</span>
                </div>
                <p className="message-text">{message.text}</p>
            </div>
        </li>
    );
}

export default Message;