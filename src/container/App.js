import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import lightTheme from './ThemeProvider.js'
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
      <ThemeProvider theme={lightTheme}>
        <AppContainer className={'appContainer'}>
          <Search />
          <User />
          <Save />
          <Recipes />
          <Blog />
        </AppContainer>
      </ThemeProvider>

    );
  }
}

export default App;
