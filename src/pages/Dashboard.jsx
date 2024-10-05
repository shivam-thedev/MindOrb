import React, { useEffect,useState } from 'react';
import appwriteService from '../appwrite/config';
import { useSelector } from 'react-redux';
import userIcon from '../assets/userr.png';
import post from '../assets/blogpost.png';
import logoutIcon from '../assets/exit.png'
import {Button, Loader, LogoutBtn} from '../components'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [posts, setPosts] = useState([]); 
  const user = useSelector(state => state.auth.userData);
  const navigate=useNavigate();
  const userId=user.$id;
  appwriteService.getPostsByUser(userId).then((posts) => {
    if (posts) {
        setPosts(posts.documents);
    }
  })

  const deletePost = (post) => {
    appwriteService.deletePost(post.$id).then((status) => {
        if (status) {
            appwriteService.deleteFile(post.featuredImage);
            navigate("/");
        }
    });
};

const [loader,setLoader]=useState(true)
useEffect(()=>{
  setTimeout(()=>{
    setLoader(false)
  },2000)
},[])

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

  return !loader ? (
    <div className='flex items-center justify-center min-h-screen dark:bg-black'>
    <div className="flex flex-col py-20 gap-y-10 Dashboard max-md:items-center max-md:py-10">
      <h1 className='text-6xl font-semibold max-md:text-4xl'>Dashboard</h1>
      <div className='flex gap-10 max-md:justify-center max-md:flex-col max-md:items-center max-md:gap-5 max-md:w-[400px] max-md:px-5'>
        <div className='flex p-6 bg-gray-100 shadow rounded-xl gap-x-10 dark:bg-zinc-900'>
          <div>
            <p className='text-4xl font-semibold'>{user.name}</p>
            <p className='text-slate-500'>Author/Writer</p>
          </div>
          <div className=''>
            <img src={userIcon} className='w-[200px]'/>
          </div>
        </div>
        <div className='flex p-6 bg-gray-100 shadow rounded-xl gap-x-10 dark:bg-zinc-900'>
          <div>
            <p className='text-3xl font-semibold text-gray-500'>Total Posts</p>
            <p className='mt-3 text-5xl font-semibold text-gray-700'>{posts.length}</p>
          </div>
          <div>
            <img src={post} className='w-[200px]'/>
          </div>
        </div>
       
          <LogoutBtn>
          <div className='flex items-center justify-center p-6 px-10 bg-gray-100 shadow rounded-xl gap-x-10 dark:bg-zinc-900'>
            <h2 className='text-3xl text-gray-500'>Logout</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24">
	<path fill="none" stroke="#ff0000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.023 5.5a9 9 0 1 0 9.953 0M12 2v8" color="#009dff" />
</svg>
          </div>
          </LogoutBtn>
        
      </div>
      <div className='flex flex-col w-full gap-8 p-6 bg-gray-100 rounded-xl dark:bg-zinc-900 max-md:w-[370px]'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-md'>Recent Blogs</h2>
          <Button onClick={()=>navigate('/add-post')} >Add post</Button>
        </div>
        <div className='flex flex-col gap-5 '>
        {posts.length ? posts.map((post) => (
                    <div key={post.$id} className='flex items-center justify-between w-full p-4 bg-gray-200 shadow rounded-xl dark:bg-zinc-800 max-md:flex-col max-md:gap-5'>
                      <div className='flex items-center max-md:flex-col max-md:justify-center'>
                        <img src={appwriteService.getFilePreview(post.featuredImage)} className='w-32 mr-4 rounded-md max-md:w-full max-md:mr-0 max-md:mb-3'/>
                        <div className=''>
                            <h3 className='mb-2 text-xl'>{post.title}</h3>
                          <div className='flex text-gray-500 gap-14 dark:text-zinc-600'>
                            <p className='dark:text-zinc-400'>Created at: {formatDate(post.$createdAt)}</p>
                            <p className='dark:text-zinc-400'>Last updated: {formatDate(post.$updatedAt)}</p>
                          </div>
                        </div>
                      </div>
                      <div className='flex gap-3 '>
                        <Button onClick={()=>navigate(`/post/${post.$id}`)}>View</Button>
                        <Button onClick={()=>navigate(`/edit-post/${post.$id}`)}>Edit</Button>
                        <Button className="bg-red-600 dark:bg-red-600" onClick={()=>deletePost(post)}>Delete</Button>
                      </div>
                    </div>
                )):<h2>No Posts</h2>}
                
            </div>
      </div>
    </div>
    </div>
  ):<Loader/>
};

export default Dashboard;


