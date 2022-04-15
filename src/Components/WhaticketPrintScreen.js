import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

import whaticketPrint from "../assets/whaticketPrint3.png";

const WhaticketPrintScreen = () => {
  return (
    <Box sx={{ paddingBottom: "50px", display: { xs: "none", xl: "block" } }}>
      <img src={whaticketPrint} alt=""></img>
    </Box>
  );
};

export default WhaticketPrintScreen;
