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
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/home";
import ProtectedRoute from "./components/feature/protected-route/protected-route";
import Contact from "./pages/contact/contact";

// const App = () => {
//   const user = useSelector(selectUser);
//   const userDispatch = useDispatch();

//   useEffect(() => {
//     onAuthStateChanged(auth, (userAuth) => {
//       if (userAuth) {
//         //logged
//         userDispatch(
//           login({
//             email: userAuth.email,
//             uid: userAuth.uid,
//             displayName: userAuth.displayName,
//             photoUrl: userAuth.photoURL,
//           })
//         );
//       } else {
//         //logout
//         userDispatch(logout());
//       }
//     });
//   }, []);

//   return (
//     <div className={classes["app"]}>
//       <Header />
//       {!user ? (
//         <Login />
//       ) : (
//         <div className={classes["app__body"]}>
//           <Sidebar />
//           <Feed />
//           <Widget />
//         </div>
//       )}
//     </div>
//   );
// };

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        path=""
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route
        path="contact"
        element={
          <ProtectedRoute redirect="/services">
            <Contact />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
