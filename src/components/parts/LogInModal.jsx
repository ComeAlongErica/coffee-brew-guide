import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 250px;
  height: 45px;
  margin: 0 auto;
  display: flex;
  position: relative;
  margin-top: 20px;
`
const Label = styled.label`
  position: absolute;
  left: 20px;
  top: 16px;
  pointer-events: none;
  color: ${props => props.theme.fontMain};
  transition: 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  ${props =>
    props.emailFocused &&
    `
  transform: scale(.9);
  left: 13px;
  top: -14px;
  background-color: ${props.theme.backgroundSecondary};
  padding: 5px 10px;
  `}
`
const Input = styled.input`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.fontMain};
  border: 2px solid;
  padding-left: 15px;
  background-color: transparent;
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    border: 2px solid ${props => props.theme.fontMain};
    -webkit-text-fill-color: ${props => props.theme.fontMain};
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  :focus {
    outline: none;
  }
  ${props =>
    props.error &&
    `
    border: 2px solid red;
  `}
`
const LogInModal = props => {
  const [emailFocused, setEmailFocused] = useState(false)
  const [passFocused, setPassFocused] = useState(false)
  const [error, setError] = useState({ email: false, pass: false })

  const validateEmail = email => {
    let reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    let emailValid = reg.test(String(email).toLowerCase())
    setError({ email: !emailValid, pass: error.pass })
  }

  return (
    <form>
      <Container>
        <Input
          type={'email'}
          name={'email'}
          autocomplete={'off'}
          placeholder={' '}
          onFocus={() => setEmailFocused(true)}
          onBlur={e => validateEmail(e.target.value)}
          error={error.email}
          required
        />
        <Label htmlFor={'email'} emailFocused={emailFocused}>
          Email
        </Label>
      </Container>
    </form>
  )
}

export default LogInModal
