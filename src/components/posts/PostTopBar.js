import React from 'react';

import { OverlayTrigger, Button, Tooltip, Popover } from 'react-bootstrap'

import UserMiniWindow from './UserMiniWindow'

import './PostTopBar.css'



function diffHours(dt2, dt1) {
    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
}


function PostTopBar({ barParams }) {

    // console.log('post top bar, barParams', barParams)

    const { subreddit, authorName, createdTimeUnix } = barParams
    const createdTime = new Date(createdTimeUnix * 1000)
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: "short" }
    const timeDisplayed = createdTime.toLocaleDateString('en-US', options)
    const timePassed = diffHours(createdTime, new Date())

    return (
        <div className='d-flex justify-content-between post-top-bar-container'>

            <div className='d-flex mt-1'>

                <span></span>

                <OverlayTrigger
                    placement="bottom-start"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                        <Popover>
                            <UserMiniWindow />
                        </Popover>
                    }
                >
                    <span className='top-bar-overlay font-weight-700'>{subreddit}</span>
                </OverlayTrigger>

                <span>&nbsp; &#183; &nbsp;</span>

                <span>Posted by</span>
                
                <OverlayTrigger
                    placement="bottom-start"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                        <Popover>
                            <UserMiniWindow />
                        </Popover>
                    }
                >
                    <span className='top-bar-overlay'>&nbsp;u/{authorName}&nbsp;</span>
                </OverlayTrigger>
                
                <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip>{timeDisplayed}</Tooltip>}
                >
                    <span className='top-bar-overlay'>{timePassed} hours ago</span>
                </OverlayTrigger>

            </div>

            <Button className='top-bar-join-button'>+JOIN</Button>

        </div>
    );
}

export default PostTopBar;
