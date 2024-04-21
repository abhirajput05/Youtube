import { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { addMessage } from '../utils/chatSlice';
import {useDispatch ,useSelector} from "react-redux"
import { createRandomString, generateRandomName } from '../utils/helper';



const LiveChat = () => {
    const dispatch=useDispatch();
    const chatMessage=useSelector((store)=>store.chat.messages);
    const [livemessage,setlivemessage]=useState("");
    useEffect(()=>{
         const i=setInterval(()=>{
             dispatch(
                addMessage({
                    name:generateRandomName(),
                    message:createRandomString(10)
                })
             )
         },2000);
         return ()=>clearInterval(i);
    },[])
  return (
    <>
    <div className='w-[340px] h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
       <div>
       {chatMessage.map(c=><ChatMessage name={c.name} message={c.message} />)}
       </div>
    </div>
    <form className=' p-1 ml-2 border border-black flex' onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"Happy singh",
                message:livemessage 
            }))
            setlivemessage("");
        }}> 
        <input className='w-64' type="text" value={livemessage} onChange={(e)=>setlivemessage(e.target.value)} />
      <button className='ml-3'>Send</button>
    </form>
    </>
  )
}

export default LiveChat
