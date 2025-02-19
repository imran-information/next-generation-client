import React from 'react';
import featureIgm from '../assets/home/feature-1.png'
import * as motion from "motion/react-client";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const TracYourEarnings = () => {
    return (
        <div className=" bg-bg dark:bg-neutral-900 min-h-min  ">
            <div data-aos="zoom-in-right" data-aos-duration="3000" className="container mx-auto flex flex-col items-center  justify-between gap-6 lg:flex-row py-10 lg:py-0">
                <div className="flex-1">
                    <img
                        src={featureIgm}
                        className="xl:p-20 w-4/5 mx-auto lg:mx-0 md:w-1/2 lg:w-full" />
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="1500" className='flex-1 px-10 lg:px-0 text-center lg:text-left'>
                    <p className='text-lg font-medium text-secondary dark:text-primary my-1'>Disclosure agreement buyer funding success.</p>
                    <h1 className="md:text-4xl text-3xl font-bold text-primary dark:text-secondary">Track your earnings as  they grow</h1>
                    <p className="py-6 text-justify text-primary-light dark:text-gray-300">
                        Effortlessly monitor your financial progress with a feature designed to help you track your earnings in real time as they grow. Stay informed, gain insights, and take control of your income with ease."
                        Let me know if you'd like further refinements!
                    </p>
                    <Link to="/add-blog">
                        <Button
                            sx={{
                                backgroundColor: '#00e29a',
                                color: 'white',
                                borderRadius: '50px',
                                px: 3,
                                py: 1,
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                transition: 'all 0.3s ease-in-out',
                                boxShadow: '0px 4px 10px rgba(0, 226, 154, 0.3)',
                                '&:hover': {
                                    backgroundColor: '#00c288',
                                    boxShadow: '0px 6px 15px rgba(0, 226, 154, 0.5)',
                                    transform: 'translateY(-2px)',
                                },
                                '&:active': {
                                    transform: 'translateY(0px)',
                                    boxShadow: '0px 3px 8px rgba(0, 226, 154, 0.3)',
                                },
                            }}>
                            GET STARTED NOW
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TracYourEarnings;