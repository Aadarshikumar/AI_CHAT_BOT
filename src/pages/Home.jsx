import React from "react";
import '../App.css';
import { RiImageAiFill } from "react-icons/ri";
import { RiImageAddLine } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";
import Chat from "./Chat.jsx";
import { useContext } from "react";
import { dataContext, user, PrevUser } from "../context/UserContext.jsx";
import { generateResponse } from "../gemini.js";


function Home() {
    let {letStartRes, setLetStartRes, popUp, setPopUp, input, setInput, feature, setFeature, showResult, setShowResult} = useContext(dataContext);
    async function handleSubmit(e) {
        setLetStartRes(true);
        PrevUser.data = user.data;
        PrevUser.mime_type = user.mime_type;
        PrevUser.imgUrl = user.imgUrl;
        PrevUser.prompt = input;
        
        // setPrevInput(input);
        setInput("");
        let result = await generateResponse();
        setShowResult(result);
    }

    function handleImage(e) {
        setFeature("upimg");
        let file = e.target.files[0];

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event) => {
            let base64 = event.target.result.split(',')[1];
            user.data = base64;
            user.mime_type = file.type;
            console.log("Event Image: ", event);
            user.imgUrl = `data:${user.mime_type};base64,${user.data}`;
        }
        reader.readAsDataURL(file);
    }

    return (
        <div className="home">
            <nav>
                <div className="logo">
                    Smart AI Bot
                </div>
            </nav>

            <input type="file" accept="image/*" hidden id="inputImg" onChange={handleImage}/>

            {!letStartRes? <div className="hero">
                <span id="tag">What can I help with ?</span>
                <div className="cate">
                    <div className="upImg" onClick={() => document.getElementById('inputImg').click()}>
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
                    <div className="select-up" onClick={() => document.getElementById('inputImg').click()}>
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