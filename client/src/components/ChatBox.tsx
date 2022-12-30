import React from "react";
import { IMessage } from "../types/chat";

export function ChatBox({author, content}: IMessage)
{
	return (
		<li>{author}: {content}</li>		
	)
}
