import React from "react";
import MessageForm from "../components/MessageForm";

const Message = (props) => {
    return (
        <div>
            <MessageForm {...props}/>
        </div>
    )
}

export default Message;