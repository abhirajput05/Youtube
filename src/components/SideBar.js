import React from 'react'
import {useSelector} from "react-redux";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import PortraitSharpIcon from '@mui/icons-material/PortraitSharp';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
const SideBar = () => {
    const isMenuOpen=useSelector((state)=>state.app.isMenuOpen);
    
  return !isMenuOpen?null:(
    <div className=' p-5 shadow-lg w-[1800px]'>
     <Link to="/"> <h1 className='py-1 flex '><HomeIcon className='mr-2'/> Home</h1></Link>
      <h1 className='py-1  flex '><img alt="icon" className="h-8 ml-[-9px]" src="data:image/png;base64,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" />Shorts</h1>
      <h1 className='pb-3'><SubscriptionsIcon className='mr-2' /> Subscriptions</h1>
      <hr className='border-t-2 border-gray-200 pt-2' />
      <h1 className='font-bold'> You ﹥  </h1>
      <ul className='py-2'>
        <li className='py-1'><PortraitSharpIcon className='mr-2'  />Your channel</li>
        <li className='py-1'><HistoryIcon className='mr-2'/>History</li>
        <li className='py-1'><PlaylistPlayIcon className='mr-2'/>Playlist</li>
        <li className='py-1'><SlideshowIcon className='mr-2'/>Your videos</li>
        <li className='py-1'><WatchLaterOutlinedIcon className='mr-2'/>Watch later</li>
        <li className='py-1'><ThumbUpAltOutlinedIcon className='mr-2'/>Liked videos</li>
        </ul>
        <hr className='border-t-2 border-gray-200 pt-2' /> 
        <h1 className='font-bold'> Explore  </h1>
      <ul className='py-2'>
        <li className='py-1'><WhatshotSharpIcon className='mr-2'/>Trending</li>
        <li className='py-1'><LocalMallOutlinedIcon className='mr-2'/>Shooping</li>
        <li className='py-1'><MusicNoteOutlinedIcon className='mr-2'/>Music</li>
        <li className='py-1'><VideocamOutlinedIcon className='mr-2' />Movies</li>
        <li className='py-1'><SensorsOutlinedIcon className='mr-2'/>Live</li>
        <li className='py-1'><SportsEsportsOutlinedIcon className='mr-2'/>Gaming</li>
        <li className='py-1'><NewspaperOutlinedIcon className='mr-2'/>News</li>
        <li className='py-1'><EmojiEventsOutlinedIcon className='mr-2'/>Sports</li>
        <li className='py-1'><LightbulbOutlinedIcon className='mr-2'/>Courses</li>
        <li className='py-1'><DiamondOutlinedIcon className='mr-2'/>Fashion and Beauty</li>
        <li className='py-1'><PodcastsOutlinedIcon className='mr-2' />Podcast</li>
        </ul> 
    </div>
  )
}

export default SideBar
