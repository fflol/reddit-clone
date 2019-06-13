import React, { useEffect } from 'react';

import { connect } from 'react-redux'

import { RedditCard } from '../customComponents'
import SingleCommunity from './SingleCommunity'

import { asyncFetchTrendingCommunities } from '../../actions/snoowrapActions'

import './TrendingCommunities.css'


const TrendingCommunities = ({ trendingCommunities, asyncFetchTrendingCommunities }) => {

    useEffect(() => {
        asyncFetchTrendingCommunities()
    })

    return (
        <RedditCard className='trending-communities-container'>
            <h6 className='trending-communities-title'>Trending Communities</h6>
            <div className='d-flex flex-column mt-2'>
                {trendingCommunities.map(community => <SingleCommunity {...community} />)}
            </div>
        </RedditCard>
    );
}


const mapStateToProps = (state) => {
    return {
        trendingCommunities: state.trendingCommunities,
    }
}

//   export default connect(mapStateToProps)(TrendingCommunities)
export default connect(mapStateToProps, { asyncFetchTrendingCommunities })(TrendingCommunities)