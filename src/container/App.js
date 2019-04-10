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
  constructor(props) {
    super(props)
    this.state = {
      theme: true,
      modal: [],
    }
  }

  getRecipeData = (query) => {
    // let url = `https://api.edamam.com/search?q=${query}`
    // for quick testing in localhost 
    //open -a Google\ Chrome --args --disable-web-security --user-data-dir
    let url = 'https://api.edamam.com/search?q=tofu&app_id=c0958c7a&app_key=b4e42092e83e921feb2a01415d4496f5'
      console.log(url)
    fetch(url).then(res => res.json())
      .then((result) => {
        console.log(result)
      })
      .catch(error => console.error(error))
  }

  handleToggleTheme = () => {
    this.setState({ theme: !this.state.theme })
  }

  render() {
    this.getRecipeData()
    let displayTheme = this.state.theme ? lightTheme : darkTheme
    return (
      <ThemeProvider theme={displayTheme}>
        <AppContainer className={'appContainer'}>
          <Header toggleTheme={this.handleToggleTheme} />
          {/* <Recipes />
          <Blog /> */}
        </AppContainer>
      </ThemeProvider>

    )
  }
}

export default App;
