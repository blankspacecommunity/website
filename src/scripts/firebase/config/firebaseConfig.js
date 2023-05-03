// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwETmTdbMwXQMftXpYRGWxffpQ4e3IrWE",
  authDomain: "blankspace-backend.firebaseapp.com",
  databaseURL:
    "https://blankspace-backend-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blankspace-backend",
  storageBucket: "blankspace-backend.appspot.com",
  messagingSenderId: "519387477713",
  appId: "1:519387477713:web:7ffc2a4ae0051345b8b7f0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database, signOut };
