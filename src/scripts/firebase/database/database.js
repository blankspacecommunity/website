import { getDatabase, ref, update, get } from "firebase/database";
import { auth, database } from "../config/firebaseConfig";

const user = auth.currentUser;

if (user) {
  console.log("from database.js the user is: ", user);
}

const getUserProfileDetails = async (uid) => {
  console.log("from getUserProfileDetails: uid", uid);

  const snapshot = await get(ref(database, `users/${uid}`));
  const { name, email, username, phone, bio } = snapshot.val();

  console.log("data returning from getUserProfileDetails: ", {
    name,
    email,
    username,
    phone,
    bio,
  });
  return { name, email, username, phone, bio };
};

const updateUserProfileDetails = async () => {};

export { getUserProfileDetails, updateUserProfileDetails };
