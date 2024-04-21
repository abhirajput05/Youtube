import React, { useEffect } from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { openMenu } from '../utils/appSlice'
const Body = () => {
  
  return (
    <div className='flex'>
      <SideBar />
      <Outlet />
    </div>
  )
}

export default Body;
