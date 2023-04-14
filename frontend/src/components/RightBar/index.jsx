import React from "react";
import WidgetWrapper from "../../utils/WidgetWrapper";
import FlexBetween from "../../utils/FlexBetween";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";

function RightBar() {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  // const neutralLight = palette.neutral.light;
  const primaryDark = palette.primary.dark;

  const Commodities = {
    Ajwan: "₹6,956",
    Arhar: "₹7,200",
    Bajra: "₹2,125",
    Bhindi: "₹5,000",
    Capsicum: "₹4,600",
    Coconut: "₹7,300",
    Jute: "₹5,600",
    Mustard: "₹5,700",
    MasurDal: "₹9,500",
    Onion: "₹1,200",
    Potato: "₹1,460",
    Rice: "₹3,100",
    Soyabean: "₹4,020",
    Wheat: "₹2,950",
  };

  // Object.entries(Commodities).map(([key,val]) => {console.log(key, " - ", val)})

  return (
    <WidgetWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: "0.25rem",
        }}
      >
        <Typography
          color={main}
          variant="h3"
          fontWeight="400"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          Mandi
        </Typography>
      </Box>

      <Divider />

      <FlexBetween mt="0.25rem" mb="0.25rem">
        <Typography
          color={main}
          variant="h5"
          fontWeight="300"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          Commodity
        </Typography>
        <Typography
          color={main}
          variant="h5"
          fontWeight="300"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          Prices/Qui
        </Typography>
      </FlexBetween>

      <Divider />

      {/* {Object.entries(Commodities).map(([key,val]) => {
        <Box key ={key}>
        <FlexBetween mt="0.25rem" mb="0.25rem">
          <Typography
            color={main}
            variant="h6"
            fontWeight="200"
            sx={{
              "&:hover": {
                color: primaryDark,
              },
            }}
          >
            {key}
          </Typography>
          <Typography
            color={main}
            variant="h6"
            fontWeight="200"
            sx={{
              "&:hover": {
                color: primaryDark,
              },
            }}
          >
            {val}
          </Typography>
        </FlexBetween>
        </Box>
      })} */}

      <FlexBetween mt="0.25rem" mb="0.25rem">
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          Ajwan
        </Typography>
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          {Commodities.Ajwan}
        </Typography>
      </FlexBetween>

      <Divider />
      <FlexBetween mt="0.25rem" mb="0.25rem">
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          Arhar
        </Typography>
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          {Commodities.Arhar}
        </Typography>
      </FlexBetween>

      <Divider />
      <FlexBetween mt="0.25rem" mb="0.25rem">
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          Bajra
        </Typography>
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          {Commodities.Bajra}
        </Typography>
      </FlexBetween>

      <Divider />
      <FlexBetween mt="0.25rem" mb="0.25rem">
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          Bhindi
        </Typography>
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          {Commodities.Bhindi}
        </Typography>
      </FlexBetween>

      <Divider />
      <FlexBetween mt="0.25rem" mb="0.25rem">
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          Capsicum
        </Typography>
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          {Commodities.Capsicum}
        </Typography>
      </FlexBetween>

      <Divider />
      <FlexBetween mt="0.25rem" mb="0.25rem">
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          Coconut
        </Typography>
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          {Commodities.Coconut}
        </Typography>
      </FlexBetween>

      <Divider />
      <FlexBetween mt="0.25rem" mb="0.25rem">
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          Jute
        </Typography>
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          {Commodities.Jute}
        </Typography>
      </FlexBetween>

      <Divider />
      <FlexBetween mt="0.25rem" mb="0.25rem">
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          Mustard
        </Typography>
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          {Commodities.Mustard}
        </Typography>
      </FlexBetween>

      <Divider />
      <FlexBetween mt="0.25rem" mb="0.25rem">
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          Wheat
        </Typography>
        <Typography
          color={main}
          variant="h6"
          fontWeight="200"
          sx={{
            "&:hover": {
              color: primaryDark,
            },
          }}
        >
          {Commodities.Wheat}
        </Typography>
      </FlexBetween>

      <Divider/>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: "0.25rem",
          mt: "0.25rem",
        }}
      >
        <Button
          // disabled={!question}
          onClick={()=>
            // console.log("Clicked")
            window.open('https://www.mandiprices.com/', '_blank')
          }
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.dark,
            borderRadius: "3rem",
            "&:hover": { cursor: "pointer" },
          }}
        >
          Show more
        </Button>
      </Box>
    </WidgetWrapper>
  );
}

export default RightBar;
