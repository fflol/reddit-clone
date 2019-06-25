import React from 'react';

// import components
import ScoreButton from './ScoreButton'
import PostTopBar from './PostTopBar'
import PostFooter from './PostFooter'

import * as Styled from './singlePostCardStyle'


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
            return (<Styled.DivCardMedia dangerouslySetInnerHTML={{ __html: media_embed.content }} />)
        }
        else if (url && checkURL(url)) {
            return (<Styled.ImgCardImg src={url} alt={title} />)
        }
        else if (thumbnail !== 'self' && thumbnail !== 'default' && thumbnail !== 'spoiler') {
            return (<Styled.ImgCardThumbnail src={thumbnail} alt={title} />)
        }
        else return
    }


    return (
        <Styled.DivContainer>
            <a href={`https://www.reddit.com${permalink}`} rel="noopener noreferrer" target="_blank">
                <Styled.SpanLinkWrapper></Styled.SpanLinkWrapper>
            </a>
            <ScoreButton convertedUps={convertedUps} />
            <div>
                <PostTopBar barParams={barParams} />
                <Styled.H2Title >{title}</Styled.H2Title>
                {/* <p>{selftext}</p> */}
                <Styled.DivSelfText dangerouslySetInnerHTML={{ __html: selftext_html }} />
                <Styled.ALink href={url} rel="noopener noreferrer" target="_blank">
                    {url}
                    <Styled.IconLogOut />
                </Styled.ALink>
                {mainDisplay()}

                <PostFooter footerParams={footerParams} />
            </div>
        </Styled.DivContainer>
    );
}

export default SinglePostCard;
