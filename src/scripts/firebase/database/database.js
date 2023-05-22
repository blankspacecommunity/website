import { getDatabase, ref, update, get } from "firebase/database";
import { auth, database } from "../config/firebaseConfig";

const LOCAL_CAHE_SCHEMA_VERSION = "1.0.0";

/*
 * CREATE OBJECT
 * function to create an object
 */

const createObject = (message, code) => ({
  message,
  code,
});

/*
* CHECK CACHE VERSION
* function to check the cache version
* if the cache version is different from the current version, clear the cache
* this is done to prevent any errors due to schema changes
* this function will be called before fetching the cached data
*/ 

const checkCacheVersion = () => {
  const userProfileDetailsCache = localStorage.getItem("userProfileDetailsCache");

  if (userProfileDetailsCache && JSON.parse(userProfileDetailsCache).version !== LOCAL_CAHE_SCHEMA_VERSION) {
    localStorage.removeItem("userProfileDetailsCache");
  }
};

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
    throw createObject(
      "Local storage is not supported by your browser",
      "local-storage-not-supported"
    );
  }

  // if cached data is not available, fetch it from database
  const snapshot = await get(ref(database, `users/${uid}`));
  const {
    username,
    email,
    name,
    phoneNumber,
    bio,
    haveExperience,
    isLearning,
    yearOfAdmission,
    admissionNumber,
    degree,
    course,
    residentialStatus,
    location,
    linkedinProfile,
    discordProfile,
    githubProfile,
    twitterProfile, } = snapshot.val();
  const userProfileDetails = {
    uid,
    username,
    email,
    name,
    phoneNumber,
    bio,
    haveExperience,
    isLearning,
    yearOfAdmission,
    admissionNumber,
    degree,
    course,
    residentialStatus,
    location,
    linkedinProfile,
    discordProfile,
    githubProfile,
    twitterProfile,
  };

  // cache the data in local storage if possible
  if (localStorageAvailable) {
    localStorage.setItem(
      "userProfileDetailsCache",
      JSON.stringify({ data: userProfileDetails, isCached: true, version: LOCAL_CAHE_SCHEMA_VERSION })
    );
  }
  return { data: userProfileDetails, isCached: false };
};

/*
 * UPDATE USER PROFILE DETAILS
 * function to update user profile details in database
 * Following are the features of this function:
 * 1. It will update the user profile details in database
 * 2. It will update the user profile details in local storage if possible
 * 3. It will check whether there is any change in the data
 */

const updateUserProfileDetails = async (uid, data) => {
  const userProfileDetailsCache = localStorage.getItem("userProfileDetailsCache");

    // check whether there is any change in the data
    if(userProfileDetailsCache){
      const cachedDataObject = JSON.parse(localStorage.getItem("userProfileDetailsCache")).data;
      const incomingDataObject = data;

      // if there is no change in the data, return an error
      if(JSON.stringify(cachedDataObject) === JSON.stringify(incomingDataObject)){
        return createObject("No changes detected", "database/no-changes-detected");
      }
    }

  try{

  // update the user profile details in database
  await update(ref(database, `users/${uid}`), data);

  // update the user profile details in local storage if possible
  if (typeof Storage !== "undefined") {
    if (userProfileDetailsCache) {
      localStorage.setItem(
        "userProfileDetailsCache",
        JSON.stringify({
          data: { ...JSON.parse(userProfileDetailsCache).data, ...data },
          isCached: true,
          version: LOCAL_CAHE_SCHEMA_VERSION,
        })
      );
    }
  }}
  catch(error){
    return createObject(error.message, error.code);
  }

  return createObject("Profile updated successfully", "database/profile-updated");
};

export { getUserProfileDetails, updateUserProfileDetails };
