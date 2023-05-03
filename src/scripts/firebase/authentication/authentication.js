import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, database } from "../config/firebaseConfig";

/*
 * SIGN IN
 * Sign in with email and password.
 */

const signInUserWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return { user: userCredential.user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

/*
 * CREATE ACCOUNT
 * Create a new user account with email and password, and add user details to Realtime Database.
 */
const createAccountWithEmailAndPassword = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const { user } = userCredential;
    const userData = {
      name,
      email,
    };
    // Add user details to Realtime Database
    await set(ref(database, `users/${user.uid}`), userData);

    return { user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

export { createAccountWithEmailAndPassword, signInUserWithEmailAndPassword };
