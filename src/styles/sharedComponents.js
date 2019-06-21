import styled from 'styled-components';
import { flex } from './flex';


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