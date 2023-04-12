import {
  EditOutlined,
  DeleteOutlined,
  ImageOutlined,
  MicOutlined,
  StopCircle,
} from "@mui/icons-material";
import {
  Box,
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
import Dropzone from "react-dropzone";
import WidgetWrapper from "../../utils/WidgetWrapper"; //
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../state/userSlice";
import axios from "axios";
import vmsg from "vmsg";
import { red } from "@mui/material/colors";
import "./css/Style.css";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";

const recorder = new vmsg.Recorder({
  wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm",
});

const MyPostWidget = () => {
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [question, setQuestion] = useState("");


  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const { palette } = useTheme();
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const user = useSelector(selectUser);

  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState([]);

  const imagesListRef = ref(storage, "images/");


  // setImageUrl("https://source.unsplash.com/random/300x300")

  // const uploadImage = async () => {
  //   if (image == null) return;
  //   const imageRef = ref(storage, `images/${image.name + v4()}`);
  //   try {
  //     const snapshot = await uploadBytes(imageRef, image);
  //     const url = await getDownloadURL(snapshot.ref);
  //     setImageUrl(prevState => {
  //       return { ...prevState, url };
  //     });
  //     alert(url);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const uploadImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrl((prev) => {
          return{...prev, url};
        });
        // alert(url);
        // console.log(url);
      });
    });
  };

  const record = async () => {
    setIsLoading(true);

    if (isRecording) {
      const blob = await recorder.stopRecording();
      setRecordings(recordings.concat(URL.createObjectURL(blob)));
      setIsLoading(false);
      setIsRecording(false);
      console.log("not recording");
      // console.log(recordings.concat(URL.createObjectURL(blob)));
      

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
      uploadImage();
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        // questionUrl: "https://source.unsplash.com/random/300x300",
        questionUrl: imageUrl,
        user: user,
        audio: recordings, 
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          // alert(res.data.message);
          window.location.href = "/home";
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
          placeholder="Ask anything on agriculture..."
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
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem"
        >
          <Dropzone
            acceptedFiles=".jpg,.jpeg,.png"
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
          >
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: "15%" }}
                  >
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {recordings.map((url) => (
          <li key={url}>
            <audio src={url} controls style={{ width: "98%" }} />
          </li>
        ))}
      </ul>

      <Divider sx={{ margin: "1.25rem 0" }} />

      <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ "&:hover": { cursor: "pointer", color: medium } }}
          >
            Image
          </Typography>
        </FlexBetween>

        <FlexBetween gap="0.25rem">
          <Tooltip title="audio" placement="top" arrow>
            <IconButton disabled={isLoading} onClick={record}>
              {/* currently colour changes on click but should be based on backend count */}
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
          Add Question
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyPostWidget;
