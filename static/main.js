"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_client_1 = require("socket.io-client");
var Emits;
(function (Emits) {
    Emits["ENTER"] = "ENTER";
    Emits["SEND"] = "SEND";
    Emits["USER_ENTERED"] = "USER_ENETERED";
    Emits["USER_SENT_MESSAGE"] = "USER_SENT_MESSAGE";
})(Emits || (Emits = {}));
const socket = socket_io_client_1.io();
function sendUserNameToServer(username) {
    const messageObj = {
        username
    };
    socket.emit(Emits.ENTER, messageObj);
}
function sendMessageToServer(username, chatMessage) {
    const messageObj = {
        username,
        chatMessage
    };
    socket.emit(Emits.SEND, messageObj);
}
function enterMessage() {
    // get value from document.
    // validate
    // call sendMessageToServer
}
function enterUsername() {
    // get value from document.
    // validate
    // call sendUserNameToServer
}
socket.on(Emits.USER_SENT_MESSAGE, (message) => {
    //message = {
    //  username,
    //  message
    //}
    //append to ui
});
socket.on(Emits.USER_ENTERED, (message) => {
    //message = {
    //  username
    //}
    //append to ui
});
