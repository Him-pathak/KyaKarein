// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQocrcwf4WSpGCfOc28EPUpAOWj2tkz9c",
  authDomain: "kyakarein-90534.firebaseapp.com",
  projectId: "kyakarein-90534",
  storageBucket: "kyakarein-90534.appspot.com",
  messagingSenderId: "361380461502",
  appId: "1:361380461502:web:974194633b89c9b72697ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
