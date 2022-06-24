import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebase.config"

const initializeAunthecarion = () => {
  initializeApp(firebaseConfig)
}

export default initializeAunthecarion
