import styled from 'styled-components'
import { Form } from 'react-bootstrap'

import * as mixins from '../../../styles/mixins'
import { HorizontalContainer } from '../../../styles/sharedComponents'


// import icons
import { IoMdSearch } from "react-icons/io"

export const SearchContainer = styled(HorizontalContainer)`
    flex-grow: 1;
    width: auto;
    background-color: ${mixins.colorLightGrayBackground};
    border-radius: 4px;
    border: 1px solid ${mixins.colorBorderLightGrey};
    color: ${mixins.colorBorderLightGrey};
    height: 36px;
    padding: 0 10px;
    margin: 5px 0 0 0;

    &:hover,
    &:focus {
        background-color: ${mixins.colorComponentsBackground};
    }
`

export const SearchIcon = styled(IoMdSearch)`
    width: 1.2rem;
    height: 1.2rem;
    color: rgb(135, 138, 140);
    margin: 6px 0 0 10px;
    vertical-align: middle;
`

export const SearchForm = styled(Form).attrs((props) => ({ inline: true }))`width: 100%`

export const SearchInput = styled.input`
    background-color: inherit;
    border: 0px;
    width: 100%;
`