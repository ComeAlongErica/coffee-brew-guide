import React, { Fragment } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  height: 160px;
  min-width: 375px;
  overflow: hidden;
  border: 1px solid red;
  padding: 10px;
  margin: 10px;
  background-color: ${props => props.theme.backgroundSecondary};
  border: none;
  border-radius: 10px;
  box-shadow: ${props => props.theme.dropShadow};
  display: flex;
  align-items: center;
  .image {
    height: 150px;
    min-width: 150px;
    overflow: hidden;
    border-radius: 10px;
    margin-right: 15px;
    animation-duration: 20s;
  }
  .short,
  .med,
  .long {
    margin: 5px;
    width: 150px;
    height: 20px;
  }
  .short {
    width: 50px;
    animation-duration: 50s;
  }
  .med {
    width: 150px;
    animation-duration: 27s;
  }
  .long {
    width: 200px;
    animation-duration: 20s;
  }
  && div.shimmer-block {
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeHolderShimmer;
    animation-timing-function: linear;
    background: ${props => props.theme.shimmer};
  }
  @keyframes placeHolderShimmer {
    0% {
      background-position: -1000px -1000px;
    }
    100% {
      background-position: 1000px -1000px;
    }
  }
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
  const { recipe, loader } = props
  return (
    <Fragment>
      {loader && (
        <CardContainer>
          <div className={'image shimmer-block '} />
          <TextSection>
            <div className={'med shimmer-block '} />
            <div className={'long shimmer-block '} />
            <div className={'long shimmer-block '} />
            <div className={'long shimmer-block '} />
            <div className={'short shimmer-block '} />
          </TextSection>
        </CardContainer>
      )}
      {!loader && (
        <CardContainer>
          <Image image={recipe.image} />
          <TextSection>
            <h3>{recipe.label}</h3>
            <p>{recipe.ingredientLines}</p>
            <p className={'cals'}>Calories: {Math.ceil(recipe.calories / recipe.yield)}</p>
          </TextSection>
        </CardContainer>
      )}
    </Fragment>
  )
}

export default Card
