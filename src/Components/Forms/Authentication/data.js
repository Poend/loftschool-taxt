export default {
  inputs: [
    { label: 'Имя пользователя', name: 'login', required: true, type: 'text' },
    { label: 'Пароль', name: 'password', required: true, type: 'password' },
  ],
  buttonText: 'Войти',
  headerText: 'Войти',
  subscription: 'Новый пользователь?',
  linkText: 'Зарегистрируйтесь'
}