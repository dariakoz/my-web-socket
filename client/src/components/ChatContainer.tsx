import React, { useEffect, useState } from "react";
import ChatService from "../socket/ChatService";
import { IMessage } from "../types/chat";
import { ChatBox } from "./ChatBox";
import InputText from "./InputText";

export default function ChatContainer()
{
    //save the message in 
    const [messages , setMessages] = useState<IMessage[]>([]);

    //event listener for new messages
    useEffect(() => {
        ChatService.getWebsocket().on("new message", (data: IMessage) => {
            setMessages([ ...messages, {
                content: data.content,
                author: data.author
            }])
        })
    })

    //contains and collect messages
    function MessagesList(){
        return( 
            <ul className="messages">
                {
                    messages.map((message, index) => {
                    return <ChatBox key={index} content={message.content} author={message.author} />
                    })
                }
            </ul>
        )
    }

    return (
        <div>
            <MessagesList />
            <InputText />
        </div>
    )
    
}