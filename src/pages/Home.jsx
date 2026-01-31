import React from "react";
import '../App.css';
import { RiImageAiFill } from "react-icons/ri";
import { RiImageAddLine } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";
import Chat from "./Chat.jsx";
import { useContext } from "react";
import { dataContext } from "../context/UserContext.jsx";


function Home() {
    let {letStartRes, setLetStartRes, popUp, setPopUp, input, setInput, feature, setFeature, prevInput, setPrevInput} = useContext(dataContext);
    async function handleSubmit(e) {
        setLetStartRes(true);
        setPrevInput(input);
        setInput("");
    }
    return (
        <div className="home">
            <nav>
                <div className="logo">
                    Smart AI Bot
                </div>
            </nav>

            {!letStartRes? <div className="hero">
                <span id="tag">What can I help with ?</span>
                <div className="cate">
                    <div className="upImg">
                        <RiImageAddLine />
                        <span>Upload Image</span>

                    </div>
                    <div className="genImg" onClick={()=> setFeature("genImg")}>
                        <RiImageAiFill />
                        <span>Generate Image</span>

                    </div>
                    <div className="chat" onClick={()=> setFeature("chat")}>
                        <MdChatBubbleOutline />
                        <span>Let's Chat</span>

                    </div>
                </div>
            </div> :
            <Chat /> 
            }
            

            <form className="input-box" onSubmit={(e) =>{
                e.preventDefault();
                if (input){
                    handleSubmit(e)}
                }
                }>
                {popUp? <div className="pop-up">
                    <div className="select-up">
                        <RiImageAddLine />
                        <span>Upload Image</span>
                    </div>
                    <div className="select-gen" onClick={()=> setFeature("genImg")}>
                        <RiImageAiFill />
                        <span>Generate Image</span>

                    </div>
                </div> 
                : null
                }
                <div id="add" onClick={() => {
                    setPopUp(prev => !prev)
                }}>
                    {feature == "genImg" ? <RiImageAiFill id="genImg" /> : <FiPlus />}

                

                </div>
                <input type="text" placeholder="Ask Something...!" onChange={(e) => setInput(e.target.value)} value={input}/>
                {input? <button id="submit">
                    <FaArrowUpLong />
                </button>: null}
            </form>
        </div>
    );
}

export default Home;