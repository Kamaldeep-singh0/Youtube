import React from 'react'
import SideNav from './body/sideNav'
import MainContainer from './body/MainContainer'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='flex'>
      <SideNav/>
      <Outlet/> 
    </div>
  )   
}

export default Body
