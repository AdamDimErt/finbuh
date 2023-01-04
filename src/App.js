/** @format */

import "./App.css";
import Header from "./components/header/Index";
import Footer from "./components/footer/Index";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Header />

      <div className='App bg-[#E3E2DF] '>
        <Routes>
          <Route path='/' index element={<Home />} />

          <Route path='*' element={<NotFound />} />
          <Route path='login' element={<Login />} />
          <Route path='/admin' element={<AdminPanel />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
