import React from 'react';
import Banner from '../components/Banner';
import RecentBlogPosts from '../components/RecentBlogPosts';
import BestFeatureEver from '../components/BestFeatureEver';
import TracYourEarnings from '../components/TracYourEarnings';
import Newsletter from '../components/Newsletter';
import { Helmet } from 'react-helmet-async';
import FeaturedBlogs from '../components/FeaturedBlogs';
import SalesPromotion from '../components/SalesPromotion/SalesPromotion';
import ReviewsSection from '../components/ReviewsSection';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Next Gen</title>
            </Helmet>
            <Banner></Banner>
            <RecentBlogPosts></RecentBlogPosts>
            <FeaturedBlogs />
            <TracYourEarnings></TracYourEarnings>
            <SalesPromotion />
            <BestFeatureEver></BestFeatureEver>
            <Newsletter></Newsletter>
            <ReviewsSection  />

        </div>
    );
};

export default Home;