import React from 'react'

const commentsData = [
    {
        name: "Kamaldeep singh",
        text:"Lorem ipsum dollar sit amet , we are",
        replies:[
            {
                name: "Kamaldeep singh",
                text:"Lorem ipsum dollar sit amet , we are",
                replies:[
                    {
                        name: "Kamaldeep singh",
                        text:"Lorem ipsum dollar sit amet , we are",
                        replies:[
                            {
                                name: "Kamaldeep singh",
                                text:"Lorem ipsum dollar sit amet , we are",
                                replies:[
                                    {
                                        name: "Kamaldeep singh",
                                        text:"Lorem ipsum dollar sit amet , we are",
                                        replies:[
                                            {
                                                name: "Kamaldeep singh",
                                                text:"Lorem ipsum dollar sit amet , we are",
                                                replies:[]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: "Kamaldeep singh",
                text:"Lorem ipsum dollar sit amet , we are",
                replies:[]
            },
        ]
    },
    {
        name: "Kamaldeep singh",
        text:"Lorem ipsum dollar sit amet , we are",
        replies:[
            {
                name: "Kamaldeep singh",
                text:"Lorem ipsum dollar sit amet , we are",
                replies:[
                    {
                        name: "Kamaldeep singh",
                        text:"Lorem ipsum dollar sit amet , we are",
                        replies:[
                            {
                                name: "Kamaldeep singh",
                                text:"Lorem ipsum dollar sit amet , we are",
                                replies:[]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: "Kamaldeep singh",
        text:"Lorem ipsum dollar sit amet , we are",
        replies:[]
    },
    {
        name: "Kamaldeep singh",
        text:"Lorem ipsum dollar sit amet , we are",
        replies:[]
    },
    {
        name: "Kamaldeep singh",
        text:"Lorem ipsum dollar sit amet , we are",
        replies:[]
    },

];

const UnitComments = ({data})=>{
    const {name , text , replies} = data;
    return <div className='bg-gray-100 p-3 rounded-lg mt-2 flex' > 
        <img alt='user' className='w-8 h-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s" />
        <div className='ml-4'> 
            <h1 className='text-sm font-semibold'>{name}</h1>
            <h1 >{text}</h1>
        </div>
        </div>;
};

const CommentList = ({comments})=>{
  return  comments.map((comment)=> <div>
    <UnitComments data={comment}/>
    <div className='pl-5 border border-l-black '>
        <CommentList comments={comment.replies}/>
    </div>
    </div>
    )
}


function Comments() {
  return (
    <div>
     <h1 className='text-2xl font-bold mt-5'> Comments:    </h1>
     <CommentList comments={commentsData}/>
    </div>
  )
}

export default Comments
