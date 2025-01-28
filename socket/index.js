const { Server } = require("socket.io");

const io = new Server({ cors: "http://localhost:5173/" });

let onlineUsers = []


// Connect to Client
io.on("connection", (socket) => {

  console.log("New Connection: ", socket.id)


  // Listen an event comming from the Client
  socket.on("addNewUser", (userId) => {
    !onlineUsers.some((user) => user.userId === userId) && onlineUsers.push({
        userId,
        socketId: socket.id,
    })
    console.log("OnlineUsers: ", onlineUsers)


    // Trigger an event recevined by the client
    io.emit("getOnlineUsers", onlineUsers);

  });

  // Add Message
  socket.on("sendMessage", (message) => {

    // Get the message from the recipient
    const user = onlineUsers.find(user => user.userId === message.recipientId)

    if(user) {

      // Send the message received from recipient to the current user
      io.to(user.socketId).emit("getMessage", message);
    }
  })


  // Disconnect the client
  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id)

    // Send the updated online users to client
    io.emit("getOnlineUsers", onlineUsers);

  })

});

io.listen(5000);