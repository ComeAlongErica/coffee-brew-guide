import React from 'react'
import styled from 'styled-components'

const SearchIcon = styled.svg`
position: ${props => props.position || 'relative'};
width: ${props => props.width || '24'}px;
height: ${props => props.height || '24'}px;
stroke: ${props => props.stroke || props.theme.backgroundSecondary};
top: ${props => props.top || ''}px;
left: ${props => props.left || ''}px;
`

const SearchSVG = props => {
    const { position, width, height, top, left, stroke } = props
    return (
    <SearchIcon 
    position={position}
    top={top}
    left={left}
    width={width} 
    height={height}
    viewBox="0 0 24 24" 
    fill={'none'} 
    stroke={stroke} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="feather-search">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65">
        </line>
    </SearchIcon>)
}

export default SearchSVG