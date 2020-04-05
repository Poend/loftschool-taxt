import React, { useState } from 'react';
import Auth from '../Auth'
import Header from '../Header'
import Order from '../Order'
import Profile from '../Profile'


function App() {

  const [menuItems, setMenuItems] = useState([
    { text: 'Карта', link: 'Map', active: false },
    { text: 'Профиль', link: 'Profile', active: false },
    { text: 'Войти', link: 'Auth', active: true },
  ])

  const pseudoRouting = (menuItems) => {

    const activePage = menuItems.filter(({ active }) => active)[0]
    const { link } = activePage

    switch (link) {
      case "Map":
        return <Order />
      case "Profile":
        return <Profile />
      case "Auth":
        return <Auth />
      default:
        return <Auth />
    }
  }

  return (
    <div className="App">
      <Header menuItems={menuItems} setMenuItems={setMenuItems} />
      {pseudoRouting(menuItems)}
    </div>
  );
}

export default App;
