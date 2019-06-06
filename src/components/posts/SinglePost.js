import React from 'react';

import { IoMdLogOut } from "react-icons/io"

import ScoreButton from './ScoreButton'
import PostTopBar from './PostTopBar'
import PostFooter from './PostFooter'


import './SinglePost.css'


function SinglePost() {
    return (
        <div className='d-flex single-post-container'>
            <ScoreButton />
            <div>
                <PostTopBar />
                <h2 className='post-title'>CONGRATULATIONS ILLINOIS on the legalization of marijuana... And now a word from your employer...</h2>
                <a href="https://i.imgur.com/5IR5NZ2.jpg" className='d-block my-2 ml-1' rel="noopener noreferrer" target="_blank">
                    i.imgur.com/5IR5NZ...
                    <IoMdLogOut className='text-primary' />
                </a>
                <img 
                    src="https://external-preview.redd.it/Bf2GdlErxg0fG5E3ljd7ZuVm8Fpk5qQGEsUzUZG-ARw.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=78a61296d781ca92f1abb0fc222e275301370743" 
                    alt=""
                    className='single-post-img'
                />
                <PostFooter />
            </div>
        </div>
    );
}

export default SinglePost;
