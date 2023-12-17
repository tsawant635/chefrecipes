// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGGg7JgdGw-5oH2Q0uu2pd4sSTBGvYMls",
  authDomain: "chefrecipes-53dee.firebaseapp.com",
  projectId: "chefrecipes-53dee",
  storageBucket: "chefrecipes-53dee.appspot.com",
  messagingSenderId: "353382124497",
  appId: "1:353382124497:web:f3993f748422540b09aef0",
  measurementId: "G-D8YFT74YHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };