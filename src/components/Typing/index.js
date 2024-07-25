import React from "react";

function Typing({ from, message }) {

    return (
        <li className="typing">
            <div className="typing-container">
                <div className="typing-loader">
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <div className="circle-3"></div>
                </div>
            </div>
        </li>
    );
}

export default Typing;