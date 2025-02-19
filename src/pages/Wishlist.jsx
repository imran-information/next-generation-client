import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import WishlistCard from '../components/WishlistCard';
import useAxiosSecure from '../hooks/useAxiosCecure';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../components/shared/SectionTitle';
import LoadingSpinner from '../components/LoadingSpinner';

const Wishlist = () => {
    const { user } = useAuth();
    const instance = useAxiosSecure();
    const [wishlists, setWishlists] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        wishlistsData();
    }, [user]);

    const wishlistsData = async () => {
        try {
            setLoading(true); // Set loading to true before fetching data
            const { data } = await instance.get(`/wishlists/${user?.email}`);
            setWishlists(data);
        } catch (err) {
            toast.error(err.response.data.message);
        } finally {
            setLoading(false); // Set loading to false after fetching data
        }
    };

    // Wishlist delete 
    const handleDeleteWishlist = async (id) => {
        try {
            await instance.delete(`/delete-wishlist/${id}`);
            toast.success('Wishlist deleted successfully!');
            wishlistsData();
        } catch (err) {
            toast.error(err.response.data);
        }
    };

    if (loading) return <LoadingSpinner />; // Show loading spinner while fetching data

    return (
        <div className="p-8 py-32 min-h-screen bg-bg dark:bg-neutral-900">
            <div className="container mx-auto">
                <Helmet>
                    <title>Next Gen | Wishlist</title>
                </Helmet>
                <SectionTitle heading="Wishlist" subHeading="Your favorite items in one place." />
                <div data-aos="zoom-in" data-aos-duration="1500" className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
                    {wishlists.length > 0 ? (
                        wishlists.map((wishlist) => (
                            <WishlistCard key={wishlist._id} handleDeleteWishlist={handleDeleteWishlist} wishlist={wishlist} />
                        ))
                    ) : (
                        <div className="text-center col-span-full text-text-color text-lg">
                            No items in your wishlist.
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Wishlist;