import React from "react";

function Response({ from, message }) {

    return (
        <li className="response">
            <div className="response-container">
                <div className="response-header">
                    <div className="response-name-online-wrap">
                        <span className="response-name">{from.name}</span>
                        <div className="online-icon"></div>
                    </div>
                    <span className="response-time">{message.time}</span>
                </div>
                <p className="response-text">{message.text}</p>
            </div>
        </li>
    );
}

export default Response;