import React from "react";
import FeaturedBlogsCard from "./FeaturedBlogsCard/FeaturedBlogsCard";
import SectionTitle from "./shared/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

const FeaturedBlogs = () => {
    const { data: blogs = [], isPending, error } = useQuery({
        queryKey: ['FeaturedBlogsHome'],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/featured-blogs`);
                return data;
            } catch (error) {
                console.error("Error fetching blogs:", error);

            }
        },
    });

    if (isPending) return <LoadingSpinner />;
    if (blogs.length === 0) return <div className="text-primary container mx-auto">No blogs found.</div>;

    return (
        <section className="py-20 bg-slate-50 dark:bg-neutral-800">
            <div className="container mx-auto px-8 lg:px-0">
                <SectionTitle
                    heading={'Featured Blogs'}
                    subHeading={"Explore our featured blogs to get the latest insights on web development and beyond."}
                />
                <div data-aos="zoom-in" data-aos-duration="1500" className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {blogs.map((blog) => (
                        <FeaturedBlogsCard key={blog._id} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedBlogs;
