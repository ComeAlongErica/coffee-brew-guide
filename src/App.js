import React, { Component } from 'react'
import Search from './components/Search'
import Save from './components/Save'
import Recipes from './components/Recipes'
import Blog from './components/Blog'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Search />
      <Save />
      <Recipes />
      <Blog />
      </div>
    );
  }
}

export default App;
