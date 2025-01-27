import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {baseURL, getRequest, postRequest} from "../utils/services";



// Create Chat Context
const ChatContext = createContext()

// Provide context to application
export const ChatContextProvider = ({children, user}) => {

    // Define userChats, isUserChatsLoading, userChatsError states
    const [userChats, setUserChats] = useState(null)
    const [isUserChatsLoading, setIsUserChatsLoading] = useState(false)
    const [userChatsError, setUserChatsError] = useState(null)
    const [potentialChats, setPotentialChats] = useState([])

    // Get Potential User Chats
    useEffect(() => {
        const getUsers = async () => {
            const response = await getRequest(`${baseURL}/users`)
            if(response.error) {
                return console.log("Error fetting users: ", response)
            }

            const pChats = response.filter((u) => {

                let isChatCreated = false
                if(user?._id === u._id) {
                    return false
                }

                if(userChats) {
                    isChatCreated = userChats?.some((chat) => {
                        return chat.members[0] === u._id || chat.members[1] === u._id
                    })
                }
                return !isChatCreated
            });
            setPotentialChats(pChats)
        }
        getUsers()
    }, [userChats])

    
    // Create Chat
    const createChat = useCallback(async (firstId, secondId) => {
        const response = await postRequest(`${baseURL}/chats`, JSON.stringify({
            firstId, 
            secondId
        }))

        if(response.error) {
            return console.log("Error Creating Chat", response)
        }

        setUserChats((prev) => [...prev, response])

    },[])


    // Get Current User
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
                userChatsError,
                potentialChats,
                createChat
            }}

        >
            {children}
        </ChatContext.Provider>
    )

}

// Custom hook to use useChat()
export const useChat = () => { return useContext(ChatContext)};
