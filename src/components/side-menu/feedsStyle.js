import styled from 'styled-components'
import {Button} from 'react-bootstrap'

import { RedditCard } from '../customComponents'
import { flex } from '../../styles/flex'

import background from '../../img/banner@2x.png'
import guyIcon from '../../img/snoo-home@2x.png'

export const CardContainer = styled(RedditCard)`
    margin-top: 0;
`

export const Landscape = styled.div`
    background: rgb(0, 121, 211) no-repeat scroll center center / cover;
    background-image: url(${background});
    height: 34px;
`

export const GuyContainer = styled.div`
    ${flex.horizontal}
    margin-top: -23px;
    padding: 12px;
`

export const GuyIcon = styled.div`
    background: rgba(0, 0, 0, 0) repeat scroll 0% 0% / 40px 68px;
    background-image: url(${guyIcon});
    display: inline-block;
    height: 68px;
    width: 40px;
`

export const H6Feeds = styled.h6`
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    display: inline-block;
    margin: 40px 0 0 10px;
`

export const PFeeds = styled.p`
    font-size: 15px;
    font-weight: 500;
    line-height: 21px;
    padding: 0 12px;
    margin: 0;
`

export const ButtonFeeds = styled(Button)`
    margin: 12px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 32px;
    text-transform: uppercase;
    padding: 0px 16px;
    width: calc(100% - 24px);
`