import React from 'react';

import { OverlayTrigger, Button, Tooltip, Popover } from 'react-bootstrap'

import UserMiniWindow from './UserMiniWindow'

import './PostTopBar.css'


function PostTopBar() {
    return (
        <div className='d-flex justify-content-between post-top-bar-container'>

            <div className='d-flex mt-1'>

                <span>author icon</span>

                <OverlayTrigger
                    placement="bottom-start"
                    delay={{ show: 250, hide: 400 }}
                    overlay={
                        <Popover>
                            <UserMiniWindow />
                        </Popover>
                    }
                >
                    <span className='top-bar-overlay'>r/AdviceAnimals</span>
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
                    <span className='top-bar-overlay'>u/zenwalrus</span>
                </OverlayTrigger>

                <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={<Tooltip>19-06-02 10:21</Tooltip>}
                >
                    <span className='top-bar-overlay'>15 hours ago</span>
                </OverlayTrigger>

            </div>

            <Button className='top-bar-join-button'>+JOIN</Button>

        </div>
    );
}

export default PostTopBar;
