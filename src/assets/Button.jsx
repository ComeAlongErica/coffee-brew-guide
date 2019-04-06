import React from 'react'
import styled from 'styled-components'

const GlobalButton = styled.button`
padding: 0 20px;
height: 35px;
margin: 10px;
background-color: white;
color: ${props => props.theme.fontSecondary};
font-weight: bold;
font-size: 12px;
box-shadow: ${props => props.theme.dropShadow};
border-radius: 30px;
:hover {
    box-shadow: ${props => props.theme.dropShadowHover};
}
`

const SearchSVG = props => {
    const { text, handleClick } = props
    return (
    <GlobalButton onClick={handleClick}>
        {text}
    </GlobalButton>)
}

export default SearchSVG