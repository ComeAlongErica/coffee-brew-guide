import React from 'react'
import styled from 'styled-components'

import SearchBar from './parts/Search'
import User from './parts/User'
import Save from './parts/Save'
import ToggleSwitch from './parts/ToggleSwitch'

const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const ButtonsContainer = styled.div`
  display: flex;
  margin-right: 80px;
`


const Header = props => {
  const { toggleTheme, handleSearchQuery, loggedIn, handleUser } = props

  return (
    <HeaderContainer>
      <SearchBar handleSearchQuery={handleSearchQuery} />
      <ButtonsContainer>
        <User loggedIn={loggedIn} handleClick={handleUser} />
        <Save />
        <ToggleSwitch toggleTheme={toggleTheme}/>
      </ButtonsContainer>
    </HeaderContainer>
  )
}

export default Header
