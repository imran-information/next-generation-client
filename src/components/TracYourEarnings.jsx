import React from 'react';
import featureIgm from '../assets/home/feature-1.png'
import * as motion from "motion/react-client";
import { Button } from '@mui/material';

const TracYourEarnings = () => {
    return (
        <div className=" bg-bg min-h-min  ">
            <div className="container mx-auto flex flex-col items-center  justify-between gap-6 lg:flex-row">
                <div className="flex-1">
                    <img
                        src={featureIgm}
                        className="md:p-20 lg:px-0 w-4/5 " />
                </div>
                <div className='flex-1 md:pl-20'>
                    <p className='text-lg font-medium text-primary my-1'>Disclosure agreement buyer funding success.</p>
                    <h1 className="text-4xl font-bold text-text-color">Track your earnings as <br /> they grow</h1>
                    <p className="py-6 text-justify text-primary-light">
                        Effortlessly monitor your financial progress with a feature designed to help you track your earnings in real time as they grow. Stay informed, gain insights, and take control of your income with ease."
                        Let me know if you'd like further refinements!
                    </p>
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
                </div>
            </div>
        </div>
    );
};

export default TracYourEarnings;