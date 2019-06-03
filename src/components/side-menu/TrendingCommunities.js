import React from 'react';

import { RedditCard } from '../customComponents'
import SingleCommunity from './SingleCommunity'

import './TrendingCommunities.css'

function TrendingCommunities() {
    return (
        <RedditCard className='trending-communities-container'>
            <h6 className='trending-communities-title'>Trending Communities</h6>
            <div className='d-flex flex-column mt-2'>
                <SingleCommunity />
                <SingleCommunity />
                <SingleCommunity />
                <SingleCommunity />
                <SingleCommunity />
            </div>
        </RedditCard>
    );
}

export default TrendingCommunities;
