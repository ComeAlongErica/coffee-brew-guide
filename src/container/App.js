import React, { Component } from 'react'
import styled from 'styled-components'

import Search from '../components/Search'
import User from '../components/User'
import Save from '../components/Save'
import Recipes from '../components/Recipes'
import Blog from '../components/Blog'

const AppContainer = styled.div`
`


class App extends Component {
  render() {
    return (
      <AppContainer className={'appContainer'}>
        <Search />
        <User />
        <Save />
        <Recipes />
        <Blog />
      </AppContainer>
    );
  }
}

export default App;
