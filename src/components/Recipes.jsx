import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ArrowRightCircle, ArrowLeftCircle } from 'react-feather'

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
  transition: 0.3s ease-in-out;
  opacity: ${props => (props.showArrow ? 1 : 0)};
  min-height: 200px;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  :hover {
    cursor: pointer;
  }
  ${props =>
    props.right &&
    `
    right: 0;
    padding: 0 15px 0 50px;
    border-radius: 0 10px 10px 0;
    background-image: linear-gradient(
    to right,
    ${props.theme.background + '00'},
    ${props.theme.background + '6B'},
    ${props.theme.background + 'E6'},
    ${props.theme.background}
  );
  `}
  ${props =>
    props.left &&
    `
    position: fixed
    left: 0;
    padding: 0 50x 0 15px;
    border-radius: 10px 0 0 10px;
    background-image: linear-gradient(
    to left,
    ${props.theme.background + '00'},
    ${props.theme.background + '6B'},
    ${props.theme.background + 'E6'},
    ${props.theme.background}
  );
  `}
`
const Recipes = props => {
  const { recipes, handleDisplayModal, scrollDirection, index, expand } = props
  const [direction, setDirection] = useState(scrollDirection)
  const [showArrow, setShowArrow] = useState({ left: false, right: false })
  const loaderCards = [1, 2, 3, 4, 5]
  const scrollContainers = document.getElementsByClassName('card-scroll-container')
  let containerIdx = scrollContainers && scrollContainers.length === 4 ? index : index - 1
  const scrollContainer = scrollContainers && scrollContainers[containerIdx]

  useEffect(
    () => {
      setTimeout(() => {
        setDirection('center')
      }, 0)
    },
    [scrollDirection]
  )
  useEffect(
    () => {
      if (showArrow.right) {
        displayArrow(true)
      }
    },
    [showArrow]
  )

  const displayArrow = enter => {
    if (enter) {
      let displayLeftPosition = !(scrollContainer.scrollLeft === 0)
      let displayRightPosition = !(scrollContainer.scrollLeft === scrollContainer.scrollWidth)
      setShowArrow({ left: displayLeftPosition, right: displayRightPosition })
    } else {
      setShowArrow({ left: false, right: false })
    }
  }
  const handleScroll = () => {
    let halfWindowSize = window.innerWidth / 2
    let currentPosition = scrollContainer.scrollLeft
    let scrollDistance = currentPosition + halfWindowSize
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft = scrollDistance
  }
  return (
    <CardScrollContainer
      className={'card-scroll-container'}
      enterDirection={direction}
      onMouseEnter={() => displayArrow(true)}
      onMouseLeave={() => displayArrow(false)}>
      {recipes &&
        recipes.map((recipe, idx) => {
          return <Card recipe={recipe.recipe} key={idx} handleDisplayModal={handleDisplayModal} expand={expand} />
        })}
      {!recipes &&
        loaderCards.map((card, idx) => {
          return <Card key={idx} loader />
        })}
      <Arrow className={'arrow'} onClick={handleScroll} showArrow={showArrow.right} right>
        <ArrowRightCircle height={50} width={50} color={'#f9bd35'} />
      </Arrow>
      <Arrow className={'arrow'} onClick={handleScroll} showArrow={showArrow.left} left>
        <ArrowLeftCircle height={50} width={50} color={'#f9bd35'} />
      </Arrow>
    </CardScrollContainer>
  )
}

export default Recipes
