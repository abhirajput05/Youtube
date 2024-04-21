import React from 'react'

function convertNumber(number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'K';
    } else {
        return number.toString();
    }
}
function getDuration(dateString) {
    const currentDate = new Date();
    const givenDate = new Date(dateString);
    
    const diffInMs = currentDate - givenDate;
    const diffInSec = Math.floor(diffInMs / 1000);
    const diffInMin = Math.floor(diffInSec / 60);
    const diffInHour = Math.floor(diffInMin / 60);
    const diffInDay = Math.floor(diffInHour / 24);
    const diffInMonth = Math.floor(diffInDay / 30);
    const diffInYear = Math.floor(diffInMonth / 12);

    if (diffInYear > 0) {
        return `${diffInYear} year${diffInYear > 1 ? 's' : ''} ago`;
    } else if (diffInMonth > 0) {
        return `${diffInMonth} month${diffInMonth > 1 ? 's' : ''} ago`;
    } else if (diffInDay > 0) {
        return `${diffInDay} day${diffInDay > 1 ? 's' : ''} ago`;
    } else if (diffInHour > 0) {
        return `${diffInHour} hour${diffInHour > 1 ? 's' : ''} ago`;
    } else if (diffInMin > 0) {
        return `${diffInMin} minute${diffInMin > 1 ? 's' : ''} ago`;
    } else {
        return `${diffInSec} second${diffInSec > 1 ? 's' : ''} ago`;
    }
}


const Videocard = ({info}) => {
    console.log(info);
  return (
    <div className='p-2 m-2 w-72 h-80  '>
    <img  className='rounded-lg'  alt="videoimage"src={info?.snippet?.thumbnails?.medium?.url} />
    <ul>
        <li className='font-bold py-2 '>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <div className='flex flex-row'>
        <li className='mr-2'>{convertNumber(info?.statistics?.viewCount)} views</li>
        <p className='mt-[-4px] font-bold mr-1'>.</p>
        <li> {getDuration(info?.snippet?.publishedAt)}</li>
        </div>
    </ul>
    </div>
  )
}

export default Videocard
