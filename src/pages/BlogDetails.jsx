import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogDetailsCard from '../components/BlogDetailsCard';
import LoadingSpinner from '../components/LoadingSpinner';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosCecure';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/shared/SectionTitle';

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

    if (!blog?._id) return <LoadingSpinner />

    // add wishlist in DB
    const handleWishlist = async (id, title, imageUrl, category, shortDescription, longDescription) => {
        if (!user?.email) {
            return navigate('/signIn')
        }

        const wishlistData = {
            id,
            title,
            imageUrl,
            category,
            shortDescription,
            longDescription,
            email: user?.email,
        }

        // instance not work !!!
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/add-wishlist`, wishlistData)
            toast.success('wishlist added successfully.!')
            navigate('/wishlist')
        } catch (err) {
            toast.error(err.response.data);
        }
    }

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
        <div className="p-8 py-32 bg-bg dark:bg-neutral-900">
            <Helmet>
                <title>Next Generation | Blog Details</title>
            </Helmet>
            <SectionTitle heading="Blog Details" subHeading="Read and engage with our latest blog posts." />
            <div className="container mx-auto mt-10">
                {
                    <BlogDetailsCard blog={blog} handleWishlist={handleWishlist} handleCommentSubmit={handleCommentSubmit} comments={comments}></BlogDetailsCard>
                }
            </div>
        </div>
    );
};

export default BlogDetails;