import React, { children, useState, createContext, useEffect } from "react";

import app from "../Firebase/Firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

//a context is a way to share values, like the current user's authentication state,
//across components without explicitly passing the props down through each level of the component tree
export const AuthContext = createContext();
const auth = getAuth(app); //authentication instance
const googleProvider = new GoogleAuthProvider();

const ReactContext = ({ children }) => {
  //state updations
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //creating a new users
  const createUsers = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in with email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //signup with email
  const loginwithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //logout
  const logout = () => {
    return signOut(auth);
  };

  //Manage users
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //   const signUpWithEmail = () => {};
  const authInfo = {
    user,
    createUsers,
    loginwithGoogle,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default ReactContext;
