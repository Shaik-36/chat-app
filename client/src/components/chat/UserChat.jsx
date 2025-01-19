import { useFetchRecipentUser } from "../../hooks/useFetchRecipent";


const UserChat = ({chat, user}) => {

    const {recipientUser} = useFetchRecipentUser(chat, user)

    return ( 
        <>
        UserChat
        </>
     );
}
 
export default UserChat;
