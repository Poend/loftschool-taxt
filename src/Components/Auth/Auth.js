import React from 'react'
import Form from '../Form'
import { Logo } from 'loft-taxi-mui-theme'
import propTypes from 'prop-types'

const Auth = ({ classes }) => {
  const { 
    layoutBg
  } = classes

  return (
    <div className={layoutBg}>
      <Logo />
      <Form />
    </div>
  )
}

// prop-types
Auth.propTypes = {
  classes: propTypes.object
}

export default Auth