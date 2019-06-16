import React from 'react';

// import components
import ScoreButton from './ScoreButton'
import PostTopBar from './PostTopBar'
import PostFooter from './PostFooter'

// import icons
import { IoMdLogOut } from "react-icons/io"

// import css
import './SinglePostCard.css'

// import supportive funcs
import { checkURL, convertNums } from '../../supportive'


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
