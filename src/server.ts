import express from 'express';
import path from 'path';
import { Socket } from 'socket.io';

enum Emits {
  ENTER = "ENTER",
  SEND = "SEND",
  USER_ENTERED = "USER_ENETERED",
  USER_SENT_MESSAGE = "USER_SENT_MESSAGE",
}

interface enterRoom {
  username: string;
}

interface sendMessage {
  username: string;
  chatMessage: string;
}
const app = express();
app.use(express.static(path.join(__dirname, "../static")));
// set the view engine to ejs
app.set("views", path.join(__dirname, "../view"));
app.set("view engine", "ejs");

const port = 3000;

app.get("/", (req, res) => {
  res.render("index");
});
let http = require("http").Server(app);
let io = require("socket.io")(http);

io.on("connection", (socket: Socket) => {
  console.log("User connected");

  socket.on(Emits.ENTER, (message: enterRoom) => {
    console.log("User entered");
    const messageObj: enterRoom = {
      username: message.username,
    };
    socket.broadcast.emit(Emits.USER_ENTERED, messageObj);
  });

  socket.on(Emits.SEND, (message: sendMessage) => {
    console.log("Message sent");
    const messageObj: sendMessage = {
      username: message.username,
      chatMessage: message.chatMessage,
    };
    socket.broadcast.emit(Emits.USER_SENT_MESSAGE, messageObj);
  });
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
