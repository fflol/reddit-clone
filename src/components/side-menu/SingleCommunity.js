import React from 'react';

import { Button } from 'react-bootstrap'

import './SingleCommunity.css'

function SingleCommunity() {
    return (
        <div className='d-flex justify-content-between align-items-center my-2'>
            <div className='single-community-icon'>icon</div>
            <div className='single-community-text-container'>
                <h6 className='side-menu-text-title'>r/Nirvana</h6>
                <p className='side-menu-text-para'>30.5k members</p>
            </div>
            <Button className='single-community-button'>try now</Button>
        </div>
    );
}

export default SingleCommunity;
