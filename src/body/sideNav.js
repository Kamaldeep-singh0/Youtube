import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const SideNav = ()=> {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(!isMenuOpen){
    return null;
  }
  return (
    <div className='w-56 mt-16 shadow-lg'>
      <div className='font-semibold p-2 text-center rounded-xl hover:bg-slate-200'>Home</div>
      <div className='font-semibold p-2 text-center rounded-xl hover:bg-slate-200'>Shorts</div>
      <div className='font-semibold p-2 text-center rounded-xl  hover:bg-slate-200'>Subscriptions</div>
     <div className='border border-b-slate-200 mx-2'></div>
      <div className='font-semibold p-2 text-center rounded-xl hover:bg-slate-200'>Trending</div>
      <div className='font-semibold p-2 text-center rounded-xl hover:bg-slate-200'>History</div>
      <div className='font-semibold p-2 text-center rounded-xl hover:bg-slate-200'>Liked videos</div>
      <div className='font-semibold p-2 text-center rounded-xl hover:bg-slate-200'>Watch later</div>
      <div className='font-semibold p-2 text-center rounded-xl hover:bg-slate-200'>Playlists</div>
      <div className='border border-b-slate-200 mx-2'></div>
      <div className='font-semibold p-2 text-center rounded-xl hover:bg-slate-200'>Download</div>

      <div className='font-semibold p-2 text-center rounded-xl hover:bg-slate-200'>Home</div>
    </div>
  )
}

export default SideNav
