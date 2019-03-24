import React from 'react';
import styled from 'styled-components'

import SearchIcon from '../../../assets/SearchSVG'

const SearchContainer = styled.div`
flex-grow: 1;
margin-right: 20px;
position: relative;
`
const SearchInput = styled.input`
outline: none;
width: 100%;
height: 55px;
background-color: white;
border: none;
box-shadow: ${props => props.theme.dropShadow};
border-radius: 30px 0 30px 0;
font-size: 16px;
color: ${props => props.theme.backgroundSeconary};
padding-left: 50px;
transition: all .3s ease;
:focus {
  color: ${props => props.theme.fontMain};
}
`

const SearchBar = props => {
  return (
    <SearchContainer>
      <SearchIcon position={'absolute'}
        top={18}
        left={20}
        width={22}
        height={22}
        stroke={'#B6BABD'} />
      <SearchInput value={'Search'} />
    </SearchContainer>
  )
}

export default SearchBar;
