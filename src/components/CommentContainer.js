import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
const commentsData=[
    {
        name:"Happy Singh",
        text:"Google One Day",
        replies:[]
    },
    {
        name:"Happy Singh",
        text:"Google One Day",
        replies:[
            {
                name:"Happy Singh",
                text:"Google One Day",
                replies:[]
            },
            {
                name:"Happy Singh",
                text:"Google One Day",
                replies:[
                    {
                        name:"Happy Singh",
                        text:"Google One Day",
                        replies:[]
                    },
                ]
            },
        ]
    },
    {
        name:"Happy Singh",
        text:"Google One Day",
        replies:[   {
            name:"Happy Singh",
            text:"Google One Day",
            replies:[]
        },
        {
            name:"Happy Singh",
            text:"Google One Day",
            replies:[]
        },
        {
            name:"Happy Singh",
            text:"Google One Day",
            replies:[]
        },
        {
            name:"Happy Singh",
            text:"Google One Day",
            replies:[]
        },
        {
            name:"Happy Singh",
            text:"Google One Day",
            replies:[]
        },
        {
            name:"Happy Singh",
            text:"Google One Day",
            replies:[
                {
                    name:"Happy Singh",
                    text:"Google One Day",
                    replies:[]
                },
                {
                    name:"Happy Singh",
                    text:"Google One Day",
                    replies:[]
                },
                {
                    name:"Happy Singh",
                    text:"Google One Day",
                    replies:[]
                }, 
            ]
        },
    ]
    },
    {
        name:"Happy Singh",
        text:"Google One Day",
        replies:[]
    },
    {
        name:"Happy Singh",
        text:"Google One Day",
        replies:[]
    },
    

]
const Comment=({data})=>{
    const {name,text}=data;
    return (
        <div className='flex shadow-sm bg-gray-100 p-2 mt-2 rounded-lg'>
          <Person2Icon />
          <div className='px-3'>
         <p className='font-bold'>{name}</p>
         <p>{text}</p>
          </div>
        </div>
    );
};

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        {comment.replies && (
          <div className="pl-5 border border-l-black ml-5">
            <CommentList comments={comment.replies} />
          </div>
        )}
      </div>
    ));
  };
  
const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
    <h1 className='text-2xl font-bold'>Comments: </h1>
    <CommentList comments={commentsData}/>
    
    </div>
  )
}

export default CommentContainer
