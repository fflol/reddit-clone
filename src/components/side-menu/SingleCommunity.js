import React from 'react';

// import react-bootstrap components
import { Button } from 'react-bootstrap'

// import css
import './SingleCommunity.css'

// import supportive funcs
import { convertNums } from '../../supportive'


// component
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
