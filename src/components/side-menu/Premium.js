import React from 'react';

import * as Styled from './premiumStyle'


function Premium() {
    return (
        <Styled.Card>
            <Styled.IconRose />
            <Styled.DivText>
                <Styled.H6Title>Reddit Premium</Styled.H6Title>
                <p>The best Reddit experience, with monthly Coins</p>
            </Styled.DivText>
            <Styled.ButtonPremium>try now</Styled.ButtonPremium>
        </Styled.Card>
    );
}

export default Premium;
