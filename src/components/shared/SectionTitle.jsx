import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='max-w-2xl mx-auto'>
            <h2 className="text-4xl  font-bold mb-3 text-center text-text-color">{heading}</h2>
            <p className="text-center text-primary-light md:text-lg mb-10"> {subHeading}</p>
        </div>
    );
};

export default SectionTitle;