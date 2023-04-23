import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig.js";

const createAccountWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { user } = userCredential;
    return user;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { createAccountWithEmailAndPassword };
