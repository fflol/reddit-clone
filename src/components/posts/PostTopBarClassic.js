import React from 'react';

// import supportive react-bootstrap components
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

// import css
import './PostTopBar.css'

// import supportive funcs
import { diffHours } from '../../supportive'


// component
function PostTopBar({ barParams, className }) {

    const { subreddit, authorName, createdTimeUnix } = barParams
    const createdTime = new Date(createdTimeUnix * 1000)
    const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: "short"
    }
    const timeDisplayed = createdTime.toLocaleDateString('en-US', options)
    const timePassed = diffHours(createdTime, new Date())

    
    return (
        <div className={`d-flex justify-content-between my-0 post-top-bar-container ${className}`}>

            <div className='d-flex mt-1'>

                <span></span>
                <span className='top-bar-overlay font-weight-700'>{subreddit}</span>
                <span className='top-bar-overlay'>&nbsp;u/{authorName}&nbsp;</span>
                {/* <OverlayTrigger
                    placement="bottom-start"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                        <Popover>
                            <UserMiniWindow />
                        </Popover>
                    }
                >
                    <span className='top-bar-overlay font-weight-700'>{subreddit}</span>
                </OverlayTrigger> */}

                <span>&nbsp; &#183; &nbsp;</span>

                <span>Posted by</span>

                <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip className='top-bar-time-window'>{timeDisplayed}</Tooltip>}
                >
                    <span className='top-bar-overlay'>{timePassed} hours ago</span>
                </OverlayTrigger>

            </div>

            {/* <Button className='top-bar-join-button'>+JOIN</Button> */}

        </div>
    );
}

export default PostTopBar;
