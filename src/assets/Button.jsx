import React from 'react'
import styled from 'styled-components'

const GlobalButton = styled.button`
padding: 20px;
margin: 10px;
background-color: white;
color: ${props => props.theme.fontMain};
box-shadow: ${props => props.theme.dropShadow};
`

const SearchSVG = props => {
    const { text, handleClick } = props
    return (
    <GlobalButton onClick={handleClick}>
        {text}
    </GlobalButton>)
}

export default SearchSVG