import React from 'react';

// import supportive react-bootstrap components
import { OverlayTrigger } from 'react-bootstrap'

import * as Styled from './postTopBarStyle'

// import supportive funcs
import { diffHours } from '../../supportive'


// componets
function PostTopBar({ barParams }) {

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
        <Styled.DivContainer>
        {/* <div className={`d-flex justify-content-between post-top-bar-container ${className}`}> */}

            <Styled.DivSubContainer>

                <Styled.SpanSubreddit>{subreddit}</Styled.SpanSubreddit>
                <Styled.Span>&nbsp;u/{authorName}&nbsp;</Styled.Span>
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
                    overlay={<Styled.TooltipTime>{timeDisplayed}</Styled.TooltipTime>}
                >
                    <Styled.Span>{timePassed} hours ago</Styled.Span>
                </OverlayTrigger>

            </Styled.DivSubContainer>

            <Styled.ButtonJoin>+JOIN</Styled.ButtonJoin>
        {/* </div> */}
        </Styled.DivContainer>

    );
}

export default PostTopBar;
