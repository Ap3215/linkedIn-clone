import React, { useState } from "react";

import { auth } from "../../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../../app/user-slice";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

import classes from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const userDispatch = useDispatch();

  const onLoginHandler = (e) => {
    e.preventDefault();

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
      })
      .catch((error) => alert(error));
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
