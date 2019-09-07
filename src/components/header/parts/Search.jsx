import React from 'react'
import styled from 'styled-components'

import SearchIcon from '../../../assets/SearchSVG'

const SearchContainer = styled.div`
  margin-right: 60px;
  margin-bottom: 50px;
  position: relative;
  flex-grow: 1;
`
const SearchInput = styled.input`
  outline: none;
  width: calc(100% - 80px);
  height: 55px;
  background-color: ${props => props.theme.backgroundSecondary};
  border: none;
  box-shadow: ${props => props.theme.dropShadow};
  border-radius: 30px 0 30px 30px;
  font-size: 16px;
  color: ${props => props.theme.backgroundSecondary};
  padding-left: 50px;
  transition: all 0.3s ease;
  :focus {
    color: ${props => props.theme.fontMain};
  }
`

const SearchBar = props => {
  const { handleSearchQuery } = props

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      let value = event.target.value
      handleSearchQuery(value)
      setTimeout(() => {
        document.getElementById('search-input').value = ''
      }, 5000)
    }
  }

  return (
    <SearchContainer>
      <SearchIcon position={'absolute'} top={18} left={20} width={22} height={22} stroke={'#B6BABD'} />
      <SearchInput id={'search-input'} onKeyPress={e => handleKeyPress(e)} placeholder={'Search'} />
    </SearchContainer>
  )
}

export default SearchBar
