/** @format */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slider.css";

import ImgCom from "../../assets/sert1.jpg";

const Index = () => {
  const img = [
    {
      id: 1,
      src: ImgCom,
      alt: "sert",
    },
    {
      id: 2,
      src: ImgCom,
      alt: "hi",
    },
    {
      id: 3,
      src: ImgCom,
      alt: "text",
    },
    {
      id: 4,
      src: ImgCom,
      alt: "text",
    },
    {
      id: 5,
      src: ImgCom,
      alt: "text",
    },
    {
      id: 6,
      src: ImgCom,
      alt: "text",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    nextArrow: null,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id='certificate' className={"mb-20"}>
      <h2 className={"text-2xl text-center mt-10 mb-10"}>Наши Сертификаты</h2>
      <Slider className='flex' {...settings}>
        {img.map((im) => {
          return <img key={im.id} className={"slide"} src={im.src} alt={im.alt} />;
        })}
      </Slider>
    </div>
  );
};

export default Index;
