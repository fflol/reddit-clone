import styled from 'styled-components'

import * as mixins from '../../styles/mixins' 
import { flex } from '../../styles/flex'

import { IoMdLogOut, IoIosImage } from "react-icons/io"



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

export const ImgThumbnail = styled.img`
    ${thumbnailStyle}
`

export const DivContainer = styled.div`
    ${flex.horizontal}
    background-color: ${mixins.colorComponentsBackground};
    overflow: hidden;
    border: 1px solid ${mixins.colorBorderLightGrey};
    cursor: pointer;
`

export const H2Title = styled.h2`
    color: ${mixins.colorBlack};
    overflow-wrap: break-word;
    font-size: ${mixins.fontsizeLarge};
    font-weight: 600;
    margin: 0 8px 0px 5px
`

export const ALink = styled.a`
    display: block;
    margin-top: .5rem;
    margin-left: .25rem;
`



// icons
export const IconImage = styled(IoIosImage)`
    ${thumbnailStyle}
`

export const IconLogOut = styled(IoMdLogOut)`
    color: ${mixins.colorPrimary}
`

