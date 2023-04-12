// import MyPostWidget from "../widgets/MyPostWidget";
// import PostsWidget from "../widgets/MyPostWidget";
// import { Box } from "@mui/material";

// const picturePath = `https://source.unsplash.com/random/60x60`;

// function Feed() {
//   return (
//     <Box>
//         <MyPostWidget picturePath={picturePath}/>
//         <PostsWidget/>
//     </Box>
//   )
// }

// export default Feed;

import React, { useEffect, useState } from "react";
import "./css/Feed.css";
import PostWidget from "./PostWidget";
import axios from "axios";
import MyPostWidget from "../widgets/MyPostWidget";
// import PostWidget from "./PostWidget";

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
        // console.log({index});
      ))}
    </div>
  );
}

export default Feed;
