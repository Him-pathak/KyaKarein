import { Box, Typography, useMediaQuery } from "@mui/material";
// import { useSelector } from "react-redux";
import NavBar from "../Navbar";
import SideBar from "../SideBar";
import RightBar from "../RightBar";
import Feed from "../Feed";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  //   const { _id, picturePath } = useSelector((state) => state.user);

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
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>

          <SideBar/>
        
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >

          <Feed/>
        
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
          
            <RightBar/>
         
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
