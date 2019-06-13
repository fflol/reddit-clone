import React from 'react';

import { Button } from 'react-bootstrap'

import './SingleCommunity.css'


function convertNums(x) {
    if (x > 1000000) return (x * 0.000001).toFixed(1) + 'm'
    if (x > 1000) return (x * 0.001).toFixed(1) + 'k'
    return x
}


function SingleCommunity({ icon_img, display_name_prefixed, subscribers }) {

    const convertedSubscribers = convertNums(subscribers)

    return (
        <div className='d-flex justify-content-between align-items-center my-2'>
            <img src={icon_img} alt={display_name_prefixed} className='single-community-icon' />
            <div className='single-community-text-container'>
                <a href={`https://www.reddit.com/${display_name_prefixed}`}
                    className='side-menu-text-title'
                    rel="noopener noreferrer"
                    target="_blank">{display_name_prefixed}</a>
                <p className='side-menu-text-para'>{convertedSubscribers} members</p>
            </div>
            <a href={`https://www.reddit.com/${display_name_prefixed}`}
                className=''
                rel="noopener noreferrer"
                target="_blank"
            >
                <Button className='single-community-button'>try now</Button>
            </a>
        </div>
    );
}

export default SingleCommunity;
