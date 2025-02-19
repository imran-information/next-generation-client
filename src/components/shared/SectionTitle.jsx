import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div data-aos="zoom-in-down" data-aos-duration="1500" className='max-w-2xl mx-auto'>
            <h2 className="md:text-4xl text-3xl  font-bold mb-3 text-center text-primary dark:text-secondary">{heading}</h2>
            <p className="text-center text-primary-light dark:text-gray-300 md:text-lg mb-10"> {subHeading}</p>
        </div>
    );
};

export default SectionTitle;