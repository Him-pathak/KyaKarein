import {
  ChatBubbleOutlineOutlined,
  QuestionAnswerOutlined,
  ThumbUpOutlined,
  ThumbDownOutlined,
  // ThumbUpIcon,
  // ThumbDownIcon,
  ShareOutlined,
} from "@mui/icons-material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import {
  Box,
  Divider,
  IconButton,
  Modal,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetween from "../../utils/FlexBetween";
// import Friend from "components/Friend";
import WidgetWrapper from "../../utils/WidgetWrapper";
import UserImage from "../../utils/UserImage";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../state/userSlice";
import { Avatar } from "@material-ui/core";
import ReactHtmlParser from "html-react-parser";
import { green, red } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";

import ReactTimeAgo from "react-time-ago";
import MyPostWidget from "../widgets/MyPostWidget";
import AddAnswer from "../widgets/AddAnswer";
// import { setPost } from "state";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

function PostWidget({ post }) {
  const [isComments, setIsComments] = useState(false);
  const [isUpVoted, setIsUpVoted] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;

  const dispatch = useDispatch();
  // const token = useSelector((state) => state.token);

  const user = useSelector(selectUser);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const primary = palette.primary.main;
  // const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  // const main = palette.neutral.main;

  //likes
  // const loggedInUserId = useSelector((state) => state.user._id);
  // const isLiked = Boolean(likes[loggedInUserId]);
  // const likeCount = Object.keys(likes).length;

  const picturePath = post.questionUrl;
  const anslength = 6;

  // console.log(post?.user?Box

  // const patchLike = async () => {
  //   const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
  //     method: "PATCH",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ userId: loggedInUserId }),
  //   });
  //   const updatedPost = await response.json();
  //   dispatch(setPost({ post: updatedPost }));
  // };

  return (
    <WidgetWrapper m="2rem 0">
      {/* user description */}
      <Box gap="1rem" display={"flex"}>
        {/* <UserImage image={post?.user?.photo} size="55px" /> */}
        <Avatar src={post?.user?.photo} />
        <Box
        // onClick={() => {
        //   navigate(`/profile/${friendId}`);
        //   navigate(0);
        //}}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: primaryDark,
                cursor: "pointer",
              },
            }}
          >
            {post?.user?.userName}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            <LastSeen date={post?.createdAt} />
          </Typography>
        </Box>
      </Box>
      {/* post description */}

      <Typography color={main} sx={{ mt: "1rem" }}>
        {post?.questionName}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
          src={picturePath}
        />
      )}

      {/* footer */}
      <FlexBetween mt="0.25rem" mb="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <Tooltip title="Upvote" placement="top" arrow>
              <IconButton onClick={() => setIsUpVoted(!isUpVoted)}>
                {/* currently colour changes on click but should be based on backend count */}
                {isUpVoted ? (
                  <ThumbUpIcon sx={{ color: green["A400"] }} />
                ) : (
                  <ThumbUpOutlined />
                )}
              </IconButton>
            </Tooltip>
            <Typography>{anslength}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <Tooltip title="Downvote" placement="top" arrow>
              <IconButton onClick={() => setIsDownVoted(!isDownVoted)}>
                {isDownVoted ? (
                  <ThumbDownIcon sx={{ color: red["A400"] }} />
                ) : (
                  <ThumbDownOutlined />
                )}
              </IconButton>
            </Tooltip>
            <Typography>{anslength}</Typography>
          </FlexBetween>

          <FlexBetween gap="0.3rem">
            <Tooltip title="Answers" placement="top" arrow>
              <IconButton onClick={() => setIsComments(!isComments)}>
                <ChatBubbleOutlineOutlined />
              </IconButton>
            </Tooltip>
            <Typography>{anslength}</Typography>

            <Box ml={"0.2rem"}>
              <Tooltip title="AddAnswer" placement="top" arrow>
                <IconButton
                  onClick={() => {
                    setIsModalOpen(true);
                  }}
                >
                  <QuestionAnswerOutlined />
                </IconButton>
              </Tooltip>
            </Box>
          </FlexBetween>
        </FlexBetween>

        <Modal
          open={isModalOpen}
          closeIcon={Close}
          onClose={() => setIsModalOpen(false)}
          closeOnEsc
          center
          closeOnOverlayClick={false}
          styles={{
            overlay: {
              height: "auto",
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "30%",
              bgcolor: "background.paper",
              // border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              borderRadius: "0.75rem",
            }}
          >
            <AddAnswer />
          </Box>
        </Modal>

        <Tooltip title="Share" placement="top" arrow>
          <IconButton>
            <ShareOutlined />
          </IconButton>
        </Tooltip>
      </FlexBetween>

      <Divider />

            {/* answer */}

      {isComments && (
        <Box mt="0.5rem">
          {post?.allAnswers?.map((_a) => (
            <>
              <Box gap="1rem" display={"flex"} mt="0.5rem">
                {/* <UserImage image={post?.user?.photo} size="55px" /> */}
                <Avatar src={_a?.user?.photo} />
                <Box
                // onClick={() => {
                //   navigate(`/profile/${friendId}`);
                //   navigate(0);
                //}}
                >
                  <Typography
                    color={main}
                    variant="h5"
                    fontWeight="500"
                    sx={{
                      "&:hover": {
                        color: primaryDark,
                        cursor: "pointer",
                      },
                    }}
                  >
                    {_a?.user?.userName}
                  </Typography>
                  <Typography color={medium} fontSize="0.75rem">
                    {/* <LastSeen date={post?.createdAt} /> */}last seen
                  </Typography>
                </Box>
              </Box>

              <Typography color={main} sx={{ mt: "1rem" }}>
                {ReactHtmlParser(_a?.answer)}
              </Typography>
              <Divider />

                  {/* footer */}
                    
                {/* <FlexBetween mt="0.25rem" mb="0.25rem"> */}
                  <FlexBetween gap="1rem">
                    <FlexBetween gap="0.3rem">
                      <Tooltip title="Upvote" placement="top" arrow>
                        <IconButton onClick={() => setIsUpVoted(!isUpVoted)}>
                          {/* currently colour changes on click but should be based on backend count */}
                          {isUpVoted ? (
                            <ThumbUpIcon sx={{ color: green["A400"] }} />
                          ) : (
                            <ThumbUpOutlined />
                          )}
                        </IconButton>
                      </Tooltip>
                      <Typography>{anslength}</Typography>
                    </FlexBetween>

                    <FlexBetween gap="0.3rem">
                      <Tooltip title="Downvote" placement="top" arrow>
                        <IconButton onClick={() => setIsDownVoted(!isDownVoted)}>
                          {isDownVoted ? (
                            <ThumbDownIcon sx={{ color: red["A400"] }} />
                          ) : (
                            <ThumbDownOutlined />
                          )}
                        </IconButton>
                      </Tooltip>
                      <Typography>{anslength}</Typography>
                    </FlexBetween>
                </FlexBetween>

            </>
          ))}
        </Box>
      )}
    </WidgetWrapper>
  );
}

export default PostWidget;
