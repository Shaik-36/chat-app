import {chatModel} from "../Models/chatModel"

// Create Chat
const createChat = async (req, res) => {

    const {firstId, secondId} = req.body
    try {
        
        const chat = await chatModel.findOne({
            members : {$all: [firstId, secondId]}
        })

        if(chat) return res.status(200).json(chat);

        const newChat = new chatModel({
            members: [firstId, secondId]
        })

        const response = await newChat.save()

        return res.status(200).json(response)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }

}


// Find User Chat
const findUserChats = async(req, res) => {
    const userId = req.params.userId

    try {

        const chats = await chatModel.findOne({
            members: {$in: [userId]},
        })

        return res.status(200).json(chats)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


// Find  Chat
const findChat = async(req, res) => {
    const {firstId, secondId} = req.params

    try {

        const chat = await chatModel.findOne({
            members : {$all: [firstId, secondId]}
        })

        return res.status(200).json(chat)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}



export default {
    createChat,
    findUserChats,
    findChat
}

