import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Card from './parts/Card'

const CardScrollContainer = styled.div`
  margin: 5px 0 0;
  min-height: 200px;
  min-width: 100%;
  display: flex;
  overflow-x: auto;
  transition: 1s ease-in-out;
  transform: translateX(${props => (props.enterDirection ? (props.enterDirection === 'center' ? '' : '100vw') : '-100vw')});
  ::-webkit-scrollbar {
    display: none;
  }
`
const Recipes = props => {
  const { recipes, handleDisplayModal, scrollDirection, expand } = props
  const [direction, setDirection] = useState(scrollDirection)
  let loaderCards = [1, 2, 3, 4, 5]
  useEffect(
    () => {
      setTimeout(() => {
        setDirection('center')
      }, 0)
    },
    [scrollDirection]
  )
  return (
    <CardScrollContainer enterDirection={direction}>
      {recipes &&
        recipes.map((recipe, idx) => {
          return <Card recipe={recipe.recipe} key={idx} handleDisplayModal={handleDisplayModal} expand={expand}/>
        })}
      {!recipes &&
        loaderCards.map((card, idx) => {
          return <Card key={idx} />
        })}
    </CardScrollContainer>
  )
}

export default Recipes
