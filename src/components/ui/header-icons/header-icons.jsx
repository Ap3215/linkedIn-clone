import React from "react";

import classes from "./header-icons.module.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/user-slice";

const HeaderIcons = ({ avator, Icon, title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className={classes["header-icons"]}>
      {Icon && <Icon className={classes["header-icons--icon"]} />}
      {avator && (
        <Avatar className={classes["header-icons--avator"]}>
          {user?.email[0]}
        </Avatar>
      )}
      <h4 className={classes["header-icons__title"]}>{title}</h4>
    </div>
  );
};

export default HeaderIcons;
