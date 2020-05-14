import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { Logo } from 'loft-taxi-mui-theme'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import actions from '../../Redux/Actions'

const { logout } = actions

const Header = ({ menuItems, classes, authStatus, logout }) => {

  const {
    headerLayout,
    menuWrapper,
    headerWrapper
  } = classes

  const logoutFunc = (event) => { 
    event.preventDefault()
    logout()
  }

  const generateMenuItems = (someArr) => {
    return someArr.map(({ text, link, active }) => {
      return (
        <Link
          style={{ textDecoration: 'none' }}
          to={text === 'Выйти' ? '/' : `${link}`}
          key={link}
          onClick={(event) => authStatus && text === 'Выйти' ? logoutFunc(event) : null}
        >
          <Button
            className={active ? 'menu-item__active' : null}
          >
            {text}
          </Button>
        </Link>
      )
    })
  }

  return (
    <div className={headerLayout}>
      <div className={headerWrapper}>
        <Logo />
        <div className={menuWrapper}>
          {generateMenuItems(menuItems)}
        </div>
      </div>
    </div>
  )
}

// prop-types
Header.propTypes = {
  classes: propTypes.object
}

const mapStateToProps = ({ system }) => {
  return {
    authStatus: system.authStatus
  }
}

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(Header)
