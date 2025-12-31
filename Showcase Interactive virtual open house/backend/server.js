const express = require("express");
const http = require("http");
// const mongoose = require("mongoose");

const app = express();
const server = http.createServer(app);

// middleware
app.use(express.json());

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/showcase")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo error:", err));

// socket
require("../socket")(server);

// route
app.get("/", (req, res) => {
  res.send("Backend Running");
});

// start
server.listen(5000, () => {
  console.log("Server running on port 5000");
});
