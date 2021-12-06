// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUkwgKeViQ50x1Q8UXaIFbKM9zWtVyfaA",
  authDomain: "call-nourse-app.firebaseapp.com",
  databaseURL: "https://call-nourse-app-default-rtdb.firebaseio.com",
  projectId: "call-nourse-app",
  storageBucket: "call-nourse-app.appspot.com",
  messagingSenderId: "74224773990",
  appId: "1:74224773990:web:40722c6f3cd40b556b76a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }