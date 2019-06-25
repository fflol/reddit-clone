import React from 'react';

import UpperFooter from './UpperFooter'
import LowerFooter from './LowerFooter'

import * as Styled from './footerStyle'


function Footer() {
    return (
        <footer>
            <Styled.Card>
                <UpperFooter />
                <LowerFooter />
            </Styled.Card>
        </footer>
    );
}

export default Footer;