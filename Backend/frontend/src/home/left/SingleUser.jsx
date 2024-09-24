import React from 'react';
import  useConversation  from "../../statemanage/useConversation.js";
import { useSocketContext } from '../../context/SocketContext.jsx';

function SingleUser({ user }) {

  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);


  return (
    <div className={`hover:bg-slate-600 duration-300 ${
      isSelected ? "bg-slate-700" : ""}` }
    onClick={() => setSelectedConversation(user)} >

      <div className='flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-200 cursor-pointer'>
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-14 rounded-full">
                        <img src="https://i.pinimg.com/736x/fc/90/a7/fc90a70c6abd68dd5d0954bcf7cff7df.jpg" />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>{user.name}</h1>
                    <span>{user.email}</span>
                </div>
            </div>
    </div>
  )
}

export default SingleUser
