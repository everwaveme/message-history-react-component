import React from "react";
import chatHeaderAvatar from '../../assets/cat-avatar.jpg';
import starIcon from '../../assets/star-icon.png';

function ChatHeader({ chatInfo }) {
    const userMessage = chatInfo.find(item => item.type === 'message');

    return (
        <div className="chat-header-container">
            <div className="chat-header-online">
                <img className="chat-header-avatar" src={chatHeaderAvatar} />
            </div>
            <div className="chat-header-info">
                <span className="chat-header-name">
                    {userMessage.from.name}
                </span>
                <span className="chat-header-counter">
                    147 сообщений
                </span>
            </div>
            <img className="chat-header-star-icon" src={starIcon} />
        </div>
    );
}

export default ChatHeader;