import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyDcchy38KbnSOtGKNY7PChw4jNWMZ5sBWQ",
  authDomain: "sdi21-4e07e.firebaseapp.com",
  projectId: "sdi21-4e07e",
  storageBucket: "sdi21-4e07e.appspot.com",
  messagingSenderId: "424341256932",
  appId: "1:424341256932:web:f734d9e84afb5ce628caf1"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);