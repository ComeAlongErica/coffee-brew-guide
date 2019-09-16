import React from 'react'
import styled from 'styled-components'


// Recipes.jsx styles

export const Grid = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-areas: 'row';
`
export const ContainerForStickyArrows = styled.div`
  grid-area: row;
  min-width: 100vw;
  z-index: 5;
  pointer-events: none;
`
export const CardScrollContainer = styled.div`
  grid-area: row;
  z-index: 5;
  margin: 5px 0 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 6px 0;
  overflow-x: auto;
  scroll-behavior: smooth;
  transition: 0.4s ease-in-out;
  transform: translateX(
    ${props => (props.enterDirection ? (props.enterDirection === 'center' ? '' : '100vw') : '-100vw')}
  );
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Arrow = styled.div`
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
export const RightArrow = styled(Arrow)`
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
export const LeftArrow = styled(Arrow)`
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
export const SearchResults = styled.h3`
  grid-area: row;
  opacity: 0.4;
  margin-top: -10px;
  margin-left: 16px;
`