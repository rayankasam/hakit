import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUum8z53BYwppAZzTbgSKLExDGtOuEvdA",
  authDomain: "deltahacks-2023.firebaseapp.com",
  projectId: "deltahacks-2023",
  storageBucket: "deltahacks-2023.appspot.com",
  messagingSenderId: "843926745759",
  appId: "1:843926745759:web:a61cfe2d363846360e68aa",
  measurementId: "G-MTZ3H7CVKD",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
