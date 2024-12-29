import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from './utils/appSlice';
import { YT_SEARCH_SUGGEST } from './utils/constants';
import { chacheResults } from './utils/searchSlice';

function Header() {
  const dispatch = useDispatch();
  const [searchBar , setSearchBar] = useState("");
  const [suggest , setSuggest] = useState([]);
  const [showSuggestion , setshowSuggestion] = useState(false);

  const searchChache = useSelector((store)=>store.search);

  useEffect(()=>{
   const timer = setTimeout(()=>
    {
      if(searchChache[searchBar]){
        setSuggest(searchChache[searchBar]);
      }else{
      callSearchApi()
      }
    },200);

   return ()=>{
    clearTimeout(timer);
   }
  },[searchBar]);
   
  async function callSearchApi(){
      const call = await fetch(YT_SEARCH_SUGGEST+searchBar);
      const json = await call.json();
      
      setSuggest(json[1]);
      dispatch(chacheResults({
        [searchBar] : json[1],
  }));
  }

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }
  return (
    <div className=" fixed top-0 left-0 w-full bg-white grid grid-flow-col py-3 px-5 shadow-lg z-50">
        <div className='flex col-span-1 '>
          
        < img onClick={()=>toggleMenuHandler()}  className='h-4 my-1 cursor-pointer ' alt="bars" src="https://static-00.iconduck.com/assets.00/line-horizontal-3-icon-2048x1472-w7kzp4f5.png"/>
         <a href='/'><img className='h-6 mx-4' alt="Logo" src='https://upload.wikimedia.org/wikipedia/commons/2/20/YouTube_2024.svg'/></a>
        
        </div>

        <div className=' col-span-10 px-1'>
        <div>

            <input placeholder='Search' value={searchBar} onChange={(e)=>setSearchBar(e.target.value)} className='border border-slate-500 rounded-l-full w-1/2 px-5 p-2' onFocus={()=>setshowSuggestion(true)} onBlur={()=>setshowSuggestion(false)}></input>
            <button className='border border-slate-500 rounded-r-full bg-slate-100 px-5 py-2'  > 🔍 </button>
        
        </div>

       { showSuggestion && (<div className='fixed bg-white w-[34.5rem]  py-2 shadow-sm rounded-xl '>
          <ul className="w-full" >
            { suggest.map((eachOne)=><li className='hover:bg-gray-200 py-1 pl-5' >{eachOne}</li>)}
          </ul>
        </div>)}

    </div>

      <div className="text-xl col-span-1" >

        <img alt='user' className='h-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s'/>
      
      </div>
    </div>
  )
}

export default Header;
