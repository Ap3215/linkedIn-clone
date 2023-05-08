import React from "react";
import Sidebar from "../../components/feature/sidebar/sidebar";

import Widget from "../../components/feature/widget/widget";
import Feed from "../../components/feature/feed/feed";

import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={classes["home"]}>
      <Sidebar />
      <Feed />
      <Widget />
    </div>
  );
};

export default Home;
