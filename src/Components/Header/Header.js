import React, { useContext } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { Logo } from 'loft-taxi-mui-theme'
import propTypes from 'prop-types'
import { AuthContext } from '../../Context/AuthContext'

const Header = ({ menuItems, classes }) => {

  const {
    headerLayout,
    menuWrapper,
    headerWrapper
  } = classes

  const authCtx = useContext(AuthContext)
  const { isLoggedIn, logout = {} } = authCtx

  const generateMenuItems = (someArr) => {
    return someArr.map(({ text, link, active }) => {
      return (
        <Link
          style={{ textDecoration: 'none' }}
          to={`${link}`}
          key={link}
          onClick={() => isLoggedIn && text === 'Войти' ? logout() : null}>
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

export default Header
