const socketController = (socket) => {
  console.log("Client connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });


  socket.on("send-message", (payload, callback) => {
    console.log("The message was :", payload);

    // callback('mondongo');
    socket.broadcast.emit('send-message',payload)
  });
};

module.exports = {
  socketController,
};
