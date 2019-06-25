import styled from 'styled-components'
import { FormControl } from 'react-bootstrap'

import * as mixins from '../styles/mixins'


export const Container = styled.div`
    font-size: ${mixins.fontsizeMedium};
    width: 100%;
`

export const Form = styled(FormControl)`
    margin-left: 1rem;  
    font-size: ${mixins.fontsizeMedium};
    width: calc(100% - 40px);

    :focus {
        box-shadow: none;
    }
`

export const Ulist = styled.ul`
    padding-left: 0;
    list-style: none;
`

export const Card = styled.div`
    background-color: rgba(255, 255, 255);
    overflow: hidden;
    border: 1px solid rgb(204, 204, 204);
    border-radius: 4px;
    margin: 15px 0px 0 0;
`