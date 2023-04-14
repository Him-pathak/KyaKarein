import {
  ChatBubbleOutlineOutlined,
  QuestionAnswerOutlined,
  ThumbUpOutlined,
  ThumbDownOutlined,
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
import WidgetWrapper from "../../utils/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../state/userSlice";
import { Avatar } from "@material-ui/core";
import ReactHtmlParser from "html-react-parser";
import { green, red } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";

import ReactTimeAgo from "react-time-ago";
import AddAnswer from "../widgets/AddAnswer";
import { useTranslation } from "react-i18next";
// import axios from "axios";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

function PostWidget({ post }) {
  const { t } = useTranslation();

  const [isComments, setIsComments] = useState(false);
  const [isUpVoted, setIsUpVoted] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const Close = <CloseIcon />;

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const { palette } = useTheme();
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const primary = palette.primary.main;
  const primaryDark = palette.primary.dark;

  const picturePath = post.questionUrl;
  const anslength = 6;



  return (
    <WidgetWrapper m="2rem 0">

      {/* user description */}

      <Box gap="1rem" display={"flex"}>
        <Avatar src={post?.user?.photo} />
        <Box        >
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

        {/* audio */}
        
        {/* <ul style={{ listStyle: "none", padding: 0 }}>
        {post.audio.map((url) => (
          <li key={url}>
            <audio src={url} controls style={{ width: "98%" }} />
          </li>
        ))}
      </ul> */}


      {/* footer */}
      <FlexBetween mt="0.25rem" mb="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <Tooltip title={t('Upvote_')} placement="top" arrow>
              <IconButton onClick={() => 
              {
                setIsUpVoted(!isUpVoted)
                // likeQuestion(post?._id);
              }
              }>
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
            <Tooltip title={t('Downvote_')} placement="top" arrow>
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
            <Tooltip title={t('Answers_')} placement="top" arrow>
              <IconButton onClick={() => setIsComments(!isComments)}>
                <ChatBubbleOutlineOutlined />
              </IconButton>
            </Tooltip>
            <Typography>{anslength}</Typography>

            <Box ml={"0.2rem"}>
              <Tooltip title={t('AddAnswer_')} placement="top" arrow>
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
              boxShadow: 24,
              p: 4,
              borderRadius: "0.75rem",
            }}
          >
            <AddAnswer />
          </Box>
        </Modal>

        {/* <Tooltip title="Share" placement="top" arrow>
          <IconButton>
            <ShareOutlined />
          </IconButton>
        </Tooltip> */}
      </FlexBetween>

      <Divider />

            {/* answer */}

      {isComments && (
        <Box mt="0.5rem">
          {post?.allAnswers?.map((_a) => (
            <>
              <Box gap="1rem" display={"flex"} mt="0.5rem">
                <Avatar src={_a?.user?.photo} />
                <Box
                
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
                    
                  <FlexBetween gap="1rem">
                    <FlexBetween gap="0.3rem">
                      <Tooltip title={t('Upvote_')} placement="top" arrow>
                        <IconButton onClick={() => setIsUpVoted(!isUpVoted)}>
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
