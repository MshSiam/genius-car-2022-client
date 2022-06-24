import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged
} from "firebase/auth"
import { useEffect } from "react"
import { useState } from "react"
import initializeAunthecarion from "../Pages/Login/firebase/firebase.init"

initializeAunthecarion()

const auth = getAuth()
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
  const [users, setUsers] = useState({})

  //   google login
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUsers(result.user)
    })
  }

  //   observe user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user)
      } else {
        setUsers({})
      }
    })
    return () => unsubscribe
  }, [])

  //   sign out
  const logOut = () => {
    signOut(auth).then(() => {})
  }

  return {
    users,
    signInUsingGoogle,
    logOut
  }
}

export default useFirebase
