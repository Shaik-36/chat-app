import { createContext, useContext, useEffect, useState } from "react";
import {baseURL, getRequest, postRequest} from "../utils/services";



// Create Chat Context
const ChatContext = createContext()

// Provide context to application
export const ChatContextProvider = ({children, user}) => {

    // Define userChats, isUserChatsLoading, userChatsError states
    const [userChats, setUserChats] = useState(null)
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false)
    const [userChatsError, setUserChatsError] = useState(null)


    useEffect(() => {

        // Get Current Chats
        const getUserChats = async() => {

            if(user?._id) {

                setIsUserChatsLoading(true)
                setUserChatsError(null)
                    
                const response = await getRequest(`${baseURL}/chats/${user?._id}`)
                setIsUserChatsLoading(false)

                    if(response.error) {
                        return setUserChatsError(response)
                    }


                setUserChats(response)  
                }

            }
        // Get Current Chats
        getUserChats()

    }, [user] )

    // respons with the Chat Contex Provider
    return (
        <ChatContext.Provider
            value = {{
                userChats,
                isUserChatsLoading,
                userChatsError
            }}

        >
            {children}
        </ChatContext.Provider>
    )

}

// Custom hook to use useChat()
export const useChat = () => { return useContext(ChatContext)};
