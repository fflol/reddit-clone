import React from 'react';

import { IoMdLogOut } from "react-icons/io"

import ScoreButton from './ScoreButton'
import PostTopBar from './PostTopBar'
import PostFooter from './PostFooter'

import './SinglePostCard.css'


// supportive functions -----------------------------------------------
function checkURL(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}

// function htmlDecode(input) {
//     const doc = new DOMParser().parseFromString(input, "text/html");
//     return doc.documentElement.lastChild.innerHTML.replace('allowfullscreen', 'allowFullScreen').replace('class', 'className');
// }

function convertNums(x) {
    if (x > 1000000) return (x * 0.000001).toFixed(1) + 'm'
    if (x > 1000) return (x * 0.001).toFixed(1) + 'k'
    return x
}


// component ---------------------------------------------------------
const SinglePostCard = ({ post }) => {

    const { title, selftext_html, media_embed, url, thumbnail, permalink } = post

    const convertedUps = convertNums(post.ups)
    const subreddit = post.subreddit_name_prefixed
    const authorName = post.author.name
    const createdTimeUnix = post.created
    const barParams = { subreddit, authorName, createdTimeUnix }

    const convertedComments = convertNums(post.num_comments)
    const footerParams = { permalink, convertedUps, convertedComments }


    const mainDisplay = () => {
        if (Object.entries(media_embed).length !== 0) {
            return (<div className='single-post-card-media' dangerouslySetInnerHTML={{ __html: media_embed.content }} />)
        }
        else if (url && checkURL(url)) {
            return (<img src={url} alt={title} className='single-post-card-img' />)
        }
        else if (thumbnail !== 'self' && thumbnail !== 'default' && thumbnail !== 'spoiler') {
            return (<img src={thumbnail} alt={title} className='single-post-card-thumbnail' />)
        }
        else return
    }


    return (
        <div className='d-flex single-post-card-container'>
            <a href={`https://www.reddit.com${permalink}`} rel="noopener noreferrer" target="_blank">
                <span className="single-post-card-link-wrapper"></span>
            </a>
            <ScoreButton convertedUps={convertedUps} />
            <div>
                <PostTopBar barParams={barParams} />
                <h2 className='post-title'>{title}</h2>
                {/* <p>{selftext}</p> */}
                <div className='my-2 ml-1 max-height' dangerouslySetInnerHTML={{ __html: selftext_html }} />
                <a href={url} className='single-post-card-link' rel="noopener noreferrer" target="_blank">
                    {url}
                    <IoMdLogOut className='text-primary' />
                </a>
                {mainDisplay()}

                <PostFooter footerParams={footerParams} />
            </div>
        </div>
    );
}

export default SinglePostCard;