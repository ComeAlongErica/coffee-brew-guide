import React from 'react'
import { Image, TextSection, Ingredients, SectionHeaders, StyledParagraphs, StyledLink } from '../../assets/styles'

const RecipeModal = props => {
  const { modalData } = props
  return (
    <>
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
    </>
  )
}

export default RecipeModal
