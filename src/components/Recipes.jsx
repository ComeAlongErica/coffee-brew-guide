import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Card from './parts/Card'

const CardScrollContainer = styled.div`
  position: relative;
  margin: 5px 0 0;
  min-width: 100%;
  display: flex;
  overflow-x: auto;
  padding: 6px 0;
  transition: 0.4s ease-in-out;
  transform: translateX(
    ${props => (props.enterDirection ? (props.enterDirection === 'center' ? '' : '100vw') : '-100vw')}
  );
  ::-webkit-scrollbar {
    display: none;
  }
`

const Arrow = styled.div`
  width: 100px;
  height: 50%;
  position: absolute;
  right: 20px;
  background-color: grey;
  :hover {
    cursor: pointer;
  }
`
const Recipes = props => {
  const { recipes, handleDisplayModal, scrollDirection, expand } = props
  const [direction, setDirection] = useState(scrollDirection)
  const [showArrow, setShowArrow] = useState(false)
  const loaderCards = [1, 2, 3, 4, 5]
  useEffect(
    () => {
      setTimeout(() => {
        setDirection('center')
      }, 0)
    },
    [scrollDirection]
  )
  const displayArrow = () => setShowArrow(!showArrow)
  return (
    <CardScrollContainer enterDirection={direction} onMouseEnter={displayArrow} onMouseLeave={displayArrow}>
      {recipes &&
        recipes.map((recipe, idx) => {
          return <Card recipe={recipe.recipe} key={idx} handleDisplayModal={handleDisplayModal} expand={expand} />
        })}
      {!recipes &&
        loaderCards.map((card, idx) => {
          return <Card key={idx} loader />
        })}
     {showArrow && <Arrow right />}
    </CardScrollContainer>
  )
}

export default Recipes
