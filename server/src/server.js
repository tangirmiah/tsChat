"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
var Emits;
(function (Emits) {
    Emits["ENTER"] = "ENTER";
    Emits["SEND"] = "SEND";
    Emits["USER_ENTERED"] = "USER_ENETERED";
    Emits["USER_SENT_MESSAGE"] = "USER_SENT_MESSAGE";
})(Emits || (Emits = {}));
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, "../static")));
// set the view engine to ejs
app.set("views", path_1.default.join(__dirname, "../view"));
app.set("view engine", "ejs");
const port = 3000;
app.get("/", (req, res) => {
    res.render("index");
});
let http = require("http").Server(app);
let io = require("socket.io")(http);
io.on("connection", (socket) => {
    console.log("User connected");
    socket.on(Emits.ENTER, (message) => {
        console.log("User entered");
        const messageObj = {
            username: message.username,
        };
        socket.broadcast.emit(Emits.USER_ENTERED, messageObj);
    });
    socket.on(Emits.SEND, (message) => {
        console.log("Message sent");
        const messageObj = {
            username: message.username,
            chatMessage: message.chatMessage,
        };
        socket.broadcast.emit(Emits.USER_SENT_MESSAGE, messageObj);
    });
});
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
