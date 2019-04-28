import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Card from './parts/Card'

const CardScrollContainer = styled.div`
  margin: 50px 0;
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

  useEffect(() => {
    getRecipeData('espresso').then(data => setRecipes(data.hits))
  }, [])

  console.log(recipes)

  return (
    <CardScrollContainer>
      {recipes &&
        recipes.map((recipe, idx) => {
          return <Card recipe={recipe} key={idx} />
        })}
    </CardScrollContainer>
  )
}

export default Recipes
