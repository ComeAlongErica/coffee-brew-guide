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
  animation: ${props => (props.displayModal ? 'unfoldIn' : 'unfoldOut')} 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
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
  @keyframes unfoldOut {
    0% {
      transform: scaleY(1) scaleX(1);
    }
    70% {
      transform: scaleY(0.005) scaleX(1);
    }
    100% {
      transform: scaleY(0.005) scaleX(0);
    }
  }
`
const ModalContainer = styled.div`
  position: fixed;
  z-index: 11;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 500px;
  min-width: 450px;
  padding: 10px;
  margin: 10px;
  background-color: ${props => props.theme.backgroundSecondary};
  border: none;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`

const Modal = props => {
  const { modalData, handleCloseModal, displayModal } = props

  return (
    <>
      <Overlay onClick={() => handleCloseModal(true)} displayModal={displayModal} />
      {/* <ModalContainer onClick={() => handleCloseModal(false)} displayModal={displayModal}>HI</ModalContainer> */}
    </>
  )
}

export default Modal
