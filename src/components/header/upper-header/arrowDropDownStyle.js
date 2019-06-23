import styled from 'styled-components'
import { NavDropdown, Dropdown } from 'react-bootstrap'

import { breakpoints, smallerThan, widerThan } from '../../../styles/responsive'
import * as mixins from '../../../styles/mixins'
import { flex } from '../../../styles/flex'

// import icons
import { IoMdTrendingUp, IoIosPodium, IoIosCreate, IoIosRadioButtonOn, IoMdRose } from "react-icons/io"

export const DropdownContainer = styled(Dropdown)`
    ${smallerThan(breakpoints.medium)} {
        width: 15%;
        margin: 0 7px;
    };
    ${widerThan(breakpoints.medium)} {
        width: 20%;
        margin: 0 7px;
    };
    ${widerThan(breakpoints.large)} {
        width: 20%;
        margin: 0 16px;
    };
`

export const FeedSpan = styled.span`
    ${smallerThan(breakpoints.ExtraLarge)} {display: none;};
    ${widerThan(breakpoints.ExtraLarge)} {display: inline-block;};
    text-transform: capitalize;
`

export const CapitalizedSpan = styled.span`
    text-transform: capitalize;
`

export const DropdownToggle = styled(Dropdown.Toggle)`
    ${flex.horizontal};
    ${flex.spaceBetween};
    ${flex.centerVerticalH};
    width: 100%;
    padding: 0;
    margin-top: 7px;
    font-weight: 600;
    font-size: ${mixins.fontsizeMedium};

    :after {
        margin-top: 0px;
        border-top: .4em solid;
        border-right: .4em solid transparent;
        border-left: .4em solid transparent;
    }

    :focus {
        outline:0;
        box-shadow: none;
        border-radius: 4px 4px 4px 4px;
        border-color: rgb(237, 239, 241);
    }

    :hover {
        border-radius: 4px 4px 4px 4px;
        border-color: rgb(237, 239, 241);
    }    
`

export const DropdownHeader = styled(Dropdown.Header)`
    font-size: ${mixins.fontsizeSmall}
`



// icons
const iconStyle = `
    color: ${mixins.colorPrimary};
    padding-right: .25rem;
    font-size: 1.5rem
`

export const IconTrendingUp = styled(IoMdTrendingUp)`
    ${iconStyle}
`

export const IconPodium = styled(IoIosPodium)`
    ${iconStyle}
`

export const IconCreate = styled(IoIosCreate)`
    ${iconStyle}
`

export const IconRadioButtonOn = styled(IoIosRadioButtonOn)`
    color: ${mixins.colorWarning};
    padding-right: .25rem;
    font-size: 1.5rem
`

export const IconRose = styled(IoMdRose)`
    ${iconStyle}
`