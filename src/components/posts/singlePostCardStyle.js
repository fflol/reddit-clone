import styled from 'styled-components'

import * as mixins from '../../styles/mixins' 
import { flex } from '../../styles/flex'

import { IoMdLogOut, IoIosImage } from "react-icons/io"



export const DivCardMedia = styled.div`
    margin: 10px 0 10px 5px;
    z-index: 5;
    position: relative;
`

export const ImgCardImg = styled.img`
    max-height: 512px;
    margin: 0px auto;
    max-width: 100%;
`

export const ImgCardThumbnail = styled.img`
    margin: 0px auto;
    border: 1px solid rgb(0, 121, 211);
    border-radius: 4px;
`

export const DivContainer = styled.div`
    ${flex.horizontal};
    background-color: ${mixins.colorComponentsBackground};
    overflow: hidden;
    border: 1px solid ${mixins.colorBorderLightGrey};
    border-radius: 4px;
    cursor: pointer;
    margin: 0px 0px 15px 0px;
    position: relative;

    :hover {
        border: 1px solid ${mixins.colorBorderDarkGrey};
    }

    :hover,
    :link,
    :visited,
    :link:active,
    :visited:active {
        color: inherit;
        text-decoration: none;
    }
`

export const SpanLinkWrapper = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
`

export const H2Title = styled.h2`
    color: ${mixins.colorBlack};
    overflow-wrap: break-word;
    font-size: ${mixins.fontsizeLarge};
    font-weight: 600;
    margin: 0 8px 0px 5px
`

export const DivSelfText = styled.div`
    margin-top: .5rem;
    margin-bottom: .5rem;
    margin-left: .25rem;
    max-height: 250px;
    overflow: hidden;
    mask-image: linear-gradient(180deg, #000 60%, transparent);
`

export const ALink = styled.a`
    display: block;
    margin-right: 10px 5px 10px 0;
    z-index: 5;
    position: relative;
`



// icons
const thumbnailStyle = `
    margin: 0px auto;
    border-radius: 3px;
    height: 60px;
    min-width: 80px;
    max-block-size: 80px;
    font-size: 50px;
    background-color: ${mixins.colorLightGrayBackground};
    color: ${mixins.colorSecondary};
`

export const IconImage = styled(IoIosImage)`
    ${thumbnailStyle}
`

export const IconLogOut = styled(IoMdLogOut)`
    color: ${mixins.colorPrimary}
`