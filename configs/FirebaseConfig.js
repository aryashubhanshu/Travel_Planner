// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvi5t-VK6fVWl5LdTuscHvKNeFekUxzgo",
  authDomain: "travel-planner-84ea1.firebaseapp.com",
  projectId: "travel-planner-84ea1",
  storageBucket: "travel-planner-84ea1.appspot.com",
  messagingSenderId: "161512810826",
  appId: "1:161512810826:web:2a0a761b595276389639b3",
  measurementId: "G-J8WVJLV3RS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
