/** @format */

import "./App.css";
import Header from "./components/header/Index";
import Footer from "./components/footer/Index";

import {Route, Routes} from "react-router-dom";

import {useRef} from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";


function App() {
    const mainRef = useRef(null)
    const calcRef = useRef(null)
    const certificateRef = useRef(null)
    const tariffRef = useRef(null)
    const feedbackRef = useRef(null)
    const footerRef = useRef(null)

    return (
        <>


            <div className='App bg-[#fff] relative box-border   '>
                <Header mainRef={mainRef} feedbackRef={feedbackRef} calcRef={calcRef}
                        certificateRef={certificateRef} tariffRef={tariffRef} footerRef={footerRef}/>
                <Routes>
                    <Route path='/' index
                           element={<Home mainRef={mainRef} feedbackRef={feedbackRef} calcRef={calcRef}
                                          certificateRef={certificateRef} tariffRef={tariffRef}
                           />}/>

                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/admin' element={<AdminPanel/>}/>
                </Routes>
                <Footer footerRef={footerRef}/>
            </div>

        </>
    );
}

export default App;
