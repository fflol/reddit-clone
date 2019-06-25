import React from 'react';

import * as Styled from './lowerFooterStyle'

// import './LowerFooter.css'


function LowerFooter() {
    return (
        <Styled.DivContainer>
            <div>
                <Styled.ALink href="https://www.reddit.com/help/contentpolicy">
                content policy | privacy policy
                </Styled.ALink>
            </div>
            <div>
                <Styled.ALink href="https://www.reddit.com/help/useragreement">
                user agreement | mod policy
                </Styled.ALink>
            </div>
            <div>
                <Styled.SpanFooter>© 2019 Reddit, Inc. All rights reserved</Styled.SpanFooter>
            </div>
        </Styled.DivContainer>
    );
}

export default LowerFooter;