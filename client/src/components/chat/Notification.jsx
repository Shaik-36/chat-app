import { useState } from "react";
import { Badge } from "@mui/material";
import { Mail as MailIcon } from "@mui/icons-material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import moment from "moment";
import { useAuth } from "../../context/AuthContext";
import { useChat } from "../../context/ChatContext";
import { unreadNotificationsFunc } from "../../utils/unreadNotifications";

const Notification = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const { notifications, allUsers } = useChat();

  const unreadNotifications = unreadNotificationsFunc(notifications);
  const modifiedNotifications = notifications.map((n) => {
    const sender = allUsers.find((user) => user?._id === n.senderId);
    return {
      ...n,
      senderName: sender?.username,
    };
  });

  const handleClick = () => setOpen((prev) => !prev);
  const handleClickAway = () => setOpen(false);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className="relative inline-block">
        <Badge
          badgeContent={unreadNotifications?.length > 0 ? unreadNotifications.length : null}
          color="primary"
          onClick={handleClick}
          className="cursor-pointer"
        >
          <MailIcon className="text-gray-600 hover:text-blue-500 transition" />
        </Badge>
        {open && (
          <div className="absolute right-0 mt-2 w-64 bg-slate-700 text-white shadow-lg rounded-lg border border-gray-200 z-50 overflow-hidden">
            <div className="px-4 py-2 bg-slate-800 border-b border-gray-300 flex justify-between">
              <span className="font-semibold">Notifications</span>
              <button
                className="text-blue-400 text-sm hover:underline"
                onClick={() => alert("Mark all as read")}
              >
                {modifiedNotifications.length > 0 ? "Mark all as read" : "No Notifications"}
              </button>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {modifiedNotifications.length === 0 ? (
                <div className="p-4 text-gray-300 text-sm">No new notifications</div>
              ) : (
                modifiedNotifications.map((n, index) => (
                  <div
                    key={index}
                    className={`p-3 border-b border-gray-600 flex flex-col text-sm ${n.isRead ? "bg-slate-700" : "bg-slate-600"}`}
                  >
                    <span className="font-medium">{n.senderName} sent you a message</span>
                    <span className="text-gray-300 text-xs mt-1">{moment(n.date).calendar()}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </ClickAwayListener>
  );
};

export default Notification;
