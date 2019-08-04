import React from 'react'
import Button from '../../../assets/Button'


const User = props => {
 let displayText = props.loggedIn ? 'Log Out' : 'Log In'
  return (
    <Button text={displayText} handleClick={props.handleClick} />
  )
}

export default User;
