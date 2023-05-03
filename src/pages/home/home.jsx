import React from "react";
import Sidebar from "../../components/feature/sidebar/sidebar";
import Header from "../../components/layout/header/header";
import Widget from "../../components/feature/widget/widget";
import Feed from "../../components/feature/feed/feed";

import classes from "./home.module.css";

const Home = () => {
  return (
    <div className={["home"]}>
      <Header />
      <div className={classes["home__body"]}>
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
};

export default Home;
