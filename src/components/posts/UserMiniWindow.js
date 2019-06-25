import React from 'react';

import * as Styled from './userMiniWindowStyle'
// import './UserMiniWindow.css'


// not finished, not been used
const UserMiniWindow = () => {
    return (
        <div>
            <Styled.ALink>author mini window</Styled.ALink>
            <div className=''>
                <div>
                    <span>23.1m</span>
                    <span>members</span>
                </div>
                <div>
                    <span>70.5k</span>
                    <span>online</span>
                </div>
                <span></span>

            </div>
        </div>
    )
}

export default UserMiniWindow;
