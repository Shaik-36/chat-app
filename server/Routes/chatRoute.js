import { Router } from "express";
import { createChat, findUserChats, findChat } from "../Controller/chatController.js";

const chatRouter = Router();  // Changed variable name to 'chatRouter'

chatRouter.post("/", createChat);
chatRouter.get("/:userId", findUserChats);
chatRouter.get("/find/:firstId/:secondId", findChat);

export default chatRouter;  // Exporting as 'chatRouter'
