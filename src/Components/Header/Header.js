import React from 'react'


const Header = ({ menuItems, setMenuItems }) => {

  const changePage = (menuItems, link) => {
    const newMenuItems = menuItems.map(el => el.link === link ? {...el, active: true} : {...el, active: false})
    setMenuItems(newMenuItems)
  }

  const generateMenuItems = (someArr) => {
    return someArr.map(({ text, link, active }) => {
      return (
        <button
          key={link}
          className={active ? 'menu-item__active' : null}
          onClick={() => changePage(menuItems, link)}
        >
          {text}
        </button>
      )
    })
  }

  return (
    <div>
      {generateMenuItems(menuItems)}
    </div>
  )
}

export default Header