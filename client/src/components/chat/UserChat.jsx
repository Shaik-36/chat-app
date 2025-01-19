import { useFetchRecipentUser } from "../../hooks/useFetchRecipent";

const UserChat = ({ chat, user }) => {
  const { recipientUser } = useFetchRecipentUser(chat, user);

  console.log("Recipent User: ", recipientUser  )

  return (
   <>
        <div className="bg-gray-700 p-4 rounded-lg w-full max-w-xl mx-auto  hover:bg-gray-600">
        <div className="flex items-center gap-4 w-full">
            {/* Profile Picture */}
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-500">
            <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="User Profile"
                className="w-full h-full object-cover"
            />
            </div>


            {/* Text Content */}
            <div className="flex flex-col flex-grow">
            <p className="text-gray-200 font-semibold text-base">{recipientUser?.username}</p>
            <p className="text-gray-400 text-sm truncate">Text Message</p>
            </div>

            {/* Additional Info */}
            <div className="flex items-center gap-3">
            {/* Date */}
            <span className="text-xs text-gray-400">
            {new Date(recipientUser?.createdAt).toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
            })}
            </span>
            
            {/* Notification Bubble */}
            <div className="w-6 h-6 bg-teal-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                2
            </div>

            {/* Online Status Indicator */}
            <div className="w-4 h-4 bg-green-500 rounded-full border border-white"></div>
            </div>
        </div>
        </div>
   </>
  );
};

export default UserChat;