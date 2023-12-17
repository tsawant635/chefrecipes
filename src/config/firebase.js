
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey:"AIzaSyBGGg7JgdGw-5oH2Q0uu2pd4sSTBGvYMls",
  authDomain: "chefrecipes-53dee.firebaseapp.com",
  projectId:"chefrecipes-53dee",
  storageBucket: "chefrecipes-53dee.appspot.com",
  messagingSenderId:"353382124497",
  appId: "1:353382124497:web:f3993f748422540b09aef0",
  measurementId:"G-D8YFT74YHH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
