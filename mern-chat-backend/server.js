const express = require("express");
require("./connection");
const userRoutes = require("./routes/userRoutes");
const app = express();
const rooms = ["general", "tech", "finance", "crypto"];
const cors = require("cors");
app.use(express.urlencoded({ extended: true }));

app.use(express.json);
app.use(cors());
app.use("/users", userRoutes);
const server = require("http").createServer(app);
app.get("/", (req, res) => {
  res.status(200).json({ messgae: "I am here" });
});
const PORT = 5001;
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});

server.listen(PORT, () => {
  console.log("listenning to port", PORT);
});
