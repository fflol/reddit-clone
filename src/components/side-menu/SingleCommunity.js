import React from 'react';

import * as Styled from './singleCommunityStyle'

// import supportive funcs
import { convertNums } from '../../supportive'


// component
function SingleCommunity({ icon_img, display_name_prefixed, subscribers }) {

    const convertedSubscribers = convertNums(subscribers)

    return (
        <Styled.DivContainer>
            <Styled.ImgIcon src={icon_img} alt={display_name_prefixed} />
            <Styled.DivText>
                <a href={`https://www.reddit.com/${display_name_prefixed}`}
                    rel="noopener noreferrer"
                    target="_blank">{display_name_prefixed}</a>
                <p>{convertedSubscribers} members</p>
            </Styled.DivText>
            <a href={`https://www.reddit.com/${display_name_prefixed}`}
                rel="noopener noreferrer"
                target="_blank"
            >
                <Styled.ButtonSingleCommunity>try now</Styled.ButtonSingleCommunity>
            </a>
        </Styled.DivContainer>
    );
}

export default SingleCommunity;
