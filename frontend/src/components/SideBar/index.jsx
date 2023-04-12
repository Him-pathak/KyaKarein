import React from "react";
import WidgetWrapper from "../../utils/WidgetWrapper";
import FlexBetween from "../../utils/FlexBetween";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/Subscriptions";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";

function SideBar() {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const primaryDark = palette.primary.dark;

  return (
    <WidgetWrapper>
      {/* <FlexBetween> */}
      <Box gap="0.5rem" display={"flex"} mb="0.25rem">
        <IconButton
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          <DynamicFeedOutlinedIcon fontSize="large" />
        </IconButton>

        <FlexBetween>
          <Typography
            color={main}
            variant="h5"
            fontWeight="200"
            sx={{
              "&:hover": {
                color: primaryDark,
              },
            }}
          >
            Feed
          </Typography>
        </FlexBetween>
      </Box>

      <Divider />

      <Box gap="0.5rem" display={"flex"} mt="0.25rem" mb="0.25rem">
        <IconButton
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          <SubscriptionsOutlinedIcon fontSize="large" />
        </IconButton>

        <FlexBetween>
          <Typography
            color={main}
            variant="h5"
            fontWeight="200"
            sx={{
              "&:hover": {
                color: primaryDark,
              },
            }}
          >
            Tutorials
          </Typography>
        </FlexBetween>
      </Box>

      <Divider />

      <Box
        gap="0.5rem"
        display={"flex"}
        mt="0.25rem"
        
      >
        <IconButton
        sx={{
              "&:hover": {
                color: primaryDark,
              },
            }}
        >
          <FilterDramaIcon fontSize="large" />
        </IconButton>

        <FlexBetween>
          <Typography
            color={main}
            variant="h5"
            fontWeight="200"
            sx={{
              "&:hover": {
                color: primaryDark,
          
              },
            }}
          >
            Weather
          </Typography>
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
}

export default SideBar;
