import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container, Loader } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            }).finally(() => {
                setLoading(false); // Set loading to false after data is fetched
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return loading ? (
        <Loader/>
    ) :post ? (
        <div className="relative flex justify-center py-14 dark:bg-black min-h-[869px] max-md:py-10">
                {isAuthor && (
                        <div className="absolute right-6 top-6 max-md:hidden">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </Button>
                        </div>
                )}
            <div className="flex flex-col items-center justify-center">
                <div className="w-full mb-6">
                    <h1 className="font-semibold text-7xl w-[1000px] max-md:text-4xl max-md:w-[350px]">{post.title}</h1>
                </div>
                <div className="flex justify-center p-2 mb-4  w-[1000px] max-md:w-[350px]">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-md"
                    />
                </div>
                <div className="browser-css w-[1000px] bg-gray-100 p-4 rounded-md dark:bg-zinc-900 max-md:w-[350px]">
                    {parse(post.content)}
                    </div>
            </div>
        </div>
    ) : null;
}