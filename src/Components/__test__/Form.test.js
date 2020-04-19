import React, { useContext } from 'react'
import Form from '../Form'
import { AuthProvider, AuthContext } from '../../Context/AuthContext'
import { render, fireEvent } from '@testing-library/react'

const passedAuthTest = {
  login: 'test',
  password: 'test'
}

const failedAuthTest = {
  login: 'asd',
  password: 'qwe'
}

describe('testing auth/reg form', () => {

  it('render without errors', () => {
    render(<AuthProvider ><Form /></AuthProvider>)
  })

  it('passed authentication', () => {
    const TestComponent = () => {
      const {isLoggedIn} = useContext(AuthContext)

      return (
        <>
          <div data-testid='isloggedin-value'>{isLoggedIn.toString()}</div>
          <Form />
        </>
      )
    }

    const form = render(<AuthProvider><TestComponent/></AuthProvider>)
    // login input
    const loginInput = form.getByLabelText('Имя пользователя')
    fireEvent.change(loginInput, { target: { value: passedAuthTest.login } })
    expect(loginInput.value).toBe('test')
    // password input
    const passwordInput = form.getByLabelText('Пароль')
    fireEvent.change(passwordInput, { target: { value: passedAuthTest.password } })
    expect(passwordInput.value).toBe('test')
    // submit form
    const submitButton = form.getByRole('submit')
    fireEvent.click(submitButton)
    // check AuthContext isLoggedIn value
    const isloggedinValue = form.getByTestId('isloggedin-value').innerHTML
    expect(isloggedinValue).toBe('true')
  })

  it('failed authentication', () => {
    const TestComponent = () => {
      const {isLoggedIn} = useContext(AuthContext)

      return (
        <>
          <div data-testid='isloggedin-value'>{isLoggedIn.toString()}</div>
          <Form />
        </>
      )
    }

    const form = render(<AuthProvider><TestComponent/></AuthProvider>)
    // login input
    const loginInput = form.getByLabelText('Имя пользователя')
    fireEvent.change(loginInput, { target: { value: failedAuthTest.login } })
    expect(loginInput.value).toBe('asd')
    // password input
    const passwordInput = form.getByLabelText('Пароль')
    fireEvent.change(passwordInput, { target: { value: failedAuthTest.password } })
    expect(passwordInput.value).toBe('qwe')
    // submit form
    const submitButton = form.getByRole('submit')
    fireEvent.click(submitButton)
    // check AuthContext isLoggedIn value
    const isloggedinValue = form.getByTestId('isloggedin-value').innerHTML
    expect(isloggedinValue).toBe('false')
  })

  it('change form type', () => {
    const form = render(<AuthProvider><Form/></AuthProvider>)
    // get text
    expect(form.getByTestId('header').innerHTML).toBe('Войти')
    // simulate click
    expect(form.getByTestId('change-auth-type').innerHTML).toBe('Зарегистрируйтесь')
    fireEvent.click(form.getByTestId('change-auth-type'))
    // check new values
    expect(form.getByTestId('header').innerHTML).toBe('Регистрация')
    expect(form.getByTestId('change-auth-type').innerHTML).toBe('Войти')
  })
})