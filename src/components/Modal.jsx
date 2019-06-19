import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.fontSecondary + 'cf'};
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ModalContainer = styled.div`
  min-height: 500px;
  min-width: 450px;
  padding: 10px;
  margin: 10px;
  background-color: ${props => props.theme.backgroundSecondary};
  border: none;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  `

const Modal = () => {
  return (
    <Overlay>
      <ModalContainer>This is Blog Component</ModalContainer>
    </Overlay>
  )
}

export default Modal
