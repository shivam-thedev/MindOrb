import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import Button from './Button'


function PostCard({$id,$createdAt,title, featuredImage}) {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    }).format(date);
  };
  return (
    <Link to={`/post/${$id}`}>
        <div className='p-4  w-[350px] border-2 border-gray-300 bg-gray-200 dark:bg-zinc-800 dark:border-zinc-700 rounded-lg hover:border-gray-600'>
            <div className='justify-center w-full mb-5'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-lg' />
            </div>
            <div className='inline-block px-3 py-2 mb-3 font-medium bg-gray-300 rounded-lg dark:bg-zinc-600'>Published • {formatDate($createdAt)}</div>
            <h2 className='mb-6 ml-1 text-xl font-semibold'>{title}</h2>
            <Button className='rounded-md dark:bg-blue-700'>Read more</Button>
        </div>
    </Link>
  )
}

export default PostCard