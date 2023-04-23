// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwETmTdbMwXQMftXpYRGWxffpQ4e3IrWE",
  authDomain: "blankspace-backend.firebaseapp.com",
  projectId: "blankspace-backend",
  storageBucket: "blankspace-backend.appspot.com",
  messagingSenderId: "519387477713",
  appId: "1:519387477713:web:7ffc2a4ae0051345b8b7f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
