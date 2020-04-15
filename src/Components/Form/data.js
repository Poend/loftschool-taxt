export const data = {
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