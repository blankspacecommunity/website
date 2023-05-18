/* eslint-disable no-useless-catch */
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
  verifyPasswordResetCode,
} from "firebase/auth";
import { ref, set, get, child } from "firebase/database";
import { auth, database } from "../config/firebaseConfig";

/*
 * CREATE ERROR
 * function to create an error object
 */

const createError = (message, code) => ({
  message,
  code,
});

/*
 * VERIFY NEW PASSWORD
 * Verify the new password and update the user's password.
 */

const verifyNewPassword = async (code, newPassword) => {
  verifyPasswordResetCode(auth, code)
    .then(() => {
      // Password reset code is valid

      confirmPasswordReset(auth, code, newPassword)
        .then(() =>
          // Password reset successful
          ({ error: null })
        )
        .catch(() => {
          // Password reset failed
          throw createError("Password reset failed", "password-reset-failed");
        });
    })
    .catch(() => {
      // Password reset code is invalid
      throw createError(
        "Password reset code is invalid",
        "password-reset-code-invalid"
      );
    });
};

/*
 * RESET PASSWORD
 * Send a password reset email to the user.
 */

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { error: null };
  } catch (error) {
    return { error };
  }
};

/*
 * SIGN OUT USER
 * Sign out the current user.
 */

const signOutUser = async () => {
  try {
    const user = auth.currentUser;
    if (user) {
      await signOut(auth);
      return { error: null };
    }
    return new Error("No user signed in");
  } catch (error) {
    return error;
  }
};

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

const createAccountWithEmailAndPassword = async (
  name,
  email,
  username,
  password
) => {
  try {
    // get usernames and check if the username already exists otherwise throw an error
    const usernamesRef = ref(database, "user-usernames");
    const snapshot = await get(child(usernamesRef, username));

    if (snapshot.exists()) {
      const error = new Error("Username already exists");
      error.code = "auth/username-already-exists";
      throw error;
    }

    // if username doesn't exist, create the user account
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;

    // update the user profile with the display name
    try {
      await updateProfile(user, {
        displayName: name,
      });
    } catch (error) {
      throw error;
    }

    // add user details to the database, including the username
    await set(child(ref(database), `users/${user.uid}`), {
      name,
      email,
      username,
    });

    // add the username to the database separately
    await set(child(usernamesRef, username), user.uid);
    return { user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

export {
  createAccountWithEmailAndPassword,
  signInUserWithEmailAndPassword,
  signOutUser,
  resetPassword,
  verifyNewPassword,
};
