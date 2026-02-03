import React, { useContext } from "react";
import { dataContext, PrevUser } from "../context/UserContext";


function Chat() {
    let {input, setInput, prevInput, setPrevInput, showResult, setShowResult} = useContext(dataContext);
    return (
        <div className="chat-page">
            <div className="user">
                <img src="" alt="" />
                <span>{PrevUser.prompt}</span>
            </div>

            <div className="ai">
                <img src="" alt="" />
                <span>{showResult}</span>
            </div>
            
        </div>
    );
}

export default Chat;