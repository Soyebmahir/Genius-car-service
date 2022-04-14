// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVk6Tpz9JlrT0b7Kj4K7wmlrEjLLPODs8",
  authDomain: "genius-car-service-8ed34.firebaseapp.com",
  projectId: "genius-car-service-8ed34",
  storageBucket: "genius-car-service-8ed34.appspot.com",
  messagingSenderId: "743926310743",
  appId: "1:743926310743:web:7c7f8b2c95bec88a94c012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;