import React from 'react';
import BarChart from '../../components/Dashboard/Chart/Bar';
import PieActiveArc from '../../components/Dashboard/Chart/PieActiveArc';
import LiveLineChart from '../../components/Dashboard/Chart/LiveLineChart';
import MultiSeriesRadar from '../../components/Dashboard/Chart/MultiSeriesRadar';
import { Helmet } from 'react-helmet';

const DashboardHome = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-4 p-4">
                <Helmet>
                    <title>Next Generation | Dashboard</title>
                </Helmet>
                {/* BarChart */}
                <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-xl p-4">
                    <BarChart />
                </div>

                {/* PieActiveArc */}
                <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-xl p-4">
                    <PieActiveArc />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 p-4">
                {/* BarChart */}
                <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-xl p-4">
                    <LiveLineChart />
                </div>

                {/* PieActiveArc */}
                <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-xl p-4">
                    <MultiSeriesRadar />
                </div>
            </div>
        </>
    );
};

export default DashboardHome;
