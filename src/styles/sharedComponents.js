import styled from 'styled-components';
import { flex } from './flex';
import {breakpoints, smallerThan, widerThan} from './responsive'

export const Container = styled.div`
    ${({ margin }) => (margin && `margin: ${margin}`)};
    ${({ padding }) => (padding && `padding: ${padding}`)};
`

// flex container
export const HorizontalContainer = styled.div`
    ${flex.horizontal};
    ${({ center }) => (center && flex.centerHorizontal)};
    ${({ centerV }) => (centerV && flex.centerHorizontalV)};
    ${({ centerH }) => (centerH && flex.centerHorizontalH)};
    ${({ margin }) => (margin && `margin: ${margin}`)};
    ${({ padding }) => (padding && `padding: ${padding}`)};
`

export const VerticalContainer = styled.div`
    ${flex.vertical};
    ${({ center }) => (center && flex.centerVertical)};
    ${({ centerV }) => (centerV && flex.centerVerticalV)};
    ${({ centerH }) => (centerH && flex.centerVerticalH)};
    ${({ margin }) => (margin && `margin: ${margin}`)};
    ${({ padding }) => (padding && `padding: ${padding}`)};
`

// side menu
export const SideMenuContainer = styled.div`
    width: 312px;
    margin: 0px 0 0 24px;
    ${smallerThan(breakpoints.medium)} {display: none};
    ${widerThan(breakpoints.medium)} {display: flex};
`