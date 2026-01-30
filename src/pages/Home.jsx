import React from "react";
import '../App.css';
import { RiImageAiFill } from "react-icons/ri";
import { RiImageAddLine } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";





function Home() {
    return (
        <div className="home">
            <nav>
                <div className="logo">
                    Smart AI Bot
                </div>
            </nav>
            <div className="hero">
                <span id="tag">What can I help with ?</span>
                <div className="cate">
                    <div className="upImg">
                        <RiImageAddLine />
                        <span>Upload Image</span>

                    </div>
                    <div className="genImg">
                        <RiImageAiFill />
                        <span>Generate Image</span>

                    </div>
                    <div className="chat">
                        <MdChatBubbleOutline />
                        <span>Let's Chat</span>

                    </div>
                </div>
            </div>

            <form className="input-box">
                <button id="add">
                    <FiPlus />

                </button>
                <input type="text" placeholder="Ask Something...!" />
                <button id="submit">
                    <FaArrowUpLong />
                </button>
            </form>
        </div>
    );
}

export default Home;