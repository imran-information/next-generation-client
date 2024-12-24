import React from 'react';
import Banner from '../components/Banner';
import RecentBlogPosts from '../components/RecentBlogPosts';
import BestFeatureEver from '../components/BestFeatureEver';
import TracYourEarnings from '../components/TracYourEarnings';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlogPosts></RecentBlogPosts>
            <TracYourEarnings></TracYourEarnings>
            <BestFeatureEver></BestFeatureEver>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;