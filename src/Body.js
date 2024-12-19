import React from 'react'
import SideNav from './body/sideNav'
import MainContainer from './body/MainContainer'

function Body() {
  return (
    <div className='flex'>
      <SideNav/>
      <MainContainer/>  
    </div>
  )   
}

export default Body
