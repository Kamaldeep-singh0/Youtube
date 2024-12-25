import React from 'react'

function VideoCard( { info}) {

  return (
    <div className='w-72 h-64 shadow-xl my-5 mx-4'>
      <img alt='thumb' src={info?.snippet?.thumbnails?.maxres?.url} />
      <div className='text-left text-sm px-2'>{info?.snippet?.title}</div>
      <div className='px-2'>{info?.statistics?.viewCount} views</div>
    </div>
  )
}

export default VideoCard
