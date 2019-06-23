import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'

import * as mixins from '../../../styles/mixins'
import { breakpoints, smallerThan, widerThan } from '../../../styles/responsive'
import { flex } from '../../../styles/flex'

import {
    IoMdPerson,
    IoIosMoon,
    IoIosRadioButtonOn,
    IoMdRose,
    IoMdHelpCircleOutline,
    IoMdLogOut,
    IoIosLogIn
} from "react-icons/io"




export const DropdownToggle = styled(Dropdown.Toggle)`
    ${flex.horizontal};
    ${flex.centerHorizontalH};
    ${smallerThan(breakpoints.medium)} {
        width: 40px;
        margin: 7px 0 0 0px;
    };
    ${widerThan(breakpoints.medium)} {
        width: 70px;
        margin: 7px 0 0 10px;
    };
    align-items: center;
    height: 28px;
    padding: 0;
    font-size: 14px;

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

export const DropdownMenu = styled(Dropdown.Menu)`
    font-size: ${mixins.fontsizeMedium}
`          

export const DropdownHeader = styled(Dropdown.Header)`
    font-size: ${mixins.fontsizeSmall};
    font-weight: 600;
`

export const DropdownItemFlex = styled(Dropdown.Item)`
    ${flex.horizontal}; 
`

export const Para = styled.p`
    ${mixins.fontsizeSMedium};
    margin-top: .25rem;
`



// styled icons
const iconStyles = `
    color: ${mixins.colorSecondary};
    height: 1rem;
    width: 1rem;
`


export const IconPerson = styled(IoMdPerson)`
    ${iconStyles}
    margin-top: 3px;
`

export const IconMoon = styled(IoIosMoon)`
    ${iconStyles}
    margin-right: .5rem; 
`

export const IconRadioButtonOn = styled(IoIosRadioButtonOn)`
    ${iconStyles}
    margin-right: .5rem; 
`

export const IconRose = styled(IoMdRose)`
    ${iconStyles}
    margin-right: .5rem; 
`

export const IconHelpCircle = styled(IoMdHelpCircleOutline)`
    ${iconStyles}
    margin-right: .5rem; 
`

export const IconLogOut = styled(IoMdLogOut)`
    ${iconStyles}
    margin-right: .5rem; 
`

export const IconLogIn = styled(IoIosLogIn)`
    ${iconStyles}
    margin-right: .5rem; 
`