import React from 'react';
import featureIgm from '../assets/home/feature-1.png'
import * as motion from "motion/react-client";

const TracYourEarnings = () => {
    return (
        <div className="hero bg-[#f5f6ff] min-h-min mb-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="flex-1">
                    <img
                        src={featureIgm}
                        className="w-full " />
                </div>
                <div className='flex-1 md:pl-20'>
                    <p className='text-lg font-medium text-[#00e29a] my-1'>Disclosure agreement buyer funding success</p>
                    <h1 className="text-4xl font-bold">Track your earnings as <br /> they grow</h1>
                    <p className="py-6 text-justify md:pr-20">
                        Effortlessly monitor your financial progress with a feature designed to help you track your earnings in real time as they grow. Stay informed, gain insights, and take control of your income with ease."
                        Let me know if you'd like further refinements!
                    </p>
                    <motion.button whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }} className="text-white border border-[#00e29a] rounded  font-semibold py-3 px-5 bg-[#00e29a]">GET STARTED NOW</motion.button>
                </div>
            </div>
        </div>
    );
};

export default TracYourEarnings;