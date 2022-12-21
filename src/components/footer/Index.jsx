/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

const Index = () => {
  const defaultState = {
    center: [43.181897, 76.85248],
    zoom: 6,
  };
  return (
    <div className='footer shadow-inner flex justify-center bg-[#fff] h-[300px]'>
      <div className='flex mt-7 container justify-between w-[1280px]'>
        <div className='section flex flex-col justify-between '>
          <div className='logo text-3xl'>FiNova</div>
          <div className='icons flex'>
            <FontAwesomeIcon
              fill='green'
              className='w-7 cursor-pointer text-pink-600 fill-green-400 h-7 hover:animate-spin'
              icon={faInstagram}
            />
            <FontAwesomeIcon
              className='w-7 ml-4 cursor-pointer text-blue-400 h-7 hover:animate-spin'
              icon={faTelegram}
              href='#'
            />
            <FontAwesomeIcon
              className='w-7 ml-4 cursor-pointer text-green-400  h-7 hover:animate-spin'
              icon={faWhatsapp}
              href='#'
            />
          </div>
          <div className='mail flex flex-col'>
            <a className='flex mb-2 underline' href='/#'>
              {" "}
              <FontAwesomeIcon
                className='w-7 text-blue-800 mr-2 h-7'
                icon={faEnvelopeSquare}
                href='#'
              />
              adamdimert@gmail.com
            </a>
            <a className='flex underline' href='/#'>
              {" "}
              <FontAwesomeIcon
                className='w-7 text-blue-800 mr-2 h-7'
                icon={faEnvelopeSquare}
                href='#'
              />
              adamdimert@gmail.com
            </a>
          </div>
          <div className='telephone flex flex-col'>
            <a className='flex items-center' href='/#'>
              <FontAwesomeIcon icon={faPhone} className=' text-green-300 mr-2' />
              8-707-440-80-18
            </a>
            <a className='flex items-center' href='/#'>
              <FontAwesomeIcon icon={faPhone} className=' text-green-300 mr-2' />{" "}
              8-707-440-80-18
            </a>
          </div>
        </div>

        <div className='section list-none'>
          <h3 className='mb-6 font-bold text-2xl border-b-2'>Ссылки</h3>
          <ul>
            <li className='mb-4'>
              <a href='/#' className='relative group cursor-pointer'>
                <span>О Нас</span>
                <div className='absolute bottom-[7.25px] right-0 w-0 h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
              </a>
            </li>
            <li className='mb-4'>
              <a href='/#' className='relative group cursor-pointer'>
                <span>Услуги</span>
                <div className='absolute bottom-[7.25px] right-0 w-0 h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
              </a>
            </li>
            <li className='mb-4'>
              <a href='/#' className='relative group cursor-pointer'>
                <span>Калькуляторр цен</span>
                <div className='absolute bottom-[7.25px] right-0 w-0 h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
              </a>
            </li>
            <li className='mb-4'>
              <a href='/#' className='relative group cursor-pointer'>
                <span>Сертификаты</span>
                <div className='absolute bottom-[7.25px] right-0 w-0 h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
              </a>
            </li>
            <li className=''>
              <a href='/#' className='relative group cursor-pointer'>
                <span>Контакты</span>
                <div className='absolute bottom-[7.25px] right-0 w-0 h-[3px] bg-[#176c9a] transition-all group-hover:w-full'></div>
              </a>
            </li>
          </ul>
        </div>
        <div className='section'>
          <YMaps>
            <Map defaultState={defaultState}>
              <Placemark geometry={[55.684758, 37.738521]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default Index;
