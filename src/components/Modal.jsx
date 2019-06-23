import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.fontMain + 'cf'};
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
const ModalContainer = styled.div`
  position: fixed;
  z-index: 11;
  top: 50%;
  left: 50%;
  height: 500px;
  width: 400px;
  padding: 10px;
  margin: 10px;
  background-color: ${props => props.theme.backgroundSecondary};
  border: none;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  transform: translate(-50%, -50%);
  transform-origin: top left;
  animation: ${props => (props.displayModal ? 'popIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards' : 'fadeOutContainer 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards')};
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

const Image = styled.div`
  background: url(${props => props.image});
  background-size: auto 150px;
  background-repeat: no-repeat;
  background-position: center;
  height: 150px;
  min-width: 150px;
  overflow: hidden;
  border-radius: 10px;
  margin-right: 15px;`
const TextSection = styled.div``

const Modal = props => {
  const { modalData, handleCloseModal, displayModal } = props
console.log(modalData)
  return (
    <>
      <Overlay onClick={() => handleCloseModal(true)} displayModal={displayModal} />
      <ModalContainer onClick={() => handleCloseModal(false)} displayModal={displayModal}>
        <>
        <Image image={modalData.image} />
          <TextSection>
            <h3>{modalData.label}</h3>
            <p>{modalData.ingredientLines}</p>
            <p className={'cals'}>Calories: {Math.ceil(modalData.calories / modalData.yield)}</p>
          </TextSection>
        </>
      </ModalContainer>
    </>
  )
}

export default Modal
