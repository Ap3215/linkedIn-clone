import React, { useEffect, useState } from "react";

import classes from "./feed.module.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "../../ui/input-option/input-option";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Post from "../../ui/post/post";
import { db } from "../../../firebase/firebase-config";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  serverTimestamp,
  orderBy,
  limit,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/user-slice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const user = useSelector(selectUser);
  // console.log(user);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) =>
      setPosts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => unsubscribe();
  }, []);

  const onSendPostHanlder = (e) => {
    e.preventDefault();

    const docRef = addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef, docRef.id);
    setInput("");
  };

  return (
    <div className={classes["feed"]}>
      <div className={classes["feed__input-container"]}>
        <div className={classes["feed__input"]}>
          <CreateIcon className={["create-icon"]} />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={onSendPostHanlder} type="submit">
              submit
            </button>
          </form>
        </div>
        <div className={classes["feed__inputOptions"]}>
          <InputOption
            className={classes["feed__icon"]}
            Icon={ImageIcon}
            title="Photo"
            color="blue"
          />
          <InputOption
            className={classes["feed__icon"]}
            Icon={EventNoteIcon}
            title="Event"
            color="green"
          />
          <InputOption
            className={classes["feed__icon"]}
            Icon={SubscriptionsIcon}
            title="Video"
            color="yellow"
          />
          <InputOption
            className={classes["feed__icon"]}
            Icon={CalendarMonthIcon}
            title="Write article"
            color="orange"
          />
        </div>
      </div>

      {/* post */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
