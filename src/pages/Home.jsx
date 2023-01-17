/** @format */

import React from "react";
import Calculator from "../components/calculator/Index";
import Slider from "../components/slider/index";
import Feedback from "../components/feedback/Index";
import Tariff from "../components/tariff/Index";
import Main from '../components/main/Index'

import Work from '../components/Work/Index'

const Home = ({mainRef, tariffRef, feedbackRef, calcRef, certificateRef}) => {


    return (
        <>
            <Main feedbackRef={feedbackRef} mainRef={mainRef}/>
            <Tariff tariffRef={tariffRef}/>
            <Feedback feedbackRef={feedbackRef}/>
            <Calculator calcRef={calcRef}/>
            <Slider certificateRef={certificateRef}/>
            <Work/>
        </>
    );
};

export default Home;
