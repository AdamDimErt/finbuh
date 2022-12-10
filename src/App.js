/** @format */

import "./App.css";
import Header from "./components/header/Index";
import Calculator from "./components/calculator/Index";
import Slider from "./components/slider/index";
import Footer from "./components/footer/Index";
import Modal from "./components/modal/Index";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <div className='App bg-[#E3E2DF] '>
        <Header />
        <Calculator />
        <Slider />
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
