import React, { createContext, useState } from "react";
export const dataContext = createContext();

function UserContext({children}) {
    let [letStartRes, setLetStartRes] = useState(false);
    let [popUp, setPopUp] = useState(false);
    let [input, setInput] = useState("");
    let [feature, setFeature] = useState("chat");
    let [prevInput, setPrevInput] = useState("");
    let value = {
        letStartRes, setLetStartRes,
        popUp, setPopUp,
        input, setInput,
        feature, setFeature,
        prevInput, setPrevInput
    }
    return (
        <div>
            <dataContext.Provider value={value}>
            {children}
            </dataContext.Provider>
        </div>
    );
}

export default UserContext;