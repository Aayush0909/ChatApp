import React from 'react'
import useConversation from '../../statemanage/useConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx';
function Chatuser() {

    const { selectedConversation } = useConversation();
    // console.log(selectedConversation);
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };

    return (
        <>
        <div className='pl-5 pt-4 pb-2 h-[11vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-200'>
        <div>
            <div className="avatar online">
                    <div className="w-12 rounded-full">
                        <img src="https://i.pinimg.com/736x/fc/90/a7/fc90a70c6abd68dd5d0954bcf7cff7df.jpg" />
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-xl'>{selectedConversation.name}</h1>
                <span className='text-sm'>
                {getOnlineUsersStatus(selectedConversation._id)}
                </span>
            </div>
        </div>
        </>
    )
}

export default Chatuser
