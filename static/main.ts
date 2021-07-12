import { io } from "socket.io-client"

enum Emits {
  ENTER = "ENTER",
  SEND = "SEND",
  USER_ENTERED = "USER_ENETERED",
  USER_SENT_MESSAGE = "USER_SENT_MESSAGE"
}

interface EnterRoom {
  username: string,
}

interface SendMessage {
  username: string,
  chatMessage: string
}

const socket = io();

function sendUserNameToServer(username: string): void {
    const messageObj: EnterRoom = {
      username
    }
    socket.emit(Emits.ENTER, messageObj)
}

function sendMessageToServer(username: string, chatMessage: string): void {
  const messageObj: SendMessage = {
    username,
    chatMessage
  }
  socket.emit(Emits.SEND, messageObj)
}

function enterMessage(){
  // get value from document.
  // validate
  // call sendMessageToServer
}

function enterUsername(){
  // get value from document.
  // validate
  // call sendUserNameToServer
}

socket.on(Emits.USER_SENT_MESSAGE, (message: SendMessage) => {
    //message = {
    //  username,
    //  message
    //}
    //append to ui
})

socket.on(Emits.USER_ENTERED, (message: EnterRoom) => {
  //message = {
  //  username
  //}
  //append to ui
})