import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from '../assets/ThemeProvider'
import { espresso, frappuccino } from '../assets/utils'
import Header from '../components/header/Header'
import Recipes from '../components/Recipes'
import Modal from '../components/Modal'

const AppContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.background};
  position: relative;
  padding-bottom: 50px;
`

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      displayData: undefined,
      searchData: undefined,
      theme: true,
      firstLoad: true,
      modalFirstRender: false,
      displayModal: false,
      modalData: null
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

  handleSearchQuery = search => {
    this.getRecipeData(search).then(data => {
      data && this.setState({ searchData: data.hits })
    })
  }

  handleToggleTheme = () => {
    this.setState({ theme: !this.state.theme })
  }

  handleDisplayModal = data => {
    this.setState({ modalFirstRender: true, displayModal: true, modalData: data })
  }

  handleCloseModal = closeModal => {
    if (closeModal) {
      this.setState({ displayModal: false })
    }
  }

  render () {
    let displayTheme = this.state.theme ? lightTheme : darkTheme
    let displayCats = [this.state.searchData, this.state.displayData, espresso, frappuccino]
    return (
      <ThemeProvider theme={displayTheme}>
        <AppContainer className={'appContainer'}>
          <Header toggleTheme={this.handleToggleTheme} handleSearchQuery={this.handleSearchQuery} />
          {displayCats.map((cat, idx) => {
            let scrollDirection = idx % 2 === 0
            let card = null
            if (idx === 0 && cat) {
              card = (
                <Recipes
                  key={idx}
                  recipes={cat}
                  handleDisplayModal={this.handleDisplayModal}
                  scrollDirection={scrollDirection}
                  expand
                />
              )
            } else if (cat) {
              card = (
                <Recipes
                  key={idx}
                  recipes={cat}
                  handleDisplayModal={this.handleDisplayModal}
                  scrollDirection={scrollDirection}
                />
              )
            }
            return card
          })}
          {this.state.modalFirstRender && (
            <Modal
              modalData={this.state.modalData}
              displayModal={this.state.displayModal}
              handleCloseModal={this.handleCloseModal}
            />
          )}
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default App
