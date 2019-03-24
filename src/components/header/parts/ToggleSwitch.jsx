import React from 'react'
import styled from 'styled-components'


const ToggleContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 15px;
  height: 30px;
  z-index: 10;
`

const ToggleLabel = styled.label`
  display: inline-block;
  font-size: 40px;
  height: 25px;
  width: 50px;
  background: ${props => props.theme.background};
  border-radius: 1em;
`

const ToggleInput = styled.input`
  position: absolute;
  opacity: 0;
  &:checked + .slider {
    transform: translate3d(100%, 0, 0);
  }
  :active + .slider {
      width: 28px;
    }
`
const Slider = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 1em;
    background: white;
    box-shadow: ${props => props.theme.dropShadow};
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
`

const ToggleSwitch = () => {

  return (
    <ToggleContainer className={'toggleContainer'}>
      <ToggleLabel for="cb2" className={'switch'}>
      <ToggleInput id="cb2" type="checkbox" className={'checkBox'} />
      <Slider className={'slider'} />
      </ToggleLabel>    
    </ToggleContainer>
  )
}

export default ToggleSwitch;
