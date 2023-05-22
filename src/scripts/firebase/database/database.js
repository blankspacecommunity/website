import { getDatabase, ref, update, get } from "firebase/database";
import { auth, database } from "../config/firebaseConfig";

const LOCAL_CAHE_SCHEMA_VERSION = "1.0.0";

/*
 * CREATE OBJECT
 * function to create an object
 * this function is used to return an object with a message and a code
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
 * Following are the features of this function:
 * 1. It will check whether local storage is supported by the browser
 * 2. It will check the cache version before fetching the cached data
 * 3. It will get the cached data if available
 * 4. It will fetch the data from firebase database if cached data is not available
 * 5. It will store the fetched data in local storage if possible
 */

const getUserProfileDetails = async (uid) => {
  let localStorageAvailable = false;

  // check whether local storage is supported by the browser
  if (typeof Storage !== "undefined") {
    localStorageAvailable = true;

    // check the cache version before fetching the cached data
    checkCacheVersion();
    
    // get the cached data if available
    const userProfileDetailsCache = localStorage.getItem(
      "userProfileDetailsCache"
    );

    // if cached data is available and the uid matches, return the cached data
    if (userProfileDetailsCache && JSON.parse(userProfileDetailsCache).data.uid === uid) {
      return JSON.parse(userProfileDetailsCache);
    }
  } else {
    // if local storage is not supported, return an object with a message and a code
    return createObject("Local storage is not supported", "database/local-storage-not-supported");
  }

  // if cached data is not available, fetch it from firebase database
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

    // create an object with the fetched data
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

  // if local storage is supported, store the fetched data in local storage with additional fields: isCached and version
  if (localStorageAvailable) {
    localStorage.setItem(
      "userProfileDetailsCache",
      JSON.stringify({ data: userProfileDetails, isCached: true, version: LOCAL_CAHE_SCHEMA_VERSION })
    );
  }

  // if everything is successful, return an object with the fetched data and a code
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

      // if there is no change in the data, return an object with a message and a code
      if(JSON.stringify(cachedDataObject) === JSON.stringify(incomingDataObject)){
        return createObject("No changes detected", "database/no-changes-detected");
      }
    }

  try{

  // update the user profile details in firebase database
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
    // TODO: is this error handling correct?
    return createObject(error.message, error.code);
  }

  // if everything is successful, return an object with a message and a code
  return createObject("Profile updated successfully", "database/profile-updated");
};

export { getUserProfileDetails, updateUserProfileDetails };


