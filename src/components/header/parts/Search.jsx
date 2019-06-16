import React, { useState, useEffect } from 'react'
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
  width: 100%;
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
  const [typingTimeout, setTypingTimeout] = useState(0)
  let timeout = null
  
  useEffect(
    () => {
      clearTimeout(timeout)

      // Make a new timeout set to go off in 800ms
      timeout = setTimeout(function () {
        console.log('Input Value:')
      }, 500)
    },
    [typingTimeout]
  )

  const createSearch = event => {
    let search = event.target.value
    console.log(search)
    setTypingTimeout(3)
  }
  return (
    <SearchContainer>
      <SearchIcon position={'absolute'} top={18} left={20} width={22} height={22} stroke={'#B6BABD'} />
      <SearchInput onChange={e => createSearch(e)} placeholder={'Search'} />
    </SearchContainer>
  )
}

export default SearchBar
