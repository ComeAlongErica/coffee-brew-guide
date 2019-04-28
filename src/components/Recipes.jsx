import React, { useState, useEffect, Fragment } from 'react'
import Card from './parts/Card'

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
        return <Card recipe={recipe} key={idx} />
      })}
    </Fragment>
  )
}

export default Recipes
