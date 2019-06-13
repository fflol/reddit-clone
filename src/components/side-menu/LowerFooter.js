import React from 'react';

// import './LowerFooter.css'


function LowerFooter() {
    return (
        <div className='mt-3 text-center'>
            <div>
                <a href="https://www.reddit.com/help/contentpolicy" className='footer-text'>content policy | privacy policy</a>
            </div>
            <div>
                <a href="https://www.reddit.com/help/useragreement" className='footer-text'>user agreement | mod policy</a>
            </div>
            <div>
                <span className='footer-text'>© 2019 Reddit, Inc. All rights reserved</span>
            </div>
        </div>
    );
}

export default LowerFooter;