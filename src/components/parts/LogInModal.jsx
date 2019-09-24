import React, { useState, useRef } from 'react'

import Button from '../../assets/Button'
import { Form, LabelInputContainer, Input, Label, Bar } from '../../assets/styles'


const LogInModal = props => {
  const { handleUserLogIn, handleCloseModal } = props
  const [emailFocused, setEmailFocused] = useState(false)
  const [passFocused, setPassFocused] = useState(false)
  const [error, setError] = useState({ email: false, pass: false })
  const [errorMessage, setDisplayErrorMessage] = useState(false)
  const email = useRef()
  const pass = useRef()
  const validateEmail = email => {
    let reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    let emailValid = reg.test(String(email).toLowerCase())
    setError({ email: !emailValid, pass: error.pass })
    return emailValid
  }
  const validatePassword = pass => {
    pass.length ? setError({ email: error.email, pass: false }) : setError({ email: error.email, pass: true })
    return pass.length
  }
  const handleSubmit = () => {
    const doErrorsExist = validateEmail(email.current.value) && validatePassword(pass.current.value)
    if (doErrorsExist) {
      handleUserLogIn()
      email.current.value = ''
      pass.current.value = ''
      setDisplayErrorMessage(false)
      handleCloseModal(true)
    } else {
      setDisplayErrorMessage(true)
    }
  }
  return (
    <Form>
      <h3>User Login</h3>
      <LabelInputContainer>
        <Input
          ref={email}
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
      </LabelInputContainer>
      <LabelInputContainer>
        <Input
          ref={pass}
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
      </LabelInputContainer>
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
