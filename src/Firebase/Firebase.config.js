// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB10S0LxCTKJyBmg3bbyhvQHfY7E5Rj1W4",
  authDomain: "mern-book-app.firebaseapp.com",
  projectId: "mern-book-app",
  storageBucket: "mern-book-app.appspot.com",
  messagingSenderId: "1025651789189",
  appId: "1:1025651789189:web:7c76b209bafe6de1fd48ec",
  measurementId: "G-YTXKQEK272",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
