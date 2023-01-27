import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './slider.css'


import ImgCom from '../../assets/sert1.jpg'

const Index = () => {

    const img = [
        {
            src: ImgCom,
            alt: 'sert'
        },
        {
            src: ImgCom,
            alt: 'hi'
        },
        {
            src: ImgCom,
            alt: 'text'
        },
        {
            src: ImgCom,
            alt: 'text'
        }
    ]


    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        arrows: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        nextArrow: null,
        prevArrow: false
    };
    return (
        <div>
            <h2 className={'text-2xl text-center mt-10 mb-10'}>Наши Сертификаты</h2>
            <Slider className='flex' {...settings}>
                {img.map((im) => {
                    return <img className={'slide'} src={im.src} alt={im.alt}/>
                })}
            </Slider>
        </div>
    );
};

export default Index;