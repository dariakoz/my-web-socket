import express from "express";
import http from "http";
import { Server } from "socket.io";
import { IMessage } from "./types/socket";
import cors from "cors";

// Initializing the Webserver using the express and http
const port: number = 3000;
const app = express();
app.use(cors);
const server = http.createServer(app);

// Initializing the WebSocket using "socket.io";
const io = new Server(server, {
	cors: { // needed because Frontend and Backend have differnt ports
		origin: "*", // connect from everywhere
		methods: ["GET", "POST"]
	}
});

// Eventlistener for the WebSocket on Server-Side
io.on("connection", (socket) => {
	console.log("user is connected");

	socket.on("disconnect", () => {
		console.log("disconnected")
	});

	socket.on("new message", (data: IMessage) => {
		console.log(`🎤 ${data.author}: ${data.content} 🎤`);

		io.emit("new message", data)
	});
})


server.listen(port, () => {
	console.log(`Server works at http://localhost:${port}`);
})
