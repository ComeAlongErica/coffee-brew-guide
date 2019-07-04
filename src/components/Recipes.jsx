import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ArrowRightCircle, ArrowLeftCircle } from 'react-feather'

import Card from './parts/Card'

const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-areas: 'row';
`
const ContainerForStickArrows = styled.div`
  grid-area: row;
  min-width: 100vw;
  z-index: 5;
  pointer-events: none;
`
const CardScrollContainer = styled.div`
  grid-area: row;
  z-index: 5;
  margin: 5px 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 6px 0;
  overflow-x: auto;
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
  height: 223px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  pointer-events: auto;
  :hover {
    cursor: pointer;
  }
  ::after {
    content: '';
    float: clear;
  }
`
const RightArrow = styled(Arrow)`
  height: ${props => props.expand && '326px'};
  float: right;
  padding: 0 10px 0 50px;
  border-radius: 10px 0 0 10px;
  background-image: linear-gradient(
    to right,
    ${props => `
    ${props.theme.background + '00'},
    ${props.theme.background + '6B'},
    ${props.theme.background + 'E6'},
    ${props.theme.background}`}
  );
`
const LeftArrow = styled(Arrow)`
  height: ${props => props.expand && '326px'};
  float: left;
  border-radius: 10px 0 0 10px;
  padding: 0 50px 0 10px;
  background-image: linear-gradient(
    to left,
    ${props => `
    ${props.theme.background + '00'},
    ${props.theme.background + '6B'},
    ${props.theme.background + 'E6'},
    ${props.theme.background}`}
  );
`
const SearchResults = styled.h3`
  grid-area: row;
  opacity: 0.4;
  margin-top: -10px;
  margin-left: 16px;
`
const Recipes = props => {
  const { recipes, handleDisplayModal, scrollDirection, index, query, expand } = props
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

  const displayArrow = enter => {
    if (enter && scrollContainer) {
      let displayLeftPosition = !(scrollContainer.scrollLeft === 0)
      let displayRightPosition = !(scrollContainer.scrollLeft === scrollContainer.scrollWidth - window.innerWidth)
      setShowArrow({ left: displayLeftPosition, right: displayRightPosition })
    } else {
      setShowArrow({ left: false, right: false })
    }
  }
  const handleScroll = direction => {
    let halfWindowSize = window.innerWidth / 2
    let currentPosition = scrollContainer.scrollLeft
    scrollContainer.style.scrollBehavior = 'smooth'
    let scrollDistance

    if (direction) {
      scrollDistance = currentPosition + halfWindowSize
    } else {
      scrollDistance = currentPosition - halfWindowSize
    }

    scrollContainer.scrollLeft = scrollDistance
  }
  return (
    <Grid onMouseOver={() => displayArrow(true)} onMouseLeave={() => displayArrow(false)}>
      {expand && <SearchResults>Search results for {query}...</SearchResults>}
      <CardScrollContainer className={'card-scroll-container'} enterDirection={direction}>
        {recipes &&
          recipes.map((recipe, idx) => {
            return <Card recipe={recipe.recipe} key={idx} handleDisplayModal={handleDisplayModal} expand={expand} />
          })}
        {!recipes &&
          loaderCards.map((card, idx) => {
            return <Card key={idx} loader />
          })}
      </CardScrollContainer>
      <ContainerForStickArrows enterDirection={direction}>
        <LeftArrow
          className={'arrow'}
          onClick={() => handleScroll(false)}
          showArrow={showArrow.left}
          expand={expand}
          left>
          <ArrowLeftCircle height={50} width={50} color={'#f9bd35'} />
        </LeftArrow>
        <RightArrow
          className={'arrow'}
          onClick={() => handleScroll(true)}
          showArrow={showArrow.right}
          expand={expand}
          right>
          <ArrowRightCircle height={50} width={50} color={'#f9bd35'} />
        </RightArrow>
      </ContainerForStickArrows>
    </Grid>
  )
}

export default Recipes
