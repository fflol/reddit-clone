import React from 'react';

import * as Styled from './scoreButtonStyle'

function ScoreButton({ convertedUps }) {
    return (
        <Styled.DivContainer>
            <Styled.Button>
                <Styled.IconRoundUp />
            </Styled.Button>
            <Styled.SpanScore>{convertedUps}</Styled.SpanScore>
            <Styled.Button>
                <Styled.IconRoundDown />
            </Styled.Button>
        </Styled.DivContainer>
    )
}

export default ScoreButton;
