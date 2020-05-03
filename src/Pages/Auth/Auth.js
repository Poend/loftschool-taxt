import React from 'react'
import { Logo } from 'loft-taxi-mui-theme'
import propTypes from 'prop-types'
import Forms from '../../Components/Forms'
import { connect } from 'react-redux'

const { Authentication, Registration } = Forms

const Auth = ({ classes, isAuthForm }) => {

  const {
    layoutBg
  } = classes

  return (
    <div className={layoutBg}>
      <Logo />
      {isAuthForm
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

const mapStateToProps = ({ system }) => {
  return {
    isAuthForm: system.isAuthForm
  }
}

export default connect(mapStateToProps)(Auth)