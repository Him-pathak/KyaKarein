import { Box, useMediaQuery } from "@mui/material";
import NavBar from "../Navbar";
import SideBar from "../SideBar";
import RightBar from "../RightBar";
import Feed from "../Feed";
import "./home.css";
import { Triangle } from "react-loader-spinner";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {loading ? (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={"100vh"} width={"100vw"}>
          <Triangle size={150} loading={loading} />
        </Box>
      ) : (
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
      )}
    </>
  );
};

export default HomePage;
