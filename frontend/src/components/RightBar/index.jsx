import React from "react";
import WidgetWrapper from "../../utils/WidgetWrapper";
import FlexBetween from "../../utils/FlexBetween";
import { Box, Button, Divider, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

function RightBar() {
  const { t } = useTranslation();

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
          {t('Mandi_')}
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
          {t('Commodity_')}
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
          {t('Prices_')}/{t('Quintal_')}
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
          {t('Ajwan_')}
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
          {t('Arhar_')}
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
          {t('Bajra_')}
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
          {t('Bhindi_')}
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
          {t('Capsicum_')}
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
          {t('Coconut_')}
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
          {t('Jute_')}
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
          {t('Mustard_')}
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
          {t('Wheat_')}
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
          {t('Show_more')}
        </Button>
      </Box>
    </WidgetWrapper>
  );
}

export default RightBar;
