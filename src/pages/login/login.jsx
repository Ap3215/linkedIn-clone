import React, { useState } from "react";

import { auth } from "../../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../../app/user-slice";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { useNavigate, useSearchParams } from "react-router-dom";

import classes from "./login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirectTo = searchParams.get("redirect") || "/";
  console.log(redirectTo);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const userDispatch = useDispatch();

  const onLoginHandler = (e) => {
    e.preventDefault();

    setPersistence(auth, browserSessionPersistence).then(() => {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      signInWithEmailAndPassword(auth, email, password)
        .then((userAuth) => {
          userDispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              profilePic: userAuth.user.photoURL,
            })
          );
          navigate(redirectTo);
        })
        .catch((error) => alert(error));
      return signInWithEmailAndPassword(auth, email, password);
    });
  };

  const register = () => {
    if (!name) {
      alert("please enter your full Name");
    }
    createUserWithEmailAndPassword(auth, email, password).then((userAuth) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: profilePic,
      })
        .then(() => {
          userDispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
            })
          );
        })

        .catch((error) => {
          console.log("error", error);
          alert(error.message);
        });
      console.log("userAuth", userAuth);
    });
  };
  return (
    <div className={classes["login"]}>
      <img src="/images/Linkedin-Logo.png" alt="logo" />
      <form onSubmit={onLoginHandler}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter FullName"
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile Pic Url"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password"
        />
        <button type="submit">SignIn</button>
      </form>
      <p>
        Not an Account?{" "}
        <span className={classes["login__register"]} onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
