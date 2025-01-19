import { Router } from "express";
import { createMessage, getMessage } from "../Controller/messageController.js";

const messageRoute = Router();  // Changed variable name to 'chatRouter'

messageRoute.post("/", createMessage);
messageRoute.get("/:chatId", getMessage);


export default messageRoute;  // Exporting as 'chatRouter'
