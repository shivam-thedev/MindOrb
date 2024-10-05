
import React, { useEffect, useState } from 'react';
import { Container, Loader, PostForm } from '../components';
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post);
                }
                setLoading(false); // Stop loading once data is fetched
            }).catch(() => {
                setLoading(false); // Stop loading even if there's an error
                navigate('/');
            });
        } else {
            setLoading(false);
            navigate('/');
        }
    }, [slug, navigate]);

    return (
        <div className="dark:bg-black min-h-[869px] flex justify-center items-center max-md:py-10">
            {loading ? (
               <Loader/>
            ) : post ? (
                <Container>
                    <h2 className='mb-5 text-6xl font-semibold text-center max-md:text-3xl'>Edit the Post</h2>
                    <PostForm post={post} />
                </Container>
            ) : (
                <div className="text-2xl text-white">Post not found</div> // In case no post is found
            )}
        </div>
    );
}

export default EditPost;
