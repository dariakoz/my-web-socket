import React, { useContext, useEffect, useState } from "react";
import ChatServices from "../socket/ChatService";
import { IMessage } from "../types/chat";

export default function InputText()
{
	const [message, setMessage] = useState('');

	function addMessage(e: React.MouseEvent)
	{
		e.preventDefault();
		ChatServices.sendMessage(message, "Vinzenz");
		setMessage("");
	}
	

	return (
		<form className="form" action="">
			<input 
			className="input" 
			autoComplete="off"
			value={message} 
			placeholder="Sende eine Nachricht"
			onChange= {(e) => {
				setMessage(e.target.value);
			}}
			/>

			<button
			onClick={(e) => addMessage(e)}
			>Senden</button>

		</form>
	)
}