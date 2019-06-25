import styled from 'styled-components'

export const DivContainer = styled.div`
    margin-top: 1rem;
    text-align: center;
`

const footerTextStyle = `
    color: black;
    font-size: 12px;
    font-weight: 550;
    line-height: 16px;
    text-decoration: none;
    text-transform: capitalize;

    :hover {
        color: black;
        text-decoration: none;
    }
`

export const ALink = styled.a`
    ${footerTextStyle}
`

export const SpanFooter = styled.span`
    ${footerTextStyle}
`