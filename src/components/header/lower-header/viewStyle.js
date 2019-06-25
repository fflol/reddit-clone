import styled from 'styled-components'
import { Nav } from 'react-bootstrap'

import {flex} from '../../../styles/flex'
import * as mixins from '../../../styles/mixins'

// import icons
import { MdReorder, MdViewAgenda } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";

export const Container = styled.div`
    ${flex.horizontal};
    ${flex.centerHorizontalV};
    margin: 0 12px 0 0;
    padding: 0px 12px 0px 0;
    border-right: 1px solid rgb(237, 239, 241);
`

export const TitleSpan = styled.span`
    font-size: ${mixins.fontsizeSmall};
    color: ${mixins.colorSecondary};
    margin: 0px 10px 0 0;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 12px;
    text-transform: uppercase;
`

export const NavLink = styled(Nav.Link)`
    padding: 0;
`


// icons
const cardSize = '1.1rem'
const otherIconSize = '1.3rem'

// card icons
export const IconCardActivated = styled(MdViewAgenda)`
    font-size: ${cardSize};
    color: ${mixins.colorPrimary};
`
export const IconCardInactivated = styled(MdViewAgenda)`
    font-size: ${cardSize};
    color: ${mixins.colorLightPrimary};
`

// classic icons
export const IconClassicActivated = styled(MdReorder)`
    font-size: ${otherIconSize};
    color: ${mixins.colorPrimary};
`
export const IconClassicInactivated = styled(MdReorder)`
    font-size: ${otherIconSize};
    color: ${mixins.colorLightPrimary};
`

// compact icons
export const IconCompactActivated = styled(GoThreeBars)`
    font-size: ${otherIconSize};
    color: ${mixins.colorPrimary};
`
export const IconCompactInactivated = styled(GoThreeBars)`
    font-size: ${otherIconSize};
    color: ${mixins.colorLightPrimary};
`