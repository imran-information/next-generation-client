import React, { useCallback, useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../hooks/useAxiosCecure';
import { useQuery } from '@tanstack/react-query'
import 'react-loading-skeleton/dist/skeleton.css'
import SectionTitle from './shared/SectionTitle';
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';


const RecentBlogPosts = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const instance = useAxiosSecure()


    const { data: blogs, isPending } = useQuery({
        queryKey: ['blogs'], queryFn: async () => {
            const { data } = await instance.get('/blogs')
            return data
        }

    })

    if (isPending) return <LoadingSpinner />







    return (
        <>
            <div className="py-20 bg-bg dark:bg-neutral-900 px-8 lg:px-0">
                <SectionTitle heading='Recent Blog Posts' subHeading={'Effortlessly monitor your financial progress with a feature designed to help you track your earnings in real time as they grow.'} />
                <div data-aos="zoom-in" data-aos-duration="1500" className="container mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        blogs.map((blog) => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
                <div className="flex justify-center items-center  text-primary dark:text-secondary pt-8 container mx-auto">

                    <Link to='/all-blogs' className=''>View All  </Link>
                    <ArrowForward />
                </div>
            </div>

        </>


    );
};

export default RecentBlogPosts;