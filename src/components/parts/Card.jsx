import React from 'react'

const Card = props => {
  const { recipe } = props
  return (
    <div>
      <h3>{recipe.recipe.label}</h3>
      <img src={recipe.recipe.image} />
      <p>{recipe.recipe.ingredientLines}</p>
      <p>Calories: {Math.ceil(recipe.recipe.calories / recipe.recipe.yield)}</p>
    </div>
  )
}

export default Card
