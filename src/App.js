/** @format */

import "./App.css";
import Header from "./components/header/Index";
import Footer from "./components/footer/Index";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import { useAuth } from "./hooks/use-Auth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

function App() {
  const { auth } = useAuth();

  console.log(auth);
  return (
    <>
      <Header />

      <div className='App bg-[#E3E2DF] '>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/admin' element={<AdminPanel />}></Route>
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Routes></Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
