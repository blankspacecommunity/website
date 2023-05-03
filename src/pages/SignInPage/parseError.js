const knownErrors = {
  // client errors
  "client/not-college-mail": {
    title: "Invalid email",
    code: "",
    message: "Please enter a valid email address provided by your college.",
    delay: 6000,
    position: "top-end",
  },

  // Firebase errors
  "auth/user-not-found": {
    title: "User not found",
    code: "",
    message: "We couldn't find an account with that email address.",
    delay: 6000,
    position: "top-end",
  },
  "auth/wrong-password": {
    title: "Wrong password",
    code: "",
    message: "The password you entered is incorrect.",
    delay: 6000,
    position: "top-end",
  },
  "auth/invalid-email": {
    title: "Invalid email",
    code: "",
    message: "The email you entered is invalid.",
    delay: 6000,
    position: "top-end",
  },
  "auth/too-many-requests": {
    title: "Too many requests",
    code: "",
    message: "Exceeded quota for email and password sign-in requests.",
    delay: 6000,
    position: "top-end",
  },
  "auth/user-disabled": {
    title: "Account disabled",
    code: "",
    message: "The account has been disabled by an administrator.",
    delay: 6000,
    position: "top-end",
  },
  "auth/invalid-credential": {
    title: "Invalid credential",
    code: "",
    message: "The credential is malformed or has expired.",
    delay: 6000,
    position: "top-end",
  },
  "auth/network-request-failed": {
    title: "Network error",
    code: "",
    message: "Please check your internet connection.",
    delay: 6000,
    position: "top-end",
  },
};

const parseError = (errorCode) => {
  if (knownErrors[errorCode]) {
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
