import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constants'
import Videocard from './Videocard';
import { Link } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { openMenu } from '../utils/appSlice';
const VideoContainer = () => {
    const dispatch=useDispatch();
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
        getVideos();
        dispatch(openMenu());
    },[])

 
    const getVideos=async ()=>{
        const data=await fetch(API_KEY);
        const json=await data?.json();
        setVideos(json?.items);
         
    }
  return (
    <div className='flex flex-wrap'> 
      {videos.map((item)=>(
      <Link key={item.id} to={"/watch?v="+item?.id}><Videocard  info={item} /></Link>)
      )}
    </div>
  )
}

export default VideoContainer
