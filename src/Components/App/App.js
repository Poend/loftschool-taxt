import React, { useState } from 'react';
import Auth from '../Auth'
import Header from '../Header'
import Order from '../Order'
import Profile from '../Profile'
// import { authContext } from '../../Context/AuthContext'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import propTypes from 'prop-types'

function App({ classes, authStatus }) {

  const {
    mainLayout
  } = classes

  const [menuItems, setMenuItems] = useState([
    { text: 'Карта', link: 'Map', active: false },
    { text: 'Профиль', link: 'Profile', active: false },
    { text: 'Войти', link: 'Auth', active: true },
  ])

  return (
    <div className={mainLayout}>
      {authStatus
        ?
        <Switch>
          <Route path='/order'>
            <Header menuItems={menuItems} setMenuItems={setMenuItems} />
            <Order />
          </Route>
          <Route path='/profile'>
            <Header menuItems={menuItems} setMenuItems={setMenuItems} />
            <Profile />
          </Route>
          <Redirect to='/order' />
        </Switch>
        :
        <Redirect to='/'/>
      }
      <Route exact path='/' component={Auth} />
    </div>
  );
}

// prop-types
App.propTypes = {
  classes: propTypes.object,
  authStatus: propTypes.bool.isRequired
}

const mapStateToProps = ({ authStatus }) => {
  return {
    authStatus
  }
}

export default connect(mapStateToProps)(App)
