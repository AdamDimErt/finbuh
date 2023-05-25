/** @format */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slider.css";

import Sert1 from "../../assets/sert1.jpeg";
import Sert2 from "../../assets/sert2.jpeg";
import Sert3 from "../../assets/sert3.jpeg";
import Sert4 from "../../assets/sert4.jpeg";
import Sert5 from "../../assets/sert5.jpeg";
import Sert6 from "../../assets/sert6.jpeg";
import Sert7 from "../../assets/sert7.jpeg";
import Sert8 from "../../assets/sert8.jpeg";
import Sert9 from "../../assets/sert9.jpeg";
import Sert10 from "../../assets/sert10.jpeg";
import Sert11 from "../../assets/sert11.jpeg";
import Sert12 from "../../assets/sert12.jpeg";

const Index = () => {
  const img = [
    {
      id: 1,
      src: Sert1,
      alt: "certificate",
    },
    {
      id: 2,
      src: Sert2,
      alt: "certificate",
    },
    {
      id: 3,
      src: Sert3,
      alt: "certificate",
    },
    {
      id: 4,
      src: Sert4,
      alt: "certificate",
    },
    {
      id: 5,
      src: Sert5,
      alt: "certificate",
    },
    {
      id: 6,
      src: Sert6,
      alt: "certificate",
    },
    {
      id: 7,
      src: Sert7,
      alt: "certificate",
    },
    {
      id: 8,
      src: Sert8,
      alt: "certificate",
    },
    {
      id: 9,
      src: Sert9,
      alt: "certificate",
    },
    {
      id: 10,
      src: Sert10,
      alt: "certificate",
    },
    {
      id: 11,
      src: Sert11,
      alt: "certificate",
    },
    {
      id: 12,
      src: Sert12,
      alt: "certificate",
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
