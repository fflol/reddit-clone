import React from 'react';

import { IoMdLogOut } from "react-icons/io"

import ScoreButton from './ScoreButton'
import PostTopBar from './PostTopBar'
import PostFooter from './PostFooter'

import './SinglePost.css'


function SinglePost({ post }) {
    const ups = post.ups
    const subreddit = post.subreddit_name_prefixed
    const authorName = post.author.name
    const createdTimeUnix = post.created
    const title = post.title
    const selfText = post.selftext
    const url = post.url
    const commentsNum = post.num_comments
    const barParams = {subreddit, authorName, createdTimeUnix}

    return (
        <div className='d-flex single-post-container'>
            <ScoreButton ups={ups} />
            <div>
                <PostTopBar barParams={barParams} />
                <h2 className='post-title'>{title}</h2>
                <p>{selfText}</p>
                <a href={url} className='d-block my-2 ml-1' rel="noopener noreferrer" target="_blank">
                    {url}
                    <IoMdLogOut className='text-primary' />
                </a>
                <img src={url} alt="" className='single-post-img' />
                <PostFooter commentsNum={commentsNum} />
            </div>
        </div>
    );
}

export default SinglePost;
