import React from 'react';

import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";

import './ScoreButton.css'

function ScoreButton() {
    return (
        <div className='d-flex flex-column align-items-center score-button-container'>
            <button className='score-button'>
                <IoMdArrowRoundUp className='score-icon' />
            </button>
            <span className='score-number'>35</span>
            <button className='score-button'>
                <IoMdArrowRoundDown className='score-icon' />
            </button>
        </div>
    );
}

export default ScoreButton;
