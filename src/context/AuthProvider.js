import React from "react"
import { createContext } from "react"
import useFirebase from "../hooks/useFirebase"
import initializeAunthecarion from "../Pages/Login/firebase/firebase.init"

initializeAunthecarion()
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const allFirebase = useFirebase()

  return (
    <AuthContext.Provider value={allFirebase}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
