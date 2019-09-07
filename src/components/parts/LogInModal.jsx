import React, { useState } from 'react'
import styled from 'styled-components'

import Button from '../../assets/Button'
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h3 {
    color: ${props => props.theme.fontMain};
    font-size: 26px;
    margin: 10px;
  }
`

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
const Bar = styled.div`
  margin-top: 50px;
  background-color: ${props => props.theme.fontSecondary};
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  p {
    color: ${props => props.theme.backgroundSecondary};
    font-size: 10px;
    margin: 20px 20px 0;
    max-height: 50px;
  }
  .red {
    color: red;
    margin: 5px 20px;
  }
`

const LogInModal = props => {
  const { handleUserLogIn } = props
  const [emailFocused, setEmailFocused] = useState(false)
  const [passFocused, setPassFocused] = useState(false)
  const [error, setError] = useState({ email: false, pass: false })
  const [errorMessage, setDisplayErrorMessage] = useState(false)

  const validateEmail = email => {
    let reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    let emailValid = reg.test(String(email).toLowerCase())
    setError({ email: !emailValid, pass: error.pass })
  }
  const validatePassword = pass => {
    pass.length ? setError({ email: error.email, pass: false }) : setError({ email: error.email, pass: true })
  }
  const handleSubmit = () => {
    if (!error.pass && !error.email) {
      handleUserLogIn()
    } else {
      setDisplayErrorMessage(true)
    }
  }
  return (
    <Form>
      <h3>User Login</h3>
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
      <Container>
        <Input
          type={'password'}
          name={'password'}
          autocomplete={'off'}
          placeholder={' '}
          onFocus={() => setPassFocused(true)}
          onBlur={e => validatePassword(e.target.value)}
          error={error.pass}
          required
        />
        <Label htmlFor={'password'} emailFocused={passFocused}>
          Password
        </Label>
      </Container>
      <Bar>
        <p>Note: Do not use real e-mail or password here.</p>
        {errorMessage && (
          <>
            <p className={'red'}>E-mail must follow standard e-mail formatting.</p>
            <p className={'red'}>Password must be filled out.</p>
          </>
        )}
        <Button text={'Submit'} handleClick={handleSubmit} />
      </Bar>
    </Form>
  )
}

export default LogInModal
