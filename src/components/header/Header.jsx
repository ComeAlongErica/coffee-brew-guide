import React from 'react'
import styled from 'styled-components'

import Search from './parts/Search'
import User from './parts/User'
import Save from './parts/Save'
import ToggleSwitch from './parts/ToggleSwitch'

const HeaderContainer = styled.div `
display: flex;
`


const Header = props => {

  return (
    <HeaderContainer>
      <Search />
      <User />
      <Save />
      <ToggleSwitch />
    </HeaderContainer>
  )
}

export default Header
