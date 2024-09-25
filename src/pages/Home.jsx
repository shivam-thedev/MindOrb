import React from 'react'
import Light from '../assets/blogwrite.jpg'
import Dark from '../assets/blogwrite.png'
import { Button } from '../components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Home() {
    const navigate=useNavigate();
    const themeMode = useSelector((state) => state.theme.themeMode);
  return (
    <div className="content flex justify-center  px-[50px]  gap-[130px] items-center h-[869px] dark:bg-slate-900">
    <div className="headline flex flex-col justify-center gap-[30px]">
        <h2 className="text-[7rem] font-[500] leading-[1.3] ">Inspiring <br/> Ideas & Stories</h2>
        <h3 className="text-[1.5rem] font-[400] ml-1 mb-4">Your space to explore, share, and connect through words</h3>
        <div className="button">
            <Button onClick={()=>navigate('/signup')}  >Start reading</Button>
        </div>
    </div>
    <div className="flex flex-col justify-end image">
        <img 
         src={themeMode === "light" ? Light : Dark} 
        className="w-[600px] "/>
    </div>
</div>
  )
}

export default Home