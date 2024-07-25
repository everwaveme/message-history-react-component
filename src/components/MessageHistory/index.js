import React from "react";
import Message from "../Message";
import Response from "../Response";
import Typing from "../Typing";

function MessageHistory({ list }) {
    if (!list.length) {
        return;
    }

    return (
        <ul className="chat-history-list">
            {list.map((item) => {
                if (item.type === 'response') {
                    return (
                        <Response key={item.id} from={item.from} message={item} />
                    );
                }

                if (item.type === 'message') {
                    return (
                        <Message key={item.id} from={item.from} message={item} />
                    );
                }

                if (item.type === 'typing') {
                    return (
                        <Typing key={item.id} from={item.from} message={item} />
                    );
                }
            })}
        </ul>
    );
}

export default MessageHistory;