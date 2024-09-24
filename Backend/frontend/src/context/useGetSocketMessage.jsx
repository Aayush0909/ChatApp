import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../statemanage/useConversation.js";
import sound from "../assets/noti.mp3"

// this hook listens for new messages from the server and updates the conversation state accordingly.
const useGetSocketMessage = () => {

  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      const notification = new Audio(sound);
      notification.play();
      setMessages([...messages, newMessage]);
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessages]);
};
export default useGetSocketMessage;