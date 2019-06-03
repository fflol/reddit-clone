import React from 'react';

import UpperFooter from './UpperFooter'
import LowerFooter from './LowerFooter'
import { RedditCard } from '../customComponents'

import './Footer.css'


function Footer() {
    return (
        <footer>
            <RedditCard className='footer-container'>
                <UpperFooter />
                <LowerFooter />
            </RedditCard>
        </footer>
    );
}

export default Footer;