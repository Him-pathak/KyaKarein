import { Box, useMediaQuery } from "@mui/material";
import NavBar from "../Navbar";
import SideBar from "../SideBar";
import RightBar from "../RightBar";
import Feed from "../Feed";
import "./home.css";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <NavBar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "20%" : undefined}>
          <SideBar />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "50%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
          overflow={"scroll"}
          height="100vh"
        >
          <Feed />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="20%">
            <RightBar />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
