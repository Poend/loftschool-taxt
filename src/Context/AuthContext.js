import React, { createContext, useState } from 'react'

export const authContext = createContext()
const AuthProvider = authContext.Provider

const user = {
  login: 'test',
  password: 'test'
}

const AuthContext = ({children}) => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const login = (login, password) => setIsLoggedIn(login === user.login && password === user.password ? true : false)
  const logout = () => setIsLoggedIn(false)

  return (
    <AuthProvider value={{
        isLoggedIn,
        login,
        logout
    }}>
      {children}
    </AuthProvider>
  )
}

export default AuthContext