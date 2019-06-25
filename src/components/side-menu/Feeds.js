import React from 'react';

import * as Styled from './feedsStyle'


function Feeds() {
    return (
        <Styled.CardContainer>
            <Styled.Landscape></Styled.Landscape>
            <Styled.GuyContainer>
                <Styled.GuyIcon></Styled.GuyIcon>
                <Styled.H6Feeds>r/popular</Styled.H6Feeds>
            </Styled.GuyContainer>
            <Styled.PFeeds>
                The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.
            </Styled.PFeeds>
            <Styled.ButtonFeeds>create post</Styled.ButtonFeeds>
        </Styled.CardContainer>
    );
}

export default Feeds;
