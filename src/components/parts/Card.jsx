import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  height: 160px;
  min-width: 375px;
  overflow: hidden;
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: ${props => props.theme.dropShadow};
  display: flex;
  align-items: center;
`

const Image = styled.div`
  background: url(${props => props.image});
  background-size: auto 150px;
  background-repeat: no-repeat;
  background-position: center;
  height: 150px;
  min-width: 150px;
  overflow: hidden;
  border-radius: 10px;
  margin-right: 15px;
`

const TextSection = styled.div`
  color: ${props => props.theme.fontSecondary};
  height: 100%;
  h3 {
    margin: 10px 0 0 0;
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  p {
    font-size: 13px;
    line-height: 18px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .cals {
    font-size: 10px;
    font-weight: bold;
  }
`

const Card = props => {
  const { recipe } = props
  return (
    <CardContainer>
      <Image image={recipe.recipe.image} />
      <TextSection>
        <h3>{recipe.recipe.label}</h3>
        <p>{recipe.recipe.ingredientLines}</p>
        <p className={'cals'}>Calories: {Math.ceil(recipe.recipe.calories / recipe.recipe.yield)}</p>
      </TextSection>
    </CardContainer>
  )
}

export default Card
