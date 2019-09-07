import React from 'react'
import styled from 'styled-components'

const GlobalButton = styled.button`
padding: 0 20px;
height: 35px;
min-width: 100px;
margin: 10px;
background-color: ${props => props.theme.backgroundSecondary};
color: ${props => props.theme.fontSecondary};
font-weight: bold;
font-size: 12px;
box-shadow: ${props => props.theme.dropShadow};
border: 0px transparent;
border-radius: 30px;
outline: none;
transition: .3s ease-in-out;
:focus {
  border: 2px solid;
}
:hover {
    box-shadow: ${props => props.theme.dropShadowHover};
}
${props => props.styling && props.styling}
`

const Button = props => {
    const { text, handleClick, styling } = props
    return (
    <GlobalButton onClick={handleClick} styling={styling}>
        {text}
    </GlobalButton>)
}

export default Button