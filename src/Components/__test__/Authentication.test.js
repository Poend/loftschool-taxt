// import React, { useContext } from 'react'
// import Forms from '../Forms'
// import { AuthProvider, AuthContext } from '../../Context/AuthContext'
// import { render, fireEvent } from '@testing-library/react'

// const { Authentication } = Forms

// const passedAuthTest = {
//   login: 'test',
//   password: 'test'
// }

// const failedAuthTest = {
//   login: 'asd',
//   password: 'qwe'
// }

// describe('testing authentication form', () => {

//   it('render without errors', () => {
//     render(<AuthProvider ><Authentication /></AuthProvider>)
//   })

//   it('passed authentication', () => {
//     const TestComponent = () => {
//       const { isLoggedIn } = useContext(AuthContext)

//       return (
//         <>
//           <div data-testid='isloggedin-value'>{isLoggedIn.toString()}</div>
//           <Authentication />
//         </>
//       )
//     }

//     const form = render(<AuthProvider><TestComponent /></AuthProvider>)
//     // login input
//     const loginInput = form.getByLabelText('Имя пользователя')
//     fireEvent.change(loginInput, { target: { value: passedAuthTest.login } })
//     expect(loginInput.value).toBe('test')
//     // password input
//     const passwordInput = form.getByLabelText('Пароль')
//     fireEvent.change(passwordInput, { target: { value: passedAuthTest.password } })
//     expect(passwordInput.value).toBe('test')
//     // submit form
//     const submitButton = form.getByRole('submit')
//     fireEvent.click(submitButton)
//     // check AuthContext isLoggedIn value
//     const isloggedinValue = form.getByTestId('isloggedin-value').innerHTML
//     expect(isloggedinValue).toBe('true')
//   })

//   it('failed authentication', () => {
//     const TestComponent = () => {
//       const { isLoggedIn } = useContext(AuthContext)

//       return (
//         <>
//           <div data-testid='isloggedin-value'>{isLoggedIn.toString()}</div>
//           <Authentication />
//         </>
//       )
//     }

//     const form = render(<AuthProvider><TestComponent /></AuthProvider>)
//     // login input
//     const loginInput = form.getByLabelText('Имя пользователя')
//     fireEvent.change(loginInput, { target: { value: failedAuthTest.login } })
//     expect(loginInput.value).toBe('asd')
//     // password input
//     const passwordInput = form.getByLabelText('Пароль')
//     fireEvent.change(passwordInput, { target: { value: failedAuthTest.password } })
//     expect(passwordInput.value).toBe('qwe')
//     // submit form
//     const submitButton = form.getByRole('submit')
//     fireEvent.click(submitButton)
//     // check AuthContext isLoggedIn value
//     const isloggedinValue = form.getByTestId('isloggedin-value').innerHTML
//     expect(isloggedinValue).toBe('false')
//   })

//   it('change form type to registration', () => {
//     const TestComponent = () => {
//       const { authType } = useContext(AuthContext)

//       return (
//         <>
//           <div data-testid='authtype-value'>{authType.toString()}</div>
//           <Authentication />
//         </>
//       )
//     }
//     const form = render(<AuthProvider><TestComponent /></AuthProvider>)
//     // simulate click
//     expect(form.getByTestId('change-auth-type').innerHTML).toBe('Зарегистрируйтесь')
//     fireEvent.click(form.getByTestId('change-auth-type'))
//     // check new values
//     expect(form.getByTestId('authtype-value').innerHTML).toBe('signup')
//   })
// })