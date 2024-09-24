import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';
function Type() {

    const [message, setMessage] = useState("");
    const { loading, sendMessages } = useSendMessage();

    
  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };


    return (
        
          <form  onSubmit={handleSubmit} >
          <div className='flex space-x-1 h-[8vh] text-center bg-gray-800'>
                <div className='w-[70%] mx-4'>
                    <input type="text"
                    value={message} onChange= {(e)=>{
                        setMessage(e.target.value);
                    }}
                     placeholder="Type here" 
                    className="border-[1px] border-gray-700 flex items-center w-full grow outline-none py-3 px-3 rounded-xl bg-slate-900 mt-1" />
                </div>
                <button>
                    <IoSend  className='text-3xl' />
                </button>
            </div>
          </form>
    )
}

export default Type;
