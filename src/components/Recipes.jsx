import React, { useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'

import Card from './parts/Card'

const CardScrollContainer = styled.div`
  margin: 40px 0;
  min-height: 200px;
  min-width: 100%;
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`
const Recipes = props => {
  const { getRecipeData } = props
  const [recipes, setRecipes] = useState()
  const [drinks, setDrinks] = useState()

  useEffect(() => {
    getRecipeData('espresso').then(data => data && setRecipes(data.hits))
    getRecipeData('frappuccino').then(data => data && setDrinks(data.hits))
  }, [])

  console.log(drinks)

  return (
    <Fragment>
      <CardScrollContainer>
        {recipes &&
          recipes.map((recipe, idx) => {
            return <Card recipe={recipe} key={idx} />
          })}
      </CardScrollContainer>
      <CardScrollContainer>
        {drinks &&
          drinks.map((recipe, idx) => {
            return <Card recipe={recipe} key={idx} />
          })}
      </CardScrollContainer>
      <CardScrollContainer>
        {recipes &&
          recipes.reverse().map((recipe, idx) => {
            return <Card recipe={recipe} key={idx} />
          })}
      </CardScrollContainer>
      <CardScrollContainer>
        {drinks &&
          drinks.reverse().map((recipe, idx) => {
            return <Card recipe={recipe} key={idx} />
          })}
      </CardScrollContainer>
    </Fragment>
  )
}

export default Recipes
