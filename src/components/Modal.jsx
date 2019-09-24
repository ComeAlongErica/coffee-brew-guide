import React from 'react'
import { Overlay, ModalContainer } from '../assets/styles.js'

const Modal = props => {
  const { handleCloseModal, displayModal } = props
  return (
    <>
      <Overlay onClick={() => handleCloseModal(true)} displayModal={displayModal} />
      <ModalContainer onClick={() => handleCloseModal(false)} displayModal={displayModal}>
        {props.children}
      </ModalContainer>
    </>
  )
}

export default Modal
