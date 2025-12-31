const socketio = require("socket.io");

module.exports = function (server) {
  const io = socketio(server, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {
    console.log("Socket Connected:", socket.id);
  });
};
