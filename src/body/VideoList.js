import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YT_VD_API } from '../utils/constants';
import { Link } from 'react-router-dom';

function VideoList() {

  const [videos , setVideos ] = useState([]);

  useEffect(()=>{
 getVideos();
  },[]);

  const getVideos = async()=>{
    const data= await fetch(YT_VD_API);
    const finalData= await data.json();
   setVideos(finalData.items);
    
  }
  return (
    <div className='flex flex-wrap '>
      {videos.map((video)=> <Link key={video.id} to={"watch?v="+video.id}><VideoCard  info = {video} /></Link>)}
      
    </div>
  )
}

export default VideoList
