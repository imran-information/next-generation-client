import React from 'react';
import Banner from '../components/Banner';
import RecentBlogPosts from '../components/RecentBlogPosts';
import BestFeatureEver from '../components/BestFeatureEver';
import TracYourEarnings from '../components/TracYourEarnings';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Next Gen</title>
            </Helmet>
            <Banner></Banner>
            <RecentBlogPosts></RecentBlogPosts>
            <TracYourEarnings></TracYourEarnings>
            <BestFeatureEver></BestFeatureEver>
            <Newsletter></Newsletter>
            {/* <Banner />
            <FeaturedProducts />
            <RecentProducts />
            <SalesPromotion />
            <RecentBlogPosts />
            <TracYourEarnings />
            <BestFeatureEver />
            <Reviews />
            <Newsletter /> */}
        </div>
    );
};

export default Home;