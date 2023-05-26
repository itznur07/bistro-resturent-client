import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /** Create user email and password */
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /** login user email and password */
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /** Google sign in systems */
  const singInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then(() => {
        alert("User sign in successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const authInfo = {
    createUser,
    loginUser,
    singInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
