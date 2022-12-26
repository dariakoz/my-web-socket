import React, { useState } from "react";

export default function InputText()
{
	const [message, setMessage] = useState('')

	function addAMessage(message: string)
	{
		console.log(message)
	}

	return (
		<form id="form" action="">
			<input 
			id="input" 
			autoComplete="off" 
			placeholder="Sende eine Nachricht"
			onChange= {(e) => {
				setMessage(e.target.value);
				console.log(message);
			}}
			/>
			<button
			onClick={(event) => {
				event.preventDefault();
				addAMessage(message);
			}}
			>Senden</button>
		</form>
	)
}