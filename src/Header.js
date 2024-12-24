import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from './utils/appSlice';

function Header() {
  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className=" grid grid-flow-col py-3 px-5 shadow-lg">
        <div className='flex col-span-1 '>
        < img onClick={()=>toggleMenuHandler()}  className='h-4 my-1 cursor-pointer ' alt="bars" src="https://static-00.iconduck.com/assets.00/line-horizontal-3-icon-2048x1472-w7kzp4f5.png"/>
        <a href='/'><img className='h-6 mx-4' alt="Logo" src='https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg'/></a>
        </div>
        <div className=' grid grid-flow-col col-span-12 text-center'>
            <input placeholder='Search' className='border border-slate-500 rounded-l-full ml-40 h-8'></input>
            <img className='border border-slate-500 rounded-r-full bg-slate-100 w-14 h-8 p-3' alt="logoSearch" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRB1SB_wed4uZTZTRq8OlvIHpOfItiw8mGjg&s'/>
        </div>
     
      <div className="text-xl col-span-1" >
        <img alt='user' className='h-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s'/>
      </div>
    </div>
  )
}

export default Header;
