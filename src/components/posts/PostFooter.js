import React from 'react';

import { Dropdown } from 'react-bootstrap'

import { IoIosText, IoIosShareAlt, IoMdAddCircleOutline, IoIosMore, IoIosFlag, IoIosRemoveCircleOutline, IoMdArrowRoundUp, IoMdArrowRoundDown  } from "react-icons/io";


import './PostFooter.css'

function PostFooter() {
    return (
        <div className='d-flex post-footer-container'>

            <div className='responsive-post-footer-score'>
                <button className='score-button'>
                    <IoMdArrowRoundUp className='score-icon' />
                </button>
                <span className='score-number'>35</span>
                <button className='score-button'>
                    <IoMdArrowRoundDown className='score-icon' />
                </button>
            </div>

            <a href='' className='post-footer-button'>
                <IoIosText className='post-footer-icon' />
                <span>3.2k comments</span>
            </a>

            <a href='' className='post-footer-button responsive-post-footer-button'>
                <IoIosShareAlt className='post-footer-icon' />
                <span>Share</span>
            </a>

            <a href='' className='post-footer-button responsive-post-footer-button'>
                <IoMdAddCircleOutline className='post-footer-icon' />
                <span>Save</span>
            </a>

            <Dropdown drop='up'>

                <Dropdown.Toggle variant="" className='post-footer-button'>
                    <IoIosMore className='post-footer-icon' />
                </Dropdown.Toggle>

                <Dropdown.Menu className='post-footer-dropdown-menu'>

                    <Dropdown.Item href="" className='post-footer-item responsive-post-footer-item'>
                        <IoIosShareAlt className='post-footer-icon' />
                        <span>Share</span>
                    </Dropdown.Item>

                    <Dropdown.Divider className='responsive-post-footer-item' />

                    <Dropdown.Item href="" className='post-footer-item responsive-post-footer-item'>
                        <IoMdAddCircleOutline className='post-footer-icon' />
                        <span>Save</span>
                    </Dropdown.Item>

                    <Dropdown.Divider className='responsive-post-footer-item' />

                    <Dropdown.Item href="" className='post-footer-item'>
                        <IoIosFlag className='post-footer-icon' />
                        <span>Hide</span>
                    </Dropdown.Item>

                    <Dropdown.Divider />

                    <Dropdown.Item href="" className='post-footer-item'>
                        <IoIosRemoveCircleOutline className='post-footer-icon' />
                        <span>Report</span>
                    </Dropdown.Item>

                </Dropdown.Menu>

            </Dropdown>

        </div>
    );
}

export default PostFooter;
