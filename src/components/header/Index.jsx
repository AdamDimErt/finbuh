/** @format */

import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/logo.png";

import "./header.css";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Header = () => {
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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='h-24 w-full bg-[#e7f3fe]'>
      <nav
        className={`${
          isScrolled && "bg-[#ffffffe6]"
        }  custom pt-5 pb-5  mx-auto px-4 z-10 flex font-[Montserrat] items-center text-[#173a9a] justify-around`}
      >
        <div className='logo grow  w-1/5 ml-5'>
          <Link to='/' className='text-2xl '>
            <img src={Logo} alt='logo' className=' w-16' />
          </Link>
        </div>
        <ul className='lg:flex grow  hidden w-3/5 space-x-10 xl:text-md md:text-sm justify-center '>
          <li className=''>
            <LinkScroll
              to='about'
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
              className='relative group cursor-pointer'
            >
              <span>О нас</span>
              <div className='absolute left-0 w-[0px] h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
            </LinkScroll>
          </li>
          <li className=''>
            <LinkScroll
              to='tariff'
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
              className='relative group cursor-pointer'
            >
              <span>Услуги</span>
              <div className='absolute left-0 w-[0px] h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
            </LinkScroll>
          </li>
          <li className=''>
            <LinkScroll
              to='calc'
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
              className='relative group cursor-pointer'
            >
              <span>Калькулятор цен</span>
              <div className='absolute left-0 w-[0px] h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
            </LinkScroll>
          </li>
          <li className=''>
            <LinkScroll
              to='certificate'
              spy={true}
              smooth={true}
              offset={50}
              duration={790}
              className='relative group cursor-pointer'
            >
              <span>Сертификаты</span>
              <div className='absolute left-0 w-[0px] h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
            </LinkScroll>
          </li>
          <li className=''>
            <LinkScroll
              to='footer'
              spy={true}
              smooth={true}
              offset={50}
              duration={800}
              className='relative group cursor-pointer'
            >
              <span>Контакты</span>
              <div className='absolute left-0 w-[0px] h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
            </LinkScroll>
          </li>
        </ul>
        <div className='flex grow w-1/4 justify-center'>
          <a
            href='tel:+77711858868'
            className='cursor-pointer telephone mr-3 underline underline-offset-4 duration-300 ease-in-out decoration-blue-500/[.33] hover:decoration-blue-500 transition'
          >
            <FontAwesomeIcon
              className='w-8 mt-1 h-5 hover:text-[#54b459] '
              icon={faPhoneSquare}
            />
            +7-771-185-88-68
          </a>
        </div>
        <div className='flex relative'>
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
                <LinkScroll to='about'>О нас</LinkScroll>
              </li>
              <li className='mb-4'>
                <LinkScroll to='tariff'>Услуги</LinkScroll>
              </li>
              <li className='mb-4'>
                <LinkScroll to='calc'>Калькулятор цен</LinkScroll>
              </li>
              <li className='mb-4'>
                <LinkScroll to='certificate'> Сертификаты</LinkScroll>
              </li>
              <li className=''>
                <LinkScroll to='footer'>Контакты</LinkScroll>
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
