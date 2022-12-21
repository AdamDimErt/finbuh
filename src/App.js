/** @format */

import "./App.css";
import Header from "./components/header/Index";
import Calculator from "./components/calculator/Index";
import Slider from "./components/slider/index";
import Footer from "./components/footer/Index";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { useAuth } from "./hooks/use-Auth";

function App() {
  const { auth } = useAuth();

  console.log(auth);
  return (
    <div className='App bg-[#E3E2DF] '>
      {auth ? <div>hi</div> : <div>bye</div>}
      <Login />
      <Register />
    </div>
  );
}

export default App;
