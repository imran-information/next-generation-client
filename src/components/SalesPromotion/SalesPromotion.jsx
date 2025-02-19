import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";
import { Link } from "react-router-dom";

const SalesPromotion = () => {
    return (
        <section id="started" className="dark:bg-neutral-800 bg-slate-50" style={{ padding: "60px 0" }}>
            <Box
                sx={{
                    textAlign: "center",
                    color: "white",
                    margin: "0 auto",
                    padding: "30px",
                }}
            >
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <SectionTitle heading={"Don't Miss This Offer!"} subHeading={" Subscribe today and get 50% off on all our premium blogs. Start exploring endless  knowledge now!"} />

                    <Link data-aos="zoom-in" data-aos-duration="1500" to="/add-blog">
                        <Button variant="Outlined"
                            sx={{
                                color: '#00e29a',
                                borderRadius: '50px',
                                px: 3,
                                py: 0.9,
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                border: '2px solid #00e29a',
                                transition: 'all 0.3s ease-in-out',
                                boxShadow: '0px 4px 10px rgba(0, 226, 154, 0.3)',
                                '&:hover': {
                                    backgroundColor: '#00c288',
                                    boxShadow: '0px 6px 15px rgba(0, 226, 154, 0.5)',
                                    transform: 'translateY(-2px)',
                                    color: 'white',
                                },
                                '&:active': {
                                    transform: 'translateY(0px)',
                                    boxShadow: '0px 3px 8px rgba(0, 226, 154, 0.3)',
                                },
                            }}
                        >
                            Start Now
                        </Button>
                    </Link>
                </motion.div>
            </Box>
        </section>
    );
};

export default SalesPromotion;
