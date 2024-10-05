import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import home from '../assets/home.png';
import appwriteService from '../appwrite/config';
import { PostCard } from '../components';
import Loader from '../components/Loader/Loader';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const status = useSelector((state) => state.auth.status);

  useEffect(() => {
    console.log('User status:', status); 
    if (status !== false) {
      console.log('Fetching posts...');
      appwriteService.getPosts()
        .then((posts) => {
          console.log('Fetched posts:', posts);
          if (posts && posts.documents) {
            setPosts(posts.documents);
          } else {
            console.log('No posts available');
          }
        })
        .catch((error) => {
          console.error('Error fetching posts:', error);
          setError('Failed to load posts');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [status]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl text-red-500">{error}</p>
    </div>;
  }

  if (status === false) {
    return (
      <div className="flex min-h-[869px] dark:bg-black max-md:min-h-[760px]">
        <div className="flex flex-col items-center justify-center w-1/2 gap-10 max-md:hidden">
          <div>
            <h2 className="text-[5.5rem] font-[500] leading-[1.1] m-0">Inspiring <br /> Ideas and Stories</h2>
            <h3 className="text-[1.3rem] font-[300] ml-1 mt-1 text-gray-400 dark:text-zinc-400">
              Your space to explore, share, and connect through words
            </h3>
          </div>
          <img src={home} className='w-[500px] mx-auto' alt="Home illustration" />
        </div>
        <div className="flex items-center justify-center w-1/2 bg-gray-100 dark:bg-zinc-950 max-md:w-full max-md:px-5 max-md:py-10">
          <Outlet />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-100 dark:bg-zinc-900">
      <div className="w-full h-[350px] dark:bg-black py-60 flex flex-col justify-center items-center bg-white max-md:py-5 max-md:h-[200px]">
        <h2 className="mb-4 text-[9rem] max-md:text-[3.2rem] max-md:font-semibold">Latest Blogs</h2>
        <h2 className="mb-4 text-3xl text-center text-gray-300 dark:text-gray-600 max-md:text-xl max-md:hidden">
          Stay updated with the latest trends, tips, and stories from the world of blogging
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-5 px-10 py-20">
        {posts.length > 0 ? posts.map((post) => (
          <div key={post.$id}>
            <PostCard {...post} />
          </div>
        )) : <p className="text-xl text-gray-500">No posts available.</p>}
      </div>
    </div>
  );
}

export default Home;


