import React, { useContext } from 'react'
import Forms from '../Forms'
import { AuthProvider, AuthContext } from '../../Context/AuthContext'
import { render, fireEvent } from '@testing-library/react'

const { Registration } = Forms

describe('testing registration form', () => {

  it('render without errors', () => {
    render(<AuthProvider><Registration /></AuthProvider>)
  })

  it('change form type to registration', () => {
    const TestComponent = () => {
      const { authType } = useContext(AuthContext)

      return (
        <>
          <div data-testid='authtype-value'>{authType.toString()}</div>
          <Registration />
        </>
      )
    }
    const form = render(<AuthProvider><TestComponent /></AuthProvider>)
    // simulate click
    expect(form.getByTestId('change-auth-type').innerHTML).toBe('Войти')
    fireEvent.click(form.getByTestId('change-auth-type'))
    // check new values
    expect(form.getByTestId('authtype-value').innerHTML).toBe('signin')
  })

})