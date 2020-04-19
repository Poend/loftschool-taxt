import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const user = {
  login: 'test',
  password: 'test'
}

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authType, setAuthType] = useState('signin')
  const login = (login, password) => setIsLoggedIn(login === user.login && password === user.password ? true : false)
  const logout = () => setIsLoggedIn(false)
  const toAuthentication = (event) => {
    event.preventDefault()
    setAuthType('signin')
  }
  const toRegistration = (event) => {
    event.preventDefault()
    setAuthType('signup')
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      authType,
      login,
      logout,
      toAuthentication,
      toRegistration
    }}>
      {children}
    </AuthContext.Provider>
  )
}