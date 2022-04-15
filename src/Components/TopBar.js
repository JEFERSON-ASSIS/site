import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import icon from "../assets/icon2.png";

const TopBar = ({ ContainedButton, ButtonTypography }) => {
  return (
    <>
      <Box
        sx={{
          zIndex: 100,
          fontStyle: "normal",
          fontSize: "20px",
          letterSpacing: "0.025em",
          position: "sticky",
          top: 0,
          backgroundColor: "#fff",
          height: "90px",
          filter: "drop-shadow(11px 14px 17px rgba(37, 56, 92, 0.1))",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          sx={{
            paddingTop: "10px",
            height: "75px",
          }}
        >
          <Stack direction="row">
            <img
              style={{
                width: 75,
                height: 75,
                marginTop: "-5px",
              }}
              src={icon}
              alt=""
            />

            <Typography
              sx={{ fontSize: "36px", fontFamily: "Mada", fontWeight: "400" }}
            >
              I7
            </Typography>
            <Typography
              sx={{ fontSize: "36px", fontFamily: "Mada", fontWeight: "700" }}
            >
              ticket
            </Typography>
          </Stack>

          <Stack direction="row" spacing={2}>
            <Button
              href="https://wa.me/5566996553735?text=oi%20gostaria%20de%20saber%20sobre%20o%20I7ticket"
              sx={{
                borderRadius: "10px",
                width: "100px",
                height: "55px",
                textTransform: "none",
              }}
              color="secondary"
            >
              <ButtonTypography>Entrar</ButtonTypography>
            </Button>
            <ContainedButton
              variant="contained"
              color="primary"
              href="https://wa.me/5566996553735?text=oi%20gostaria%20de%20saber%20sobre%20o%20I7ticket"
            >
              <ButtonTypography>Contrate agora</ButtonTypography>
            </ContainedButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default TopBar;
