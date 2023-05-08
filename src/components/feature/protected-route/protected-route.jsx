import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "../../../app/user-slice";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, useLocation, useSearchParams } from "react-router-dom";
import { auth } from "../../../firebase/firebase-config";

const ProtectedRoute = ({ children, redirect = "/login" }) => {
  const { pathname } = useLocation();

  const lodingRef = useRef(true);

  const user = useSelector(selectUser);
  const userDispatch = useDispatch();

  let url = redirect;
  if (pathname !== "/") {
    url = `${redirect}?redirect=${pathname}`;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      console.log("userAuth", userAuth);
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
        // setIsLoading(false);
        lodingRef.current = false;
      } else {
        //logout
        userDispatch(logout());
        // setIsLoading(false);
        lodingRef.current = false;
      }
    });
  }, []);

  if (lodingRef.current) {
    return <p>Loading ...</p>;
  }

  console.log("user", user);
  if (!user) {
    return <Navigate to={url} />;
  }

  return children;
};

export default ProtectedRoute;
