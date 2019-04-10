import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from '../assets/ThemeProvider'
import Header from '../components/header/Header'
// import Recipes from '../components/Recipes'
// import Blog from '../components/Blog'

const AppContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: ${props => props.theme.background};
`


class App extends Component {
  state = {
    theme: true
  }

  handleToggleTheme = () => {
    this.setState({ theme: !this.state.theme})
  }

  render() {
    let displayTheme = this.state.theme ? lightTheme : darkTheme
    return (
      <ThemeProvider theme={displayTheme}>
        <AppContainer className={'appContainer'}>
          <Header toggleTheme={this.handleToggleTheme}/>
          {/* <Recipes />
          <Blog /> */}
        </AppContainer>
      </ThemeProvider>

    );
  }
}

export default App;
