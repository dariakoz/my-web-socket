import React from "react";

export interface message {
	user?: string;
	message: string;
}


export function ChatBox({user, message}: message)
{
	return (
		<ul id="messages">
			<li>{message}</li>
		</ul>
	)
}



// export function ChatBoxSender()
// {
// 	return (
// 		<div>ChatBox</div>
// 	)
// }