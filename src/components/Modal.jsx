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

const Image = styled.div`
  background: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ::after {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, ${props => props.theme.backgroundSecondary} 0%, transparent 100%);
  }
`
const TextSection = styled.div`
  max-height: 65%;
  overflow: scroll;
  position: absolute;
  margin: 0 30px 20px;
  color: ${props => props.theme.fontMain};
  top: 35%;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  h3 {
    width: 100%;
    font-size: 26px;
    margin: 10px;
  }
  div {
    box-sizing: border-box;
    padding: 10px;
    width: 50%;
  }
`
const Ingredients = styled.ul`
  margin: 0;
  padding: 0 0 0 18px;
  li {
    font-size: 12px;
    margin: 2px;
  }
`
const SectionHeaders = styled.h4`
  text-transform: uppercase;
  font-size: 12px;
  margin: 5px;
  ${props => props.ingredient && `margin-left:-16px;`}
  ${props => props.inline && `display: inline-block;`}
`
const StyledParagraphs = styled.p`
  font-size: 12px;
  margin: 2px 5px;
  ${props => props.inline && `display: inline-block;`}
`
const StyledLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-size: 12px;
  color: #f9bd35;
  display: inline-block;
  padding: 50px 0 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(to top, ${props => props.theme.backgroundSecondary} 0%, transparent 100%);
  ::after {
    width: 100%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: block;
    content: '';
    transform: scaleX(0.5);
    border-bottom: 3px solid #f9bd35;
    transition: transform 250ms ease-in-out 0s;
  }
  :hover::after {
    transform: scaleX(1);
  }
`

const Modal = props => {
  const { modalData, handleCloseModal, displayModal } = props
  console.log(modalData)
  return (
    <>
      <Overlay onClick={() => handleCloseModal(true)} displayModal={displayModal} />
      <ModalContainer onClick={() => handleCloseModal(false)} displayModal={displayModal}>
        <Image image={modalData.image} />
        <TextSection>
          <h3>{modalData.label}</h3>
          <div>
            <Ingredients>
              <SectionHeaders ingredient>Ingredients</SectionHeaders>
              {modalData.ingredients.map((item, idx) => {
                return <li key={idx}>{item.text}</li>
              })}
            </Ingredients>
          </div>
          <div>
            <section>
              <SectionHeaders inline>Servings:</SectionHeaders>
              <StyledParagraphs inline>{modalData.yield}</StyledParagraphs>
            </section>
            <section>
              <SectionHeaders inline>Calories:</SectionHeaders>
              <StyledParagraphs inline>
                {Math.ceil(modalData.calories / modalData.yield)} (per serving)
              </StyledParagraphs>
            </section>
            {modalData.cautions && (
              <section>
                <SectionHeaders inline>Allergy:</SectionHeaders>
                <StyledParagraphs inline>
                  {modalData.cautions.map((allergy, idx) => {
                    let lastItem = modalData.cautions.length - 1
                    let seperation = lastItem === idx ? '' : ', '
                    return (
                      <span key={idx}>
                        {allergy}
                        {seperation}
                      </span>
                    )
                  })}
                </StyledParagraphs>
              </section>
            )}
          </div>
        </TextSection>
        <StyledLink href={modalData.url} target='_blank'>
          Ready to make the recipe?
        </StyledLink>
      </ModalContainer>
    </>
  )
}

export default Modal
