import React, { useState, useEffect, Fragment } from 'react'

const Recipes = props => {
  const { getRecipeData } = props
  const [recipes, setRecipes] = useState()

  useEffect(() => {
    getRecipeData('espresso').then(data => setRecipes(data.hits))
  }, [])

  console.log(recipes)

  return (
    <Fragment>
      {recipes && recipes.map((recipe, idx) => {
        return <div key={idx}>
          <h3>{recipe.recipe.label}</h3>
          <img src={recipe.recipe.image} />
          <p>{recipe.recipe.ingredientLines}</p>
          <p>Calories: {recipe.recipe.calories / recipe.recipe.yield}</p>
        </div>
      })}
    </Fragment>
  )
}

export default Recipes
