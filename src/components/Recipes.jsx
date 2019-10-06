import React, { useState, useEffect } from 'react'

import Card from './parts/Card'
import ScrollNavigation from './parts/ScrollNavigation'
import { Grid, CardScrollContainer, SearchResults } from '../assets/styles.js'

const Recipes = props => {
  const { recipes, handleDisplayModal, scrollDirection, index, query, expand, handleFavorite, favorites } = props
  const [direction, setDirection] = useState(scrollDirection)
  const [showArrow, setShowArrow] = useState({ left: false, right: false })
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
          [1, 2, 3, 4, 5].map(idx => {
            return <Card key={idx} loader />
          })}
      </CardScrollContainer>
      <ScrollNavigation enterDirection={direction} expand={expand} showArrow={showArrow} index={index} />
    </Grid>
  )
}

export default Recipes
