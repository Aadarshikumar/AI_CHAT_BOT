// I'll. import the .env file's code later

import { PrevUser } from "./context/UserContext.jsx";


const Api_Url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=AIzaSyDNtWju2FIZVlo-3V6jy6YeNkPmODpk6so";

export async function generateResponse() {
    // Build parts array conditionally
    const parts = [
        {
            "text": PrevUser.prompt
        }
    ];

    // Only add inline_data if mime_type and data exist
    if (PrevUser && PrevUser.mime_type && PrevUser.data) {
        parts.push({
            "inline_data": {
                "mime_type": PrevUser.mime_type,
                "data": PrevUser.data
            }
        });
    }

    const RequestOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},
        body: JSON.stringify({
            "contents": [
                {
                    "parts": parts
                }
            ]
        })
    };


    try {
        let response = await fetch(Api_Url, RequestOption);
        let data = await response.json();
        console.log("Data: ", data);
        
        // Check if the response has the expected structure
        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            console.error("Unexpected API response structure:", data);
            return "Sorry, I received an unexpected response from the API.";
        }
        
        let apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        console.log("API Response: ", apiResponse);
        return apiResponse;
    } catch (error) {
        console.error("Error fetching API: ", error);
        return "Sorry, I am unable to process your request at the moment.";
    }

}
