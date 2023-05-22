import { getDatabase, ref, update, get } from "firebase/database";
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
 * GET USER PROFILE DETAILS
 * function to get user profile details from database
 */

const getUserProfileDetails = async (uid) => {
  // check whether the browser supports local storage api
  let localStorageAvailable = false;

  if (typeof Storage !== "undefined") {
    localStorageAvailable = true;

    // check whether the user profile details are cached in local storage
    const userProfileDetailsCache = localStorage.getItem(
      "userProfileDetailsCache"
    );

    // if cached data is available and the uid matches, return the cached data
    if (userProfileDetailsCache && JSON.parse(userProfileDetailsCache).data.uid === uid) {
      return JSON.parse(userProfileDetailsCache);
    }
  } else {
    // throw an error if local storage is not supported
    throw createError(
      "Local storage is not supported by your browser",
      "local-storage-not-supported"
    );
  }

  // if cached data is not available, fetch it from database
  const snapshot = await get(ref(database, `users/${uid}`));
  const { name, email, username, phone, bio } = snapshot.val();
  const userProfileDetails = { uid, name, email, username, phone, bio };

  // cache the data in local storage if possible
  if (localStorageAvailable) {
    localStorage.setItem(
      "userProfileDetailsCache",
      JSON.stringify({ data: userProfileDetails, isCached: true })
    );
  }
  return { data: userProfileDetails, isCached: false };
};

/*
 * UPDATE USER PROFILE DETAILS
 * function to update user profile details in database
 */

const updateUserProfileDetails = async () => { };

export { getUserProfileDetails, updateUserProfileDetails };
