import React, { useContext } from 'react'
import { Logo } from 'loft-taxi-mui-theme'
import propTypes from 'prop-types'
import Forms from '../../Components/Forms'
import { AuthContext } from '../../Context/AuthContext'

const { Authentication, Registration } = Forms

const Auth = ({ classes }) => {
  const {
    layoutBg
  } = classes

  const authCtx = useContext(AuthContext)
  const { authType } = authCtx

  return (
    <div className={layoutBg}>
      <Logo />
      {authType === 'signin'
        ? <Authentication />
        : <Registration />
      }
    </div>
  )
}

// prop-types
Auth.propTypes = {
  classes: propTypes.object
}

export default Auth