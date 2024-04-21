import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const list=["All","Music","Thrillers","Dramedy","Live","T-Series","Mixes","Virat Kohli","Cricket","Gaming","Aamir khan","Sports  "]
  return (
    <div className='flex'>
        {list.map((item,index)=>(<Button name={item} key={index} />))}
    </div>
  )
}

export default ButtonList
