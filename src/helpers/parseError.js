const knownErrors = {
  // client errors
  "client/not-college-mail": {
    title: "Invalid email",
    message: "Please enter a valid email address provided by your college.",
  },
  "client/invalid-username": {
    title: "Invalid username",
    message:
      "Username must be under 15 characters and can only contain letters, numbers and underscores.",
  },
  "client/password-too-short": {
    title: "Password too short",
    message: "Password should be 6 or more characters.",
  },
  "client/passwords-dont-match": {
    title: "Passwords don't match",
    message: "Please check your passwords again.",
  },

  // Firebase errors
  "auth/weak-password": {
    title: "Weak password",
    message: "Your password is too weak. Please choose a strong password.",
  },

  "auth/operation-not-allowed": {
    title: "Operation not allowed",
    message: "You are not allowed to perform this operation.",
  },

  "auth/email-already-in-use": {
    title: "Email already in use",
    message: "The email address is already in use by another account.",
  },

  "auth/username-already-exists": {
    title: "Username already exists",
    message: "The username you entered is already taken.",
  },

  "auth/user-not-found": {
    title: "User not found",
    message: "We couldn't find an account with that email address.",
  },
  "auth/wrong-password": {
    title: "Wrong password",
    message: "The password you entered is incorrect.",
  },
  "auth/invalid-email": {
    title: "Invalid email",
    message: "The email you entered is invalid.",
  },
  "auth/too-many-requests": {
    title: "Too many requests",
    message: "Exceeded quota for email and password sign-in requests.",
  },
  "auth/user-disabled": {
    title: "Account disabled",
    message: "The account has been disabled by an administrator.",
  },
  "auth/invalid-credential": {
    title: "Invalid credential",
    message: "The credential is malformed or has expired.",
  },
  "auth/network-request-failed": {
    title: "Network error",
    message: "Please check your internet connection.",
  },
};

const parseError = (errorCode) => {
  if (knownErrors[errorCode]) {
    knownErrors[errorCode].delay = 6000;
    knownErrors[errorCode].position = "top-end";
    knownErrors[errorCode].code = ""; // what is this even for

    return knownErrors[errorCode];
  }

  return {
    title: "Something went wrong",
    code: "",
    message: `Please contact support with error code: ${errorCode}`,
    delay: 20000,
    position: "top-end",
  };
};

export default parseError;
