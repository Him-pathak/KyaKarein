import React, { useEffect, useState } from "react";
import "./css/Feed.css";
import PostWidget from "./PostWidget";
import axios from "axios";
import MyPostWidget from "../widgets/MyPostWidget";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/questions")
      .then((res) => {
        console.log(res.data.reverse());
        setPosts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="feed">
      <MyPostWidget/>
      {posts.map((post, index) => (
        <PostWidget key={index} post={post} />
      ))}
    </div>
  );
}

export default Feed;
