import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import './slider.css'

import ImgCom from '../../assets/sert1.jpg'

const Index = () => {

    const prevArrow = () => {
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"/>
                </svg>

            </div>)

    }
    const nextArrow = () => {
        return (
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
                </svg>


            </div>
        )
    }

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
        slidesToShow: 3,
        slidesToScroll: 1,
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