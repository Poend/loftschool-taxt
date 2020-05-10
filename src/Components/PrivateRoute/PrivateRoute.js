import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ authStatus, components, ...props }) => {

  return (
    <>
    {authStatus
      ?
      <Route 
        {...props}
        render={() => components}
      />
      :
      <Redirect to='/' />
    }
    </>
  )
}

const mapStateToProps = ({ system }) => {
  return {
    authStatus: system.authStatus
  }
}

export default connect(mapStateToProps)(PrivateRoute)