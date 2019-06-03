import React from 'react';

import { Dropdown, NavDropdown } from 'react-bootstrap'

import { IoIosText, IoIosShareAlt, IoMdAddCircleOutline, IoIosMore, IoIosFlag, IoIosRemoveCircleOutline } from "react-icons/io";

import './PostFooter.css'

function PostFooter() {
    return (
        <div className='d-flex post-footer-container'>

            <a href='' className='post-footer-button'>
                <IoIosText className='post-footer-icon' />
                <span>3.2k comments</span>
            </a>

            <a href='' className='post-footer-button'>
                <IoIosShareAlt className='post-footer-icon' />
                <span>Share</span>
            </a>

            <a href='' className='post-footer-button'>
                <IoMdAddCircleOutline className='post-footer-icon' />
                <span>Save</span>
            </a>

            <Dropdown drop='up'>

                <Dropdown.Toggle variant="" className='post-footer-button'>
                    <IoIosMore className='post-footer-icon' />
                </Dropdown.Toggle>

                <Dropdown.Menu className='post-footer-dropdown-menu'>

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
