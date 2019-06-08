import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from '../assets/ThemeProvider'
import { espresso, frappuccino } from '../assets/utils'
import Header from '../components/header/Header'
import Recipes from '../components/Recipes'
// import Blog from '../components/Blog'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.background};
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayData: undefined,
      theme: true,
      firstLoad: true,
      modal: []
    }
  }

  componentDidUpdate () {
    if (this.state.displayData === undefined) {
      this.getRecipeData().then(data => {
        data && this.setState({ displayData: data.hits })
      })
    }
  }

  componentDidMount () {
    if (this.state.firstLoad) {
      this.getRecipeData().then(data => {
        data && this.setState({ displayData: data.hits })
        this.state.firstLoad && this.setState({ firstLoad: false })
      })
    }
  }

  getRecipeData = query => {
    let searchQuery = query || 'latte'
    let url = `https://api.edamam.com/search?q=${searchQuery}&app_id=c0958c7a&app_key=b4e42092e83e921feb2a01415d4496f5`

    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(result => result)
      .catch(error => console.error(error))
  }

  handleToggleTheme = () => {
    this.setState({ theme: !this.state.theme })
  }

  render () {
    let displayTheme = this.state.theme ? lightTheme : darkTheme
    return (
      <ThemeProvider theme={displayTheme}>
        <AppContainer className={'appContainer'}>
          <Header toggleTheme={this.handleToggleTheme} />
          <Recipes recipes={this.state.displayData} />
          <Recipes recipes={espresso} />
          <Recipes recipes={frappuccino} />
          {/* <Blog /> */}
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default App
