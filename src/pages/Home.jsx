/** @format */

import React from "react";
import Calculator from "../components/calculator/Index";
import Slider from "../components/slider/index";
import Feedback from "../components/feedback/Index";
import Tariff from "../components/tariff/Index";

const Home = () => {
  return (
    <>
      <Tariff />
      <Feedback />
      <Calculator />
      <Slider />
    </>
  );
};

export default Home;
