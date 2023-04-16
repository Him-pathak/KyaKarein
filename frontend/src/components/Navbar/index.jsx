import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
  Tooltip,
} from "@mui/material";
import {
  Search,
  DarkMode,
  LightMode,
  Notifications,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "../../state/userSlice";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../utils/FlexBetween";
import { selectUser } from "../../state/userSlice";
import { useTranslation } from "react-i18next";

const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "hi", text: "Hindi" },
  { value: "bn", text: "Bengali" },
  { value: "mr", text: "Marathi" },
  { value: "ta", text: "Tamil" },
  { value: "pa", text: "Punjabi" },
  { value: "gu", text: "Gujarati" },
];

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const { t } = useTranslation();

  const [lang, setLang] = useState("en");

  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "http://localhost:6001/home/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  const fullName = `${user?.userName}`;

  return (
    <FlexBetween padding="0.5rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <img src="../Assets/logo.png" alt="" />
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          KyaKarein
        </Typography>
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem" width={"51%"}>
          <FlexBetween
            width={"50%"}
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase
              placeholder={t('Search_')}
              sx={{ width: "100%" }}
            />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
          <Tooltip title="Mode" placement="bottom" arrow>
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
          </Tooltip>
          {/* <Tooltip title="Notifications" placement="bottom" arrow>
            <IconButton>
              <Notifications sx={{ fontSize: "25px" }} />
            </IconButton>
          </Tooltip> */}
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                // "& .MuiSvgIcon-root": {
                //   pr: "0.25rem",
                //   width: "3rem",
                // },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              inputProps={{ IconComponent: () => null }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem
              //   onClick={() => dispatch(setLogout())}
              >
                {t("Log_Out")}
              </MenuItem>
            </Select>
          </FormControl>

          {/* language */}

          <Box ml={"0.5rem"}>
            <FormControl variant="standard" value={lang}>
              <Select
                value={lang}
                sx={{
                  backgroundColor: neutralLight,
                  width: "100px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                onChange={handleChange}
                input={<InputBase />}
              >
                {languages.map((item) => {
                  return (
                    <MenuItem key={item.value} value={item.value}>
                      <Typography>{item.text}</Typography>
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>

            <Notifications sx={{ fontSize: "25px" }} />

            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  {t("Log_Out")}
                </MenuItem>
              </Select>
            </FormControl>

            {/* <select value={lang} onChange={handleChange}>
              {languages.map((item) => {
                return (
                  <option key={item.value} value={item.value}>
                    {item.text}
                  </option>
                );
              })}
            </select> */}
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
