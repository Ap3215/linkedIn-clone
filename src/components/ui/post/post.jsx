import React, { forwardRef } from "react";

import classes from "./post.module.css";
import { Avatar } from "@mui/material";
import InputOption from "../input-option/input-option";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import RepeatIcon from "@mui/icons-material/Repeat";

const Post = forwardRef(({ name, description, photoUrl, message }, ref) => {
  return (
    <div ref={ref} className={classes["post"]}>
      <div className={classes["post__header"]}>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className={classes["post__info"]}>
          <h2>{name} </h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={classes["post__body"]}>
        <p>{message}</p>
      </div>
      <div className={classes["post__buttons"]}>
        <InputOption
          className={classes["post__button--icon"]}
          Icon={ThumbUpOffAltIcon}
          title="Like"
        />
        <InputOption
          className={classes["post__button--icon"]}
          Icon={ChatIcon}
          title="Comment"
        />
        <InputOption
          className={classes["post__button--icon"]}
          Icon={RepeatIcon}
          title="Repeat"
        />
        <InputOption
          className={classes["post__button--icon"]}
          Icon={SendIcon}
          title="Share"
        />
      </div>
    </div>
  );
});

export default Post;
