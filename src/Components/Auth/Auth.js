// import React, { useState } from 'react'

// const data = {
//   signin: {
//     inputs: [
//       { label: 'Имя пользователя', name: 'login', required: true },
//       { label: 'Пароль', name: 'password', required: true },
//     ],
//     buttonText: 'Войти',
//     headerText: 'Войти',
//     subscription: 'Новый пользователь?',
//     linkText: 'Зарегистрируйтесь'
//   },
//   signup: {
//     inputs: [
//       { label: 'Адрес электронной почты', name: 'email', required: false },
//       { label: 'Имя', name: 'first-name', required: false },
//       { label: 'Фамилия', name: 'surname', required: false },
//       { label: 'Пароль', name: 'password', required: false },
//     ],
//     buttonText: 'Зарегистрироваться',
//     headerText: 'Регистрация',
//     subscription: 'Уже зарегистрирован?',
//     linkText: 'Войти'
//   }
// }

// const Auth = ({ pseudoAuth, menuItems, setMenuItems }) => {

//   const [authType, setAuthType] = useState('signin')
//   const [formData, setFormData] = useState({})

//   const changeAuthType = (event, authType) => {
//     event.preventDefault()
//     setAuthType(authType === 'signin' ? 'signup' : 'signin')
//   }

//   const generateInputs = (someArr) => {
//     return someArr.map(({ label, name, required }) => {
//       return (
//         <div key={label}>

//           <label
//             htmlFor={name}>
//             {label}
//           </label>

//           <input
//             required={required}
//             name={name}
//             id={name}
//             value={formData[name] ? formData[name] : ''}
//             onChange={(event) => setFormData({
//               ...formData,
//               [`${event.target.name}`]: event.target.value
//             })}
//           />

//         </div>
//       )
//     })
//   }

//   const changePage = (menuItems, link) => {
//     const newMenuItems = menuItems.map(el => {
//       return el.link === link ? { ...el, active: true } : { ...el, active: false }
//     })
//     setMenuItems(newMenuItems)
//   }

//   const pseudoSignin = (event) => {
//     event.preventDefault()
//     if (authType === 'signin') {
//       if(formData.login === pseudoAuth.login && formData.password === pseudoAuth.password){
//         changePage(menuItems, 'Map')
//       } else {
//         return false
//       }
//     }
//   }

//   return (
//     <div>
//       <div>
//         <h1>
//           {data[authType].headerText}
//         </h1>
//         <p>
//           {data[authType].subscription}
//           <a href="/" onClick={(event) => changeAuthType(event, authType)}>
//             {data[authType].linkText}
//           </a>
//         </p>
//       </div>
//       <form onSubmit={(event) => pseudoSignin(event)}>
//         {generateInputs(data[authType].inputs)}
//         <button type='submit'>
//           {data[authType].buttonText}
//         </button>
//       </form>
//     </div>
//   )
// }

// export default Auth

import React, { Component } from 'react'

// inputs
const data = {
  signin: {
    inputs: [
      { label: 'Имя пользователя', name: 'login', required: true, type: 'text' },
      { label: 'Пароль', name: 'password', required: true, type: 'password' },
    ],
    buttonText: 'Войти',
    headerText: 'Войти',
    subscription: 'Новый пользователь?',
    linkText: 'Зарегистрируйтесь'
  },
  signup: {
    inputs: [
      { label: 'Адрес электронной почты', name: 'email', required: false, type: 'email' },
      { label: 'Имя', name: 'first-name', required: false, type: 'text' },
      { label: 'Фамилия', name: 'surname', required: false, type: 'text' },
      { label: 'Пароль', name: 'password', required: false, type: 'password' },
    ],
    buttonText: 'Зарегистрироваться',
    headerText: 'Регистрация',
    subscription: 'Уже зарегистрирован?',
    linkText: 'Войти'
  }
}

export default class Auth extends Component {

  state = {
    authType: 'signin',
    formData: {}
  }

  changeAuthType = (event, authType) => {
    event.preventDefault()
    this.setState({
      authType: authType === 'signin' ? 'signup' : 'signin'
    })
  }

  setInputValue = (event) => {
    this.setState({
      [`${event.target.name}`]: event.target.value
    })
  }

  generateInputs = (someArr) => {
    const { formData } = this.state
    return someArr.map(({ label, name, required, type }) => {
      return (
        <div key={label}>

          <label
            htmlFor={name}>
            {label}
          </label>

          <input
            required={required}
            name={name}
            type={type}
            id={name}
            value={formData[name]}
            onChange={(event) => this.setInputValue(event)}
          />

        </div>
      )
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const {changePages = {}} = this.props
    changePages('Map')
  }

  render() {
    const { authType } = this.state
    return (
      <div>
        <div>
          <h1>
            {data[authType].headerText}
          </h1>
          <p>
            {data[authType].subscription}
            <a href="/" onClick={(event) => this.changeAuthType(event, authType)}>
              {data[authType].linkText}
            </a>
          </p>
        </div>
        <form onSubmit={event => this.onSubmit(event)}>
          {this.generateInputs(data[authType].inputs)}
          <button type='submit'>
            {data[authType].buttonText}
          </button>
        </form>
      </div>
    )
  }
}
