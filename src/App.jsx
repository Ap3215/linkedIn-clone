import { useState } from "react";
import Header from "./components/layout/header/header";
import Sidebar from "./components/feature/sidebar/sidebar";
import classes from "./App.module.css";
import Feed from "./components/feature/feed/feed";

import Login from "./pages/login/login";
import { login, logout, selectUser } from "./app/user-slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import Widget from "./components/feature/widget/widget";

const App = () => {
  const user = useSelector(selectUser);
  const userDispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //logged
        userDispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //logout
        userDispatch(logout());
      }
    });
  }, []);

  return (
    <div className={classes["app"]}>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className={classes["app__body"]}>
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      )}
    </div>
  );
};

export default App;
