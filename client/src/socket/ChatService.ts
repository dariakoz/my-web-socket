import socketIOClient, { Socket } from "socket.io-client";
import { IMessage } from "../types/chat";

class ChatService {
    
    private host = "https://dariakoz.com";
    private ws: Socket;
    private data: IMessage | undefined;
    
    constructor()
    {
        //connect to the Server
        this.ws = socketIOClient(this.host, {
            path: "/app2/"
          });

        //event listener for new messages
        this.ws.on("new message", (data: IMessage) => {
            this.data = data;
        })
    }
    
    /**
     * method to emit messages
     * @param message The sended message
     * @param author The author, who sended the message
     */
    public sendMessage(message: string, author?: string)
    {   
        const messageData: IMessage = {
            content: message,
            timestamp: new Date().getTime(),
            author: author
        }

        if(message.length > 0)
        {
            this.ws.emit("new message", messageData);
        }
    }

    public getServerData()
    {
        return this.data;
    }

    public getWebsocket()
    {
        return this.ws;
    }
}

export default new ChatService();