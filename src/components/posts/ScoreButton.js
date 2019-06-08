import React from 'react';

import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";

import './ScoreButton.css'

function ScoreButton({ ups }) {
    return (
        <div className='score-button-container'>
            <button className='score-button'>
                <IoMdArrowRoundUp className='score-icon' />
            </button>
            <span className='score-number'>{ups}</span>
            <button className='score-button'>
                <IoMdArrowRoundDown className='score-icon' />
            </button>
        </div>
    );
}

export default ScoreButton;
