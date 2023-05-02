import React from "react";

import classes from "./widget.module.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widget = () => {
  const newArticle = (heading, subtitle) => (
    <div className={classes["widget__article"]}>
      <div className={classes["widget__article--left"]}>
        <FiberManualRecordIcon />
      </div>
      <div className={classes["widget__article--right"]}>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className={classes["widget"]}>
      <div className={classes["widget__header"]}>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newArticle("IT has an attrition problem", "1d ago . 4,509 readers")}
      {newArticle("SAP to hire 1,000 people", "1d ago . 13,451 readers")}
      {newArticle(
        "Here are 2023 top compaines to watch",
        "1d ago . 17,251 readers"
      )}
      {newArticle("Green Energy get founding boost", "1d ago . 980 readers")}
      {newArticle("The rise of retuning employees", "1d ago . 2,841 readers")}
      {newArticle("Top Newsletter to follow", "1d ago . 261 readers")}
    </div>
  );
};

export default Widget;
