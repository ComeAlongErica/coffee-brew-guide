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
  const { modalData, handleCloseModal } = props

  return (
    <>
      <Overlay onClick={() => handleCloseModal(true)} />
      <ModalContainer onClick={() => handleCloseModal(false)}>HI</ModalContainer>
    </>
  )
}

export default Modal
