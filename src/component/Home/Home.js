"use client";
import { Box } from "@mui/material";
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";

import AliceCarousel from "react-alice-carousel";
import Menu from "../Menu/Menu";

const Home = ({ items }) => {
  return (
    <Box p={2}>
      <AliceCarousel autoPlay disableButtonsControls>
        <img
          src={"./banner.png"}
          width={1400}
          height={380}
          role="presentation"
        />
        <img
          src={"./banner1.png"}
          width={1400}
          height={380}
          role="presentation"
        />
        <img
          src={"./banner2.png"}
          width={1400}
          height={380}
          role="presentation"
        />
      </AliceCarousel>
      <Menu items={items} />
    </Box>
  );
};

export default Home;
