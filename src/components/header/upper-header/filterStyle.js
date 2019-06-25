import styled from 'styled-components'
import { Nav } from 'react-bootstrap'

import { breakpoints, smallerThan, widerThan } from '../../../styles/responsive'

// import icons
import { IoMdTrendingUp, IoIosPodium, IoIosCreate } from "react-icons/io"

export const DivContainer = styled.div`
    border-right: 1px solid rgb(237, 239, 241);
    margin: 6px 0px 0 10px;
    height: 28px;
    ${smallerThan(breakpoints.large)} {display: none;};
    ${widerThan(breakpoints.large)} {display: flex;};
`

export const NavLink = styled(Nav.Link)`
    padding-left: .5rem;
    padding-right: .5rem;
    padding-top: 0;
`

const iconStyle = `
    padding-right: .25rem
    font-size: 1.3rem;
    color: black
`

export const IconTendingUp = styled(IoMdTrendingUp)`
    ${iconStyle}
`

export const IconPodium = styled(IoIosPodium)`
    ${iconStyle}
`

export const IconCreate = styled(IoIosCreate)`
    ${iconStyle}
`