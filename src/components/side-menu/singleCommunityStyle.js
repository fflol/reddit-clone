import styled from 'styled-components'
import { Button } from 'react-bootstrap'

import {flex} from '../../styles/flex'
import * as mixins from '../../styles/mixins'



export const DivContainer = styled.div`
    ${flex.horizontal};
    ${flex.centerHorizontal};
    margin-top: .5rem;
    margin-bottom: .5rem;
`

export const ImgIcon = styled.img`
    width: 32px;
    height: 32px
`

export const DivText = styled.div`
    margin-left: 5px;
    min-width: 130px;
`

export const ButtonSingleCommunity = styled(Button)`
    min-width: 104px;
    height: 28px;
    font-size: ${mixins.fontsizeSMedium};
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 24px;
    text-transform: uppercase;
    padding: 0;
`