import { useState, useEffect } from "react";
import { baseURL, getRequest } from "../utils/services";

export const useFetchRecipentUser = (chat, user) => {

    const [recipientUser, setRecipientUser] = useState(null)
    const recipientId = chat?.members?.find((id) => id !== user?._id);

    useEffect(() => {
        const getUser = async() => {
            
            if(!recipientId) {
                return null
            }
            
            const response = await getRequest(`${baseURL}/users/find/${recipientId}`)

            if(response.error){
                return setError(response)
            }

            setRecipientUser(response)

        }

        getUser()
    }, [chat, recipientId]);

    return {recipientUser}

}