import React from 'react';

import './UpperFooter.css'


function UpperFooter() {
    return (
        <div className='d-flex justify-content-between upper-footer-container'>
            <div className='d-flex flex-column'>
                <a href="https://about.reddit.com" className='footer-text'>about</a>
                <a href="https://about.reddit.com/careers" className='footer-text'>careers</a>
                <a href="https://about.reddit.com/press" className='footer-text'>press</a>
            </div>
            <div className='d-flex flex-column'>
                <a href="https://about.reddit.com/advertise" className='footer-text'>advertise</a>
                <a href="https://redditblog.com/" className='footer-text'>blog</a>
                <a href="https://www.reddithelp.com/careers" className='footer-text'>help</a>
            </div>
            <div className='d-flex flex-column'>
                <a href="https://www.reddit.com/mobile/download" className='footer-text'>the reddit app</a>
                <a href="https://www.reddit.com/coins" className='footer-text'>reddit coins</a>
                <a href="https://www.reddit.com/premium" className='footer-text'>reddit premium</a>
                <a href="https://redditgifts.com/" className='footer-text'>reddit gifts</a>
            </div>
        </div>
    );
}

export default UpperFooter;