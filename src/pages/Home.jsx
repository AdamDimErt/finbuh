/** @format */

import React from "react";
import Calculator from "../components/calculator/Index";
import Slider from "../components/slider/index";
import Feedback from "../components/feedback/Index";

const Home = () => {
  return (
    <>
      <Feedback />
      <Calculator />
      <Slider />
    </>
  );
};

export default Home;
