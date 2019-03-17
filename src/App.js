import React, { Component } from 'react'
import styled from 'styled-styled-components'

import Search from './components/Search'
import User from './components/User'
import Save from './components/Save'
import Recipes from './components/Recipes'
import Blog from './components/Blog'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Search />
      <User />
      <Save />
      <Recipes />
      <Blog />
      </div>
    );
  }
}

export default App;
