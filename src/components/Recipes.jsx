import React from 'react'
import styled from 'styled-components'

import Card from './parts/Card'

const CardScrollContainer = styled.div`
  margin: 5px 0 0;
  min-height: 200px;
  min-width: 100%;
  display: flex;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`
const Recipes = props => {
  const { recipes } = props
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
