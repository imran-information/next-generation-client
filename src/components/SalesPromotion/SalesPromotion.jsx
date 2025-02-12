import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const SalesPromotion = () => {
    return (
        <section style={{ backgroundColor: "#292b2c", padding: "60px 0" }}>
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
                    <Typography variant="h4" gutterBottom>
                        Don't Miss This Offer!
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ fontSize: "18px" }}>
                        Subscribe today and get 50% off on all our premium blogs. Start exploring endless knowledge now!
                    </Typography>
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
                </motion.div>
            </Box>
        </section>
    );
};

export default SalesPromotion;
