import React from 'react';

import './UpperFooter.css'


function UpperFooter() {
    return (
        <div className='d-flex justify-content-between upper-footer-container'>
            <div className='d-flex flex-column'>
                <a href="" className='footer-text'>about</a>
                <a href="" className='footer-text'>careers</a>
                <a href="" className='footer-text'>press</a>
            </div>
            <div className='d-flex flex-column'>
                <a href="" className='footer-text'>advertise</a>
                <a href="" className='footer-text'>blog</a>
                <a href="" className='footer-text'>help</a>
            </div>
            <div className='d-flex flex-column'>
                <a href="" className='footer-text'>the reddit app</a>
                <a href="" className='footer-text'>reddit coins</a>
                <a href="" className='footer-text'>reddit premium</a>
                <a href="" className='footer-text'>reddit gifts</a>
            </div>
        </div>
    );
}

export default UpperFooter;