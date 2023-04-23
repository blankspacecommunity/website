import { createUserWithEmailAndPassword } from "firebase/auth";
// @AkhilLV is it okay to import like this?
import { auth } from "../config/firebaseConfig.js";

const createAccountWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    return { user, error: null };
  } catch (error) {
    return { user: null, error };
  }
};

// @AkhilLV why getting error in this line?
export { createAccountWithEmailAndPassword };
