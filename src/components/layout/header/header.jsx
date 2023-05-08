import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderIcons from "../../ui/header-icons/header-icons";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../../../app/user-slice";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase-config";

import classes from "./header.module.css";

const Header = () => {
  const userDispatch = useDispatch();

  const onLogoutHandler = () => {
    userDispatch(logout());
    signOut(auth);
  };

  return (
    <header className={classes["header"]}>
      <div className={classes["header__left"]}>
        <LinkedInIcon className={classes["header--logo"]} />

        <div className={classes["header__left--search"]}>
          <SearchIcon className={classes["header__left--search-icon"]} />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className={classes["header__right"]}>
        <HeaderIcons Icon={HomeIcon} title="Home" />
        <HeaderIcons Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderIcons Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderIcons Icon={ChatIcon} title="Messaging" />
        <HeaderIcons Icon={NotificationsIcon} title="Notifications" />
        <HeaderIcons onClick={onLogoutHandler} avator={true} title="me" />
      </div>
    </header>
  );
};

export default Header;
