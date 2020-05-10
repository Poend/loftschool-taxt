import React, { useState } from 'react';
import Auth from '../../Pages/Auth'
import Header from '../Header'
import Order from '../../Pages/Order'
import Profile from '../../Pages/Profile'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { Store } from '../../Redux/Store'
import PrivateRoute from '../PrivateRoute'

const App = ({ classes, authStatus }) => {

  Store.subscribe(() => localStorage.setItem('state', JSON.stringify(Store.getState())))

  const {
    mainLayout
  } = classes

  const [menuItems, setMenuItems] = useState([
    { text: 'Карта', link: '/order', active: false },
    { text: 'Профиль', link: '/profile', active: false },
    { text: 'Выйти', link: '/', active: true },
  ])

  return (
    <div className={mainLayout}>
      {authStatus
        ?
        <Switch>
          <PrivateRoute path='/order' components={
            <>
              <Header menuItems={menuItems} setMenuItems={setMenuItems} />
              <Order />
            </>
          }>
          </PrivateRoute>
          <PrivateRoute path='/profile' components={
            <>
              <Header menuItems={menuItems} setMenuItems={setMenuItems} />
              <Profile />
            </>
          }>
          </PrivateRoute>
          <Redirect to='/order' />
          <Redirect to='/' />
        </Switch>
        :
        <>
          <Route exact path='/' component={Auth} />
          <Redirect to='/' />
        </>
      }
    </div>
  );
}

// prop-types
App.propTypes = {
  classes: propTypes.object,
  authStatus: propTypes.bool.isRequired
}

const mapStateToProps = ({ system }) => {
  return {
    authStatus: system.authStatus
  }
}

export default connect(mapStateToProps)(App)
