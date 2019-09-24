import React from 'react'

import { CardContainer, CardText, ImageCard } from '../../assets/styles'

const Card = props => {
  const { recipe, loader, handleDisplayModal, expand } = props

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
        <CardContainer
          onClick={() => handleDisplayModal(recipe, 'recipe')}
          expand={expand}>
          <ImageCard image={recipe.image} expand={expand}  />
          <CardText expand={expand}>
            <h3>{recipe.label}</h3>
            <p>{recipe.ingredientLines}</p>
            <p className={'cals'}>Calories: {Math.ceil(recipe.calories / recipe.yield)}</p>
          </CardText>
        </CardContainer>
      )}
    </>
  )
}

export default Card
