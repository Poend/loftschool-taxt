import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

const user = {
  login: 'test',
  password: 'test'
}

export const AuthProvider = ({children}) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const login = (login, password) => setIsLoggedIn(login === user.login && password === user.password ? true : false)
  const logout = () => setIsLoggedIn(false)

  return (
    <AuthContext.Provider value={{
        isLoggedIn,
        login,
        logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}