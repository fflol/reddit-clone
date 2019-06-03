import React from 'react';

import { Button } from 'react-bootstrap'

import { RedditCard } from '../customComponents'

import './Feeds.css'


function Feeds() {
    return (
        <RedditCard>
            <div className='feeds-landscape'></div>
            <div className='d-flex feeds-guy-container'>
                <div className='feeds-guy-icon'></div>
                <h6 className='feeds-title'>r/popular</h6>
            </div>
            <p className='feeds-para'>The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.</p>
            <Button className='feeds-button'>create post</Button>
        </RedditCard>
    );
}

export default Feeds;
