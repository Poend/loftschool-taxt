import React, { useState } from 'react'

const data = {
  signin: {
    inputs: [
      { label: 'Имя пользователя', name: 'login', required: true },
      { label: 'Пароль', name: 'password', required: true },
    ],
    buttonText: 'Войти',
    headerText: 'Войти',
    subscription: 'Новый пользователь?',
    linkText: 'Зарегистрируйтесь'
  },
  signup: {
    inputs: [
      { label: 'Адрес электронной почты', name: 'email', required: false },
      { label: 'Имя', name: 'first-name', required: false },
      { label: 'Фамилия', name: 'surname', required: false },
      { label: 'Пароль', name: 'password', required: false },
    ],
    buttonText: 'Зарегистрироваться',
    headerText: 'Регистрация',
    subscription: 'Уже зарегистрирован?',
    linkText: 'Войти'
  }
}

const Auth = () => {

  const [authType, setAuthType] = useState('signin')
  const [formData, setFormData] = useState({})

  const changeAuthType = (event, authType) => {
    event.preventDefault()
    setAuthType(authType === 'signin' ? 'signup' : 'signin')
  }

  const generateInputs = (someArr) => {
    return someArr.map(({ label, name, required }) => {
      return (
        <div key={label}>

          <label
            htmlFor={name}>
            {label}
          </label>

          <input
            required={required}
            name={name}
            id={name}
            value={formData[name] ? formData[name] : ''}
            onChange={(event) => setFormData({
              ...formData,
              [`${event.target.name}`]: event.target.value
            })}
          />

        </div>
      )
    })
  }

  return (
    <div>
      <div>
        <h1>
          {data[authType].headerText}
        </h1>
        <p>
          {data[authType].subscription}
          <a href="/" onClick={(event) => changeAuthType(event, authType)}>
            {data[authType].linkText}
          </a>
        </p>
      </div>
      <form>
        {generateInputs(data[authType].inputs)}
        <button>
          {data[authType].buttonText}
        </button>
      </form>
    </div>
  )
}

export default Auth
