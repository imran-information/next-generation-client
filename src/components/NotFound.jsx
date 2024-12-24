import React from 'react';
import errorImg from '../assets/404/404.jpg'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Link to="/" className='font-semibold underline flex items-center gap-2 my-10'> <FaArrowLeft /> Back to home</Link>
            <div className="flex justify-center items-center">
                <img src={errorImg} alt="" />
            </div>
        </div>
    );
};

export default NotFound;