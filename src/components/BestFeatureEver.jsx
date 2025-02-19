import React from 'react';
import * as motion from "motion/react-client";
import SectionTitle from './shared/SectionTitle';
import SettingsIcon from "@mui/icons-material/Settings";
import PaletteIcon from "@mui/icons-material/Palette";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const BestFeatureEver = () => {
    return (
        <div className="py-20 bg-bg dark:bg-neutral-900 px-10 lg:px-0">
            <SectionTitle
                heading="Best Feature Ever"
                subHeading="Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition."
            />

            <div data-aos="zoom-in" data-aos-duration="1500" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8 container mx-auto ">

                {/* Card 1 - Advanced Options */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 text-center transition-all duration-300 ease-in-out"
                >
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary dark:bg-secondary rounded-full mb-4">
                        <SettingsIcon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary">
                        Advanced Options
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 my-2">
                        Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition.
                    </p>
                    <a
                        href="#"
                        className="relative inline-block text-primary dark:text-secondary font-medium group"
                    >
                        READ MORE
                        <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-primary dark:bg-secondary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </motion.div>

                {/* Card 2 - Perfect Design */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 text-center transition-all duration-300 ease-in-out"
                >
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary dark:bg-secondary rounded-full mb-4">
                        <PaletteIcon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary">
                        Perfect Design
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 my-2">
                        Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition.
                    </p>
                    <a
                        href="#"
                        className="relative inline-block text-primary dark:text-secondary font-medium group"
                    >
                        READ MORE
                        <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-primary dark:bg-secondary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </motion.div>

                {/* Card 3 - Documentation */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 text-center transition-all duration-300 ease-in-out"
                >
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary dark:bg-secondary rounded-full mb-4">
                        <MenuBookIcon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary">
                        Documentation
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 my-2">
                        Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition.
                    </p>
                    <a
                        href="#"
                        className="relative inline-block text-primary dark:text-secondary font-medium group"
                    >
                        READ MORE
                        <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-primary dark:bg-secondary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </motion.div>

                {/* Card 4 - Reasonable Pricing */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-6 text-center transition-all duration-300 ease-in-out"
                >
                    <div className="flex items-center justify-center w-12 h-12 mx-auto bg-primary dark:bg-secondary rounded-full mb-4">
                        <AttachMoneyIcon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-secondary">
                        Reasonable Pricing
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 my-2">
                        Best Feature Ever refers to a standout functionality or capability that sets a product, service, or solution apart from the competition.
                    </p>
                    <a
                        href="#"
                        className="relative inline-block text-primary dark:text-secondary font-medium group"
                    >
                        READ MORE
                        <span className="absolute left-0 bottom-0 block w-0 h-[2px] bg-primary dark:bg-secondary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default BestFeatureEver;
