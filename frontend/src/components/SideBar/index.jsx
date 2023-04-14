import React from "react";
import WidgetWrapper from "../../utils/WidgetWrapper";
import FlexBetween from "../../utils/FlexBetween";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/Subscriptions";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import { Box, Divider, FormControl, IconButton, InputBase, MenuItem, Select, Typography, useTheme } from "@mui/material";

function SideBar() {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const neutralLight = palette.neutral.light;
  const primaryDark = palette.primary.dark;

  const val = "Tutorials";

  // console.log(val);

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

          <FormControl variant="standard" value={val}>
            <Select
              value={val}
              sx={{
                // backgroundColor: neutralLight,
                // width: "",
                // borderRadius: "0.25rem",
                p: "0 0",
                // "& .MuiSvgIcon-root": {
                //   // pr: "0.25rem",
                //   width: "3rem",
                // },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
              // inputProps={{ IconComponent: () => null }}
            >
              <MenuItem value="a">
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
                  First Video
                </Typography>{" "}
              </MenuItem>

              <MenuItem value="b">
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
                  Second Video
                </Typography>{" "}
              </MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      </Box>

      <Divider />

      <Box gap="0.5rem" display={"flex"} mt="0.25rem">
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
