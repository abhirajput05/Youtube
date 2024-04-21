import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from "react-redux";
import { toggleMenu } from '../utils/appSlice';
import { SEARCH_API, options } from '../utils/constants';
import SearchIcon from '@mui/icons-material/Search';
import { cacheResults } from '../utils/searchSlice';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Head = () => {
    const [searchquery, setSearchQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showsuggestion,setshowsuggestion]=useState(false);
    const dispatch = useDispatch();
    const searchCache=useSelector((store)=>store.search);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[searchquery]){
                setSuggestion(searchCache[searchquery]);
            }
            else{
                searchVideo();
            }
         }, 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchquery]);

    const handleClick = () => {
        dispatch(toggleMenu());
    }

    const searchVideo = async () => {
        const response = await fetch(SEARCH_API + searchquery, options);
        const result = await response.json();
        setSuggestion(result);
        dispatch(cacheResults({
            [searchquery]:result 
        }))
    }

    return (
        <div className='grid grid-flow-col py-3 shadow-lg sticky top-0 bg-white z-50'>
            <div className='flex col-span-1 items-center'>
                <img alt="hamburger icon" className='h-8 cursor-pointer' onClick={handleClick} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" />
                <img alt="youtube logo" className='h-14 mx-4 cursor-pointer' src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg" />
            </div>
            <div className='col-span-10 pl-48 pt-2'>
                <input className="w-1/2 border border-gray-400 p-2 rounded-l-full " type="text" value={searchquery} onChange={(e) => setSearchQuery(e.target.value)} 
                onFocus={()=>setshowsuggestion(true)} 
                onBlur={()=>setshowsuggestion(false)}
                />
                <button className='border border-gray-400 px-5 py-2 text-base rounded-r-full bg-gray-100 cursor-pointer'>🔍</button>
            </div>
            <div className='col-span-1 pt-2 flex flex-wrap'>
                <NotificationsIcon fontSize="large"className='mr-3 mt-1 ' />
                <img alt="user icon" className='h-10 mr-[-100px] cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzdC8tyLdAaX5o6jygK9y6ruUdNcAyNqLjZTW1XuN6w&s" />
            </div>
           {showsuggestion && (<div className='absolute ml-[27rem] mt-16 bg-white  px-5 w-[29rem] shadow-lg rounded-2xl '>
                <ul>
                    {searchquery && suggestion.map(s => <li key={s} className='py-2 font-bold hover:bg-gray-100'><SearchIcon /><span className='mx-2'>{s}</span></li>)}
                </ul>
            </div>)
           }
        </div>
    );
}

export default Head;
