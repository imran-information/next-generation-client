import React from 'react';
import * as motion from "motion/react-client";

const BestFeatureEver = () => {
    return (
        <div className="my-20">
            <h2 className='font-bold text-4xl text-center'>Best Feature Ever</h2>
            <p className="text-center my-5">Best Feature Ever refers to a standout functionality or capability that sets a <br /> product, service, or solution apart from the competition.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 w-10/12 mx-auto">

                {/* Card 1 */}
                <motion.div
                    whileHover={{ scale: 1.10 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white rounded-lg shadow-md p-6 text-center"
                >
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-500 rounded-full mb-4">
                        <span className="text-white text-xl">⚙️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Advanced Options</h3>
                    <p className="text-sm text-gray-600 my-2">
                        Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition.
                    </p>
                    <a
                        href="#"
                        className="text-purple-500 font-medium hover:underline mt-4 inline-block"
                    >
                        READ MORE
                    </a>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    whileHover={{ scale: 1.10 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-500 rounded-full mb-4">
                        <span className="text-white text-xl">🎨</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Perfect Design</h3>
                    <p className="text-sm text-gray-600 my-2">
                        Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition.
                    </p>
                    <a
                        href="#"
                        className="text-purple-500 font-medium hover:underline mt-4 inline-block"
                    >
                        READ MORE
                    </a>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    whileHover={{ scale: 1.10 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-500 rounded-full mb-4">
                        <span className="text-white text-xl">📖</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Documentation</h3>
                    <p className="text-sm text-gray-600 my-2">
                        Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition.
                    </p>
                    <a
                        href="#"
                        className="text-purple-500 font-medium hover:underline mt-4 inline-block"
                    >
                        READ MORE
                    </a>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                    whileHover={{ scale: 1.10 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white rounded-lg shadow-md p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-500 rounded-full mb-4">
                        <span className="text-white text-xl">✂️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                        Reasonable Pricing
                    </h3>
                    <p className="text-sm text-gray-600 my-2">
                        Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition.
                    </p>
                    <a
                        href="#"
                        className="text-purple-500 font-medium hover:underline mt-4 inline-block"
                    >
                        READ MORE
                    </a>
                </motion.div>
            </div>
        </div>


    );
};

export default BestFeatureEver;