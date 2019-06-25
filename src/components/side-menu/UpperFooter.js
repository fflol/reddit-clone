import React from 'react';

import { VerticalContainer } from '../../styles/sharedComponents'

// import './UpperFooter.css'

import * as Styled from './upperFooterStyle'

function UpperFooter() {
    return (
        <Styled.DivContainer>

            <VerticalContainer>
                <Styled.ALink
                    href="https://about.reddit.com"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    about
                </Styled.ALink>

                <Styled.ALink
                    href="https://about.reddit.com/careers"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    careers
                </Styled.ALink>

                <Styled.ALink
                    href="https://about.reddit.com/press"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    press
                </Styled.ALink>
            </VerticalContainer>

            <VerticalContainer>
                <Styled.ALink
                    href="https://about.reddit.com/advertise"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    advertise
                </Styled.ALink>

                <Styled.ALink
                    href="https://redditblog.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    blog
                </Styled.ALink>

                <Styled.ALink
                    href="https://www.reddithelp.com/careers"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    help
                </Styled.ALink>
            </VerticalContainer>

            <VerticalContainer>
                <Styled.ALink
                    href="https://www.reddit.com/mobile/download"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    the reddit app
                </Styled.ALink>

                <Styled.ALink
                    href="https://www.reddit.com/coins"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    reddit coins
                </Styled.ALink>

                <Styled.ALink
                    href="https://www.reddit.com/premium"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    reddit premium
                </Styled.ALink>
                
                <Styled.ALink
                    href="https://redditgifts.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    reddit gifts
                </Styled.ALink>
            </VerticalContainer>
        </Styled.DivContainer>
    );
}

export default UpperFooter;