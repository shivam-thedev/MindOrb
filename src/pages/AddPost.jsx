import React, { useEffect, useState } from 'react'
import { Loader, PostForm} from '../components'

function AddPost() {
  const [loader,setLoader]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setLoader(false)
    },3000)
  },[])

  return !loader ? (
    <div className='min-h-[869px] dark:bg-black flex justify-center items-center flex-col max-md:py-10'>
      <h2 className='mb-5 text-6xl font-semibold max-md:text-4xl'>Create a Post</h2>
      <PostForm />
    </div>
  ):<Loader/>
}

export default AddPost