// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDcchy38KbnSOtGKNY7PChw4jNWMZ5sBWQ",

  authDomain: "sdi21-4e07e.firebaseapp.com",

  projectId: "sdi21-4e07e",

  storageBucket: "sdi21-4e07e.appspot.com",

  messagingSenderId: "424341256932",

  appId: "1:424341256932:web:f734d9e84afb5ce628caf1"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);