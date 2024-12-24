import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import toast from 'react-hot-toast';
import WishlistCard from '../components/WishlistCard';

const Wishlist = () => {
    const { user } = useAuth()
    const [wishlists, setWishlists] = useState([]);

    console.log(wishlists);

    useEffect(() => {

        wishlistsData()
    }, [user])

    const wishlistsData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/wishlists/${user?.email}`, {withCredentials: true})
            setWishlists(data)

        } catch (err) {
            toast.error(err.response.data.message)
        }
    }


    // Wishlist delete 
    const handleDeleteWishlist = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/delete-wishlist/${id}`)
            toast.success('wishlist delete successfully.!')
            wishlistsData()
        } catch (err) {
            toast.error(err.response.data);
        }
    }




    return (
        <div className="p-8 py-32 min-h-screen bg-[#f5f6ff]">
            <h2 className="text-4xl  font-bold mb-4 text-center">Wishlist</h2>
            <p className="sm:px-96 text-center">
                Effortlessly monitor your financial progress with a feature designed to help you track <br /> your earnings in real time as they grow.
            </p>
            <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    wishlists.map((wishlist) => <WishlistCard key={wishlist._id} handleDeleteWishlist={handleDeleteWishlist} wishlist={wishlist}></WishlistCard>)}
            </div>
        </div>
    );
};

export default Wishlist;