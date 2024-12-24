import React from 'react';
import * as motion from "motion/react-client";


const Banner = () => {
    return (

        <div className="">
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://img.freepik.com/free-photo/silhouette-businessman-with-bar-graph-distance_1134-397.jpg?t=st=1734863536~exp=1734867136~hmac=8cce80444af79cc96f56a7badf0c1ea1faca5d3ba84051a78a2868cc8ac4455a&w=1380)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-4xl md:text-6xl font-bold text-white">Continuous integration with NextGen</h1>
                        <p className="mb-5">
                            Next Generation refers to the latest advancements or iterations of technology, products, or systems designed to surpass the capabilities of their predecessors.
                        </p>
                        <div className=" flex  justify-center items-center gap-3">
                            <motion.button whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }} initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-white  border-[#00e29a] rounded  font-semibold py-3 px-8 bg-[#00e29a]">LEARN MORE</motion.button>
                            <motion.button whileHover={{ scale: 1.1 }} 
                                whileTap={{ scale: 0.95 }} className="text-white border-2 btn btn-neutral border-[#00e29a] rounded  font-semibold py-3 px-12">TRY FREE</motion.button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;