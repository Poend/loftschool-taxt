export default {
  inputs: [
    { label: 'Адрес электронной почты', name: 'email', required: true, type: 'text' },
    { label: 'Имя', name: 'name', required: true, type: 'text' },
    { label: 'Фамилия', name: 'surname', required: true, type: 'text' },
    { label: 'Пароль', name: 'password', required: true, type: 'password' },
  ],
  buttonText: 'Зарегистрироваться',
  headerText: 'Регистрация',
  subscription: 'Уже зарегистрирован?',
  linkText: 'Войти'
}