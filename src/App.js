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
import { Navigate } from "react-router-dom";

function App() {
  const { auth } = useAuth();

  const AuthWrapper = ({ auth }) => {
    return auth ? <Navigate to='/login' replace /> : <Navigate to='/admin' replace />;
  };

  console.log(auth);
  return (
    <>
      <Header />

      <div className='App bg-[#E3E2DF] '>
        <Routes>
          <Route path='/' index element={<Home />} />

          <Route path='/admin' element={<AuthWrapper />} />
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
