import React, { useEffect } from 'react'
import {useDispatch} from "react-redux"
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams]=useSearchParams();
    const dispatch=useDispatch();
    
    useEffect(()=>{
       dispatch(closeMenu());
    },[])
  return (
    <div className='px-5 pt-2 flex flex-col w-full'>
        <div className='flex w-full '>
            <div>
      <iframe className='rounded-lg' width="1100" height="600" src={"https://www.youtube.com/embed/"+searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div>
         <LiveChat className="w-full " />
         </div>
      </div>
      <CommentContainer />
    </div>
  )
}

export default WatchPage
