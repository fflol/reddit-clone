import React from 'react';

import { RedditCard } from '../customComponents'

import { Button } from 'react-bootstrap'

import { IoMdRose } from "react-icons/io"

import './Premium.css'

function Premium() {
    return (
        <RedditCard className='d-flex justify-content-between align-items-center premium-container'>
            <IoMdRose className='premium-icon mr-2'/>
            <div className='premium-text-container pr-1'>
                <h6 className='side-menu-text-title'>Reddit Premium</h6>
                <p className='side-menu-text-para'>The best Reddit experience, with monthly Coins</p>
            </div>
            <Button className='premium-button'>try now</Button>
        </RedditCard>
    );
}

export default Premium;
