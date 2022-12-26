import React, { useEffect, useState } from "react";
import socketIO from "socket.io-client";

export default function ChatContrainer()
{
	const webSocket = "http://localhost:3002";
	let socketio = socketIO(webSocket);
	const [chats, setChats] = useState([]);

	// useEffect(() => {
	// 	socketio.on("chat", senderchats
	// })


	// return (
	// 	<ul id="messages"></ul>
	// )
}