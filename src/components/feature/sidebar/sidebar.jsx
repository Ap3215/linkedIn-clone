import React from "react";

import classes from "./sidebar.module.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/user-slice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className={classes["sidebar__recent-item"]}>
      <span className={classes["sidebar__hash"]}>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className={classes["sidebar"]}>
      <div className={classes["sidebar__top"]}>
        <img src="/images/55k1z8997gh8dwtihm11aajyq.svg" alt="back" />
        <Avatar className={classes["sidebar__avator"]}>{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className={classes["sidebar__stats"]}>
        <div className={classes["sidebar__stat"]}>
          <p>Who viewed you</p>
          <p className={classes["sidebar__stat--number"]}>1,521</p>
        </div>
        <div className={classes["sidebar__stat"]}>
          <p>viewed on Post</p>
          <p className={classes["sidebar__stat--number"]}>2,451</p>
        </div>
      </div>

      <div className={classes["sidebar__bottom"]}>
        <p>Recent</p>
        {recentItem("React js")}
        {recentItem("Developing")}
        {recentItem("Programming")}
        {recentItem("Designing")}
      </div>
    </div>
  );
};

export default Sidebar;
