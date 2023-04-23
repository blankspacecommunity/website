import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
// @AkhilLV is it okay to import like this?
import { auth, database } from "../config/firebaseConfig.js";

const createAccountWithEmailAndPassword = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Add user details to Realtime Database
    const { user } = userCredential;
    const userData = {
      name,
      email,
    };
    await set(ref(database, `users/${user.uid}`), userData);

    // Return user data if everything is successful
    return { user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

// @AkhilLV why getting error in this line?
export { createAccountWithEmailAndPassword };
