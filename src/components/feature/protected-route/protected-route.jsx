import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../../app/user-slice";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { auth } from "../../../firebase/firebase-config";

const ProtectedRoute = ({ children, redirect = "/login" }) => {
  const { pathname } = useLocation();

  const user = useSelector(selectUser);
  const userDispatch = useDispatch();

  let url = redirect;
  if (pathname !== "/") {
    url = `${redirect}?redirect=${pathname}`;
  }

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
  if (!user) {
    return <Navigate to={url} />;
  }
  return children;
};

export default ProtectedRoute;
