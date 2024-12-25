import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogDetailsCard from '../components/BlogDetailsCard';
import LoadingSpinner from '../components/LoadingSpinner';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosCecure';
import { Helmet } from 'react-helmet';

const BlogDetails = () => {
    const [blog, setBlog] = useState({})
    const [comments, setComments] = useState([]);
    const { id } = useParams()
    const { user } = useAuth()
    const instance = useAxiosSecure()

    // console.log(comments);

    useEffect(() => {
        // get blog 
        const blogData = async () => {
            const { data } = await instance.get(`/blog/${id}`)
            setBlog(data)
        };


        // gets comments
        const getComments = async () => {
            const { data } = await instance.get(`/comments/${id}`);
            setComments(data);
        };


        blogData()
        getComments();
    }, [id])


    // comment submit DB 
    const handleCommentSubmit = async (commentText, id, author, author_photoUrl, setCommentText) => {
        if (commentText.trim()) {

            const newComment = {
                blog_id: id,
                username: user?.displayName,
                profilePicture: user?.photoURL,
                commentText,
                createdAt: new Date().toISOString(),
                author,
                author_photoUrl
            };
            try {
                const { data } = await instance.post('/add-comment', newComment);
                toast.success('Your comment submitted successfully.!')
                setComments([...comments, newComment]);
                setCommentText("");

            } catch (err) {
                toast.error(err.message)
            }
        }
    };



    // console.log(blog);
    return (
        <div className="p-8 py-32 bg-[#f5f6ff]">
            <Helmet>
                <title>Next Gen | Blog Details</title>
            </Helmet>
            <h2 className="text-4xl  font-bold mb-4 text-center">Blog Details</h2>
            <div className="w-10/12 mx-auto mt-10">
                {
                    <BlogDetailsCard blog={blog} handleCommentSubmit={handleCommentSubmit} comments={comments}></BlogDetailsCard>
                }
            </div>
        </div>
    );
};

export default BlogDetails;