import {
  MicOutlined,
  StopCircle,
} from "@mui/icons-material";
import {
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import { Avatar } from "@material-ui/core";
import FlexBetween from "../../utils/FlexBetween";
import WidgetWrapper from "../../utils/WidgetWrapper"; 
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../state/userSlice";
import axios from "axios";
import vmsg from "vmsg";
import { red } from "@mui/material/colors";
import "./css/Style.css";

const recorder = new vmsg.Recorder({
  wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm",
});

const AddAnswer = () => {

  const [question, setQuestion] = useState("");
  const { palette } = useTheme();

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const user = useSelector(selectUser);

  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState([]);

  const record = async () => {
    setIsLoading(true);

    if (isRecording) {
      const blob = await recorder.stopRecording();
      setRecordings(recordings.concat(URL.createObjectURL(blob)));
      setIsLoading(false);
      setIsRecording(false);
      console.log("not recording");
    } else {
      try {
        await recorder.initAudio();
        await recorder.initWorker();
        recorder.startRecording();
        setIsLoading(false);
        setIsRecording(true);
        console.log("recording");
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: "https://source.unsplash.com/random/300x300",
        user: user,
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };

  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
        {/* <UserImage image={picturePath} /> */}
        <Avatar src={user?.photo} />
        <InputBase
          placeholder="Add your answer..."
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
      </FlexBetween>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {recordings.map((url) => (
          <li key={url}>
            <audio src={url} controls style={{ width: "98%" }} />
          </li>
        ))}
      </ul>

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <FlexBetween gap="0.25rem">
          <Tooltip title="audio" placement="top" arrow>
            <IconButton disabled={isLoading} onClick={record}>
              {isRecording ? (
                <StopCircle sx={{ color: red["A400"] }} />
              ) : (
                <MicOutlined />
              )}
            </IconButton>
          </Tooltip>
          <Typography color={mediumMain}>Audio</Typography>
        </FlexBetween>

        <Button
          disabled={!question}
          onClick={handleSubmit}
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.dark,
            borderRadius: "3rem",
            "&:hover": { cursor: "pointer" },
          }}
        >
          <Typography>Add Answer</Typography>
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default AddAnswer;
