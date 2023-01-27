/** @format */

import React, {useEffect, useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faPhoneSquare} from "@fortawesome/free-solid-svg-icons";

import "./header.css";
import {handleScroll} from "../../utils/Scroll";
import {Link} from "react-router-dom";

const Header = ({mainRef, tariffRef, calcRef, certificateRef, footerRef}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    };

    return (
        <div className='h-20 w-full bg-[#e7f3fe]'>
            <nav

                className={`${
                    isScrolled && "bg-[#ffffffe6]"
                }  custom pt-5 pb-5  mx-auto px-4 z-10 flex font-[Montserrat] items-center text-[#173a9a] justify-around`}
            >
                <div className='logo grow  w-1/5 ml-5'>
                    <Link to='/' className='text-2xl '>FiNova</Link>
                </div>
                <ul className='lg:flex grow  hidden w-3/5 space-x-10 xl:text-md md:text-sm justify-center '>
                    <li className=''>
                        <Link to='/' onClick={() => handleScroll(mainRef.current)}
                              className='relative group cursor-pointer'>
                            <span>О нас</span>
                            <div
                                className='absolute bottom-[7.25px] left-0 w-[0px] h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/' onClick={() => handleScroll(tariffRef.current)}
                              className='relative group cursor-pointer'>
                            <span>Услуги</span>
                            <div
                                className='absolute bottom-[7.25px] left-0 w-[0px] h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/' onClick={() => handleScroll(calcRef.current)}
                              className='relative group cursor-pointer'>
                            <span>Калькулятор цен</span>
                            <div
                                className='absolute bottom-[7.25px]  left-1/2 w-0 h-[3px] bg-[#176c9a] group-hover:w-1/2 group-hover:transition-all'></div>
                            <div
                                className='absolute bottom-[7.25px]  right-1/2 w-0 h-[3px] bg-[#176c9a] group-hover:w-1/2 group-hover:transition-all'></div>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/' onClick={() => handleScroll(certificateRef.current)}
                              className='relative group cursor-pointer'>
                            <span>Сертификаты</span>
                            <div
                                className='absolute bottom-[7.25px] right-0 w-0 h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
                        </Link>
                    </li>
                    <li className=''>
                        <Link to='/' onClick={() => handleScroll(footerRef.current)}
                              className='relative group cursor-pointer'>
                            <span>Контакты</span>
                            <div
                                className='absolute bottom-[7.25px] right-0 w-0 h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
                        </Link>
                    </li>
                </ul>
                <div className='flex grow w-1/4 justify-center'>
                    <a
                        href='tel:8-707-550-80-18'
                        className='cursor-pointer telephone mr-3 underline underline-offset-4 duration-300 ease-in-out decoration-blue-500/[.33] hover:decoration-blue-500 transition'
                    >
                        <FontAwesomeIcon
                            className='w-8 mt-1 h-5 hover:text-[#54b459] '
                            icon={faPhoneSquare}
                        />
                        8-707 440 8018
                    </a>
                </div>
                <div className='flex   relative'>
                    <label className='lg:block' htmlFor='check'>
                        <input
                            className='input'
                            type='checkbox'
                            id='check'
                            onClick={() => toggleMenu()}
                        />
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    {isOpen ? (
                        <ul className='absolute  items-center border-2 border-[#5D001E] bg-[#fff] border-solid rounded-lg px-2 py-4 w-40 top-14 font-[Montserrat] flex flex-col right-0'>
                            <li className='mb-4'>
                                <Link to='/' onClick={() => handleScroll(mainRef.current)}>О нас</Link>
                            </li>
                            <li className='mb-4'>
                                <Link to='/' onClick={() => handleScroll(tariffRef.current)}>Услуги</Link>
                            </li>
                            <li className='mb-4'>
                                <Link to='/' onClick={() => handleScroll(calcRef.current)}>Калькулятор цен</Link>
                            </li>
                            <li className='mb-4'>
                                <Link to='/' onClick={() => handleScroll(certificateRef.current)}> Сертификаты</Link>
                            </li>
                            <li className=''>
                                <Link to='/' onClick={() => handleScroll(footerRef.current)}>Контакты</Link>
                            </li>
                        </ul>
                    ) : (
                        ""
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;
