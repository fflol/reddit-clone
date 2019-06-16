import React from 'react';

// import components
import ScoreButton from './ScoreButton'
import PostTopBarClassic from './PostTopBarClassic'
import PostFooter from './PostFooter'

// import icon
import { IoMdLogOut, IoIosImage } from "react-icons/io"

// import css
import './SinglePostClassic.css'

// import supportive funcs
import { convertNums } from '../../supportive'


// component ------------------------
const SinglePostClassic = ({ post }) => {

    const { title, url, thumbnail, permalink } = post

    const convertedUps = convertNums(post.ups)
    const subreddit = post.subreddit_name_prefixed
    const authorName = post.author.name
    const createdTimeUnix = post.created
    const barParams = { subreddit, authorName, createdTimeUnix }

    const convertedComments = convertNums(post.num_comments)
    const footerParams = { convertedUps, convertedComments }

    
    const checkThumbnail = (thumbnail) => {
        if (thumbnail !== 'self' &&
            thumbnail !== 'default' &&
            thumbnail !== 'spoiler' &&
            thumbnail !== 'image') {
            return (<img src={thumbnail} alt={title} className='single-post-classic-thumbnail' />)
        }
        return (<IoIosImage className='single-post-classic-thumbnail' />)
    }


    return (
        <div href={`https://www.reddit.com${permalink}`} rel="noopener noreferrer" target="_blank" className='d-flex single-post-classic-container'>
            <ScoreButton convertedUps={convertedUps} />
            <div className='single-post-classic-right-container'>
                {checkThumbnail(thumbnail)}
                <div>
                    <h2 className='post-title'>{title}</h2>
                    <a href={url} className='d-block mt-2 ml-1' rel="noopener noreferrer" target="_blank">
                        {url}
                        <IoMdLogOut className='text-primary' />
                    </a>
                    <PostTopBarClassic barParams={barParams} />
                    <PostFooter footerParams={footerParams} />
                </div>
            </div>
        </div>
    );
}

export default SinglePostClassic;
