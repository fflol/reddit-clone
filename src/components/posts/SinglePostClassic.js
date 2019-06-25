import React from 'react';

// import components
import ScoreButton from './ScoreButton'
import PostTopBarClassic from './PostTopBarClassic'
import PostFooter from './PostFooter'

// import styled components
import * as Styled from './singlePostClassicStyle'
import { HorizontalContainer } from '../../styles/sharedComponents'

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
            return (<Styled.ImgThumbnail src={thumbnail} alt={title} />)
        }
        return (<Styled.IconImage />)
    }


    return (
        <Styled.DivContainer href={`https://www.reddit.com${permalink}`} rel="noopener noreferrer" target="_blank">
            <ScoreButton convertedUps={convertedUps} />
            <HorizontalContainer padding='8px'>
                {checkThumbnail(thumbnail)}
                <div>
                    <Styled.H2Title>{title}</Styled.H2Title>
                    <Styled.ALink href={url} rel="noopener noreferrer" target="_blank">
                        {url}
                        <Styled.IconLogOut />
                    </Styled.ALink>
                    <PostTopBarClassic barParams={barParams} />
                    <PostFooter footerParams={footerParams} />
                </div>
            </HorizontalContainer>
        </Styled.DivContainer>
    );
}

export default SinglePostClassic;
