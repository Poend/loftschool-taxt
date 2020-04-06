// import React, { useState } from 'react';
// import Auth from '../Auth'
// import Header from '../Header'
// import Order from '../Order'
// import Profile from '../Profile'


// const pseudoAuth = {
//   login: 'test',
//   password: 'test'
// }

// function App() {

//   const [menuItems, setMenuItems] = useState([
//     { text: 'Карта', link: 'Map', active: false },
//     { text: 'Профиль', link: 'Profile', active: false },
//     { text: 'Войти', link: 'Auth', active: true },
//   ])

//   const pseudoRouting = (menuItems) => {

//     const activePage = menuItems.filter(({ active }) => active)[0]
//     const { link } = activePage

//     switch (link) {
//       case "Map":
//         return <Order />
//       case "Profile":
//         return <Profile />
//       case "Auth":
//         return <Auth pseudoAuth={pseudoAuth} menuItems={menuItems} setMenuItems={setMenuItems} />
//       default:
//         return <Auth pseudoAuth={pseudoAuth} menuItems={menuItems} setMenuItems={setMenuItems} />
//     }
//   }

//   return (
//     <div className="App">
//       <Header menuItems={menuItems} setMenuItems={setMenuItems} />
//       {pseudoRouting(menuItems)}
//     </div>
//   );
// }
// 
// export default App;


import React, { Component } from 'react'
import Auth from '../Auth'
import Header from '../Header'
import Order from '../Order'
import Profile from '../Profile'

export default class App extends Component {

  state = {
    menuItems: [
      { text: 'Карта', link: 'Map', active: false },
      { text: 'Профиль', link: 'Profile', active: false },
      { text: 'Войти', link: 'Auth', active: true },
    ]
  }

  changePages = (link) => {
    const { menuItems } = this.state
    const newMenuItems = menuItems.map(el => el.link === link ? {...el, active: true} : {...el, active: false})
      this.setState({
        menuItems: newMenuItems
      })
  }

  pseudoRouting = (menuItems) => {

    const activePage = menuItems.filter(({ active }) => active)[0]
    const { link } = activePage

    switch (link) {
      case "Map":
        return <Order />
      case "Profile":
        return <Profile />
      case "Auth":
        return <Auth changePages={this.changePages}/>
      default:
        return <Auth changePages={this.changePages}/>
    }
  }


  render() {
    const { menuItems } = this.state
    return (
      <div className="App">
        <Header menuItems={menuItems} changePages={this.changePages}/>
        {this.pseudoRouting(menuItems)}
      </div>
    )
  }
}
