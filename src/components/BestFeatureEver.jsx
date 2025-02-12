import React from 'react';
import * as motion from "motion/react-client";
import SectionTitle from './shared/SectionTitle';

const BestFeatureEver = () => {
    return (
        <div className="py-20 bg-bg">
            <SectionTitle
                heading="Best Feature Ever"
                subHeading="Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 container mx-auto">

                {/* Card 1 */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 ease-in-out"
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
                        className="relative inline-block text-purple-500 font-medium group"
                    >
                        READ MORE
                        <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 ease-in-out"
                >
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-500 rounded-full mb-4">
                        <span className="text-white text-xl">🎨</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Perfect Design</h3>
                    <p className="text-sm text-gray-600 my-2">
                        Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition.
                    </p>
                    <a
                        href="#"
                        className="relative inline-block text-purple-500 font-medium group"
                    >
                        READ MORE
                        <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 ease-in-out"
                >
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-500 rounded-full mb-4">
                        <span className="text-white text-xl">📖</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Documentation</h3>
                    <p className="text-sm text-gray-600 my-2">
                        Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition.
                    </p>
                    <a
                        href="#"
                        className="relative inline-block text-purple-500 font-medium group"
                    >
                        READ MORE
                        <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </motion.div>

                {/* Card 4 */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-300 ease-in-out"
                >
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-500 rounded-full mb-4">
                        <span className="text-white text-xl">✂️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Reasonable Pricing</h3>
                    <p className="text-sm text-gray-600 my-2">
                        Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition.
                    </p>
                    <a
                        href="#"
                        className="relative inline-block text-purple-500 font-medium group"
                    >
                        READ MORE
                        <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default BestFeatureEver;
