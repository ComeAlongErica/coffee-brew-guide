import React, { useState, useEffect } from 'react'
import { ArrowRightCircle, ArrowLeftCircle } from 'react-feather'

import Card from './parts/Card'
import {
  Grid,
  ContainerForStickyArrows,
  CardScrollContainer,
  RightArrow,
  LeftArrow,
  SearchResults
} from '../assets/styles.js'

const Recipes = props => {
  const { recipes, handleDisplayModal, scrollDirection, index, query, expand, handleFavorite, favorites } = props
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
            let favorited = favorites.find(fav => fav.label === recipe.recipe.label)
            return (
              <Card
                recipe={recipe.recipe}
                favorited={favorited}
                key={idx}
                handleDisplayModal={handleDisplayModal}
                handleFavorite={handleFavorite}
                expand={expand}
              />
            )
          })}
        {!recipes &&
          loaderCards.map((card, idx) => {
            return <Card key={idx} loader />
          })}
      </CardScrollContainer>
      <ContainerForStickyArrows enterDirection={direction}>
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
      </ContainerForStickyArrows>
    </Grid>
  )
}

export default Recipes
