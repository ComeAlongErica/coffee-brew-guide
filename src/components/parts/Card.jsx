import React from 'react'

import { CardContainer, CardText, ImageCard } from '../../assets/styles'
import HeartSVG from '../../assets/HeartSVG'

const Card = props => {
  const { recipe, loader, handleDisplayModal, handleFavorite, favorited, expand } = props
  return (
    <>
      {loader && (
        <CardContainer>
          <div className={'image shimmer-block '} />
          <CardText>
            <div className={'med shimmer-block '} />
            <div className={'long shimmer-block '} />
            <div className={'long shimmer-block '} />
            <div className={'long shimmer-block '} />
            <div className={'short shimmer-block '} />
          </CardText>
        </CardContainer>
      )}
      {!loader && (
        <div style={{ position: 'relative' }}>
          <CardContainer onClick={() => handleDisplayModal(recipe, 'recipe')} expand={expand}>
            <ImageCard image={recipe.image} expand={expand} />
            <CardText expand={expand}>
              <h3>{recipe.label}</h3>
              <p>{recipe.ingredientLines}</p>
              <p className={'cals'}>Calories: {Math.ceil(recipe.calories / recipe.yield)}</p>
            </CardText>
          </CardContainer>
          <HeartSVG
            position={'absolute'}
            bottom={20}
            right={20}
            handleClick={() => handleFavorite(recipe)}
            favorited={favorited}
          />
        </div>
      )}
    </>
  )
}

export default Card
