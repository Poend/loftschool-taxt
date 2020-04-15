import React, { createContext } from 'react'

const auth = {
  isLoggedIn: false,
  login(login, password) {
    this.isLoggedIn = true
  },
  logout() {
    this.isLoggedIn = false
  }
};

export const authContext = createContext()
const AuthProvider = authContext.Provider

const AuthContext = ({children}) => {

  return (
    <AuthProvider value={auth}>
      {children}
    </AuthProvider>
  )
}


export default AuthContext