import React from 'react'
import styled from 'styled-components'

import SearchBar from './parts/Search'
import User from './parts/User'
import Save from './parts/Save'
import ToggleSwitch from './parts/ToggleSwitch'

const HeaderContainer = styled.div `
display: flex;
`


const Header = props => {

  return (
    <HeaderContainer>
      <SearchBar />
      <User />
      <Save />
      <ToggleSwitch />
    </HeaderContainer>
  )
}

export default Header
