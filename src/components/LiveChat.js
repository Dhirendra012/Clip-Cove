import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessaages } from "../utils/chatSlice";
import { configureStore } from '@reduxjs/toolkit'

import chatReducer from '../utils/chatSlice'

const store = configureStore({
  reducer: chatReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})

const LiveChat = () => 
{
    const [ mesInput , setMesInput] = useState(null);
    const dispatch = useDispatch();
    const messages = useSelector((store) => store.chat.messages);

    useEffect(() => 
    {
        // API Polling
        const x = setInterval(() => 
        {
            // console.log(generateRandomName());
            // console.log(generateRandomMessage(7));
            dispatch(
                addMessaages({
                    name: generateRandomName(), 
                    message: generateRandomMessage(10),}
                ));
        }, 1500);

        return () => clearInterval(x);

    } , []);

    return (
        <>
            <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg flex flex-col-reverse overflow-y-scroll">
                {
                    messages.map((message , index) => 
                    <ChatMessage 
                        key={index}
                        name={message.name}
                        message={message.message}/>
                    )
                }
            
            </div>
            <form className="border border-black ml-2 p-2 rounded-lg"
                onSubmit={(e) => { e.preventDefault(); 
                    dispatch(addMessaages({ name: "Dhiru" , message: mesInput}))} }
            >
                <input onChange={(e) => setMesInput(e.target.value)} className="border border-gray-400 px-2 w-80 py-1 rounded-md" placeholder="write message here" type="text" />
                <button className="px-2 bg-green-300 rounded-md ml-2">Send</button>
            </form>
        </>
        
    )
}

export default LiveChat;