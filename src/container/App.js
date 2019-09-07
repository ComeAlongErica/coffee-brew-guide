import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from '../assets/ThemeProvider'
import { bakedTofu, seitan } from '../assets/utils'
import Header from '../components/header/Header'
import Recipes from '../components/Recipes'
import Modal from '../components/Modal'
import RecipeModal from '../components/parts/RecipeModal'
import LogIn from '../components/parts/LogInModal'

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
      loggedIn: false,
      displayData: undefined,
      searchData: undefined,
      theme: false,
      firstLoad: true,
      modalFirstRender: false,
      displayModal: false,
      modalData: null,
      showRecipeModal: false
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
    let searchQuery = query || 'chickpeas'
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
      data && this.setState({ searchData: { query: search, data: data.hits } })
    })
  }

  handleToggleTheme = () => {
    this.setState({ theme: !this.state.theme })
  }

  handleDisplayModal = (data, modalShow) => {
    this.setState({
      modalFirstRender: true,
      displayModal: true,
      modalData: data,
      showRecipeModal: modalShow === 'recipe',
      showLogIn: modalShow === 'login'
    })
  }

  handleCloseModal = closeModal => {
    if (closeModal) {
      this.setState({ displayModal: false, showRecipeModal: false })
    }
  }

  handleUserModal = () => {
    if (!this.state.loggedIn) {
      this.handleDisplayModal(null, 'login')
    } else {
      this.handleUserLogIn()
    }
  }

  handleUserLogIn = () => {
    this.setState({ loggedIn: !this.state.loggedIn })
  }

  render () {
    let displayTheme = this.state.theme ? darkTheme : lightTheme
    let displayCats = [this.state.searchData, this.state.displayData, bakedTofu, seitan]
    return (
      <ThemeProvider theme={displayTheme}>
        <AppContainer className={'appContainer'}>
          <Header
            toggleTheme={this.handleToggleTheme}
            handleSearchQuery={this.handleSearchQuery}
            loggedIn={this.state.loggedIn}
            handleUser={this.handleUserModal}
          />
          {displayCats.map((cat, idx) => {
            let scrollDirection = idx % 2 === 0
            let card = null
            if (idx === 0 && cat) {
              card = (
                <Recipes
                  key={idx}
                  index={idx}
                  query={cat.query}
                  recipes={cat.data}
                  handleDisplayModal={this.handleDisplayModal}
                  scrollDirection={scrollDirection}
                  expand
                />
              )
            } else if (cat || idx === 1) {
              card = (
                <Recipes
                  key={idx}
                  index={idx}
                  recipes={cat}
                  handleDisplayModal={this.handleDisplayModal}
                  scrollDirection={scrollDirection}
                />
              )
            }
            return card
          })}
          {this.state.modalFirstRender && (
            <Modal displayModal={this.state.displayModal} handleCloseModal={this.handleCloseModal}>
              {this.state.showRecipeModal && <RecipeModal modalData={this.state.modalData} />}
              {this.state.showLogIn && (
                <LogIn handleUserLogIn={this.handleUserLogIn} handleCloseModal={this.handleCloseModal} />
              )}
            </Modal>
          )}
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default App
