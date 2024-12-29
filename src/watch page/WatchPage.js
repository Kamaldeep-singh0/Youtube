import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import Comments from './Comments';

function WatchPage() {
  const [searchParam] = useSearchParams();
 const dispatch = useDispatch();
 

 useEffect(()=>{
      dispatch(closeMenu());
        },[dispatch])

  return (

    <div className='p-8 pt-20 pl-40'>
      <iframe
       width="800"
        height="450"
         src={"https://www.youtube.com/embed/"+searchParam.get("v")}
         title="YouTube video player" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
           allowFullScreen>
           </iframe>
           <Comments  />
    </div>
  )
}

export default WatchPage
