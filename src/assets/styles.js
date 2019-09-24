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

// modal styles
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #101B29CF;
  z-index: 10;
  animation: ${props =>
    props.displayModal
      ? 'unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
      : 'fadeOut 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'};
  @keyframes unfoldIn {
    0% {
      transform: scaleY(0.005) scaleX(0);
    }
    15% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(1) scaleX(1);
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: scaleY(1) scaleX(1);
    }
    50% {
      opacity: 0;
      transform: scaleY(1) scaleX(1);
    }
    100% {
      opacity: 0;
      transform: scaleY(0.005) scaleX(0);
    }
  }
`
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 11;
  top: 50%;
  left: 50%;
  height: 60vh;
  max-height: 500px;
  width: 450px;
  padding: 10px;
  margin: 10px;
  background-color: ${props => props.theme.backgroundSecondary};
  border: none;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  transform: translate(-50%, -50%);
  transform-origin: top left;
  animation: ${props =>
    props.displayModal
      ? 'popIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
      : 'fadeOutContainer 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'};
  @keyframes popIn {
    0% {
      transform: scaleY(0) scaleX(0) translate(-50%, -50%);
    }
    55% {
      transform: scaleY(0) scaleX(0) translate(-50%, -50%);
    }
    100% {
      transform: scaleY(1) scaleX(1) translate(-50%, -50%);
    }
  }
  @keyframes fadeOutContainer {
    0% {
      opacity: 1;
      transform: scaleY(1) scaleX(1) translate(-50%, -50%);
    }
    75% {
      opacity: 0;
      transform: scaleY(1) scaleX(1) translate(-50%, -50%);
    }
    100% {
      opacity: 0;
      transform: scaleY(0) scaleX(0) translate(-50%, -50%);
    }
  }
`