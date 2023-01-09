/** @format */

import React from "react";
import Calculator from "../components/calculator/Index";
import Slider from "../components/slider/index";
import Feedback from "../components/feedback/Index";
import Tariff from "../components/tariff/Index";
import Main from '../components/main/Index'

const Home = () => {
    return (
        <>
            <Main/>
            <Tariff/>
            <Feedback/>
            <Calculator/>
            <Slider/>
        </>
    );
};

export default Home;
