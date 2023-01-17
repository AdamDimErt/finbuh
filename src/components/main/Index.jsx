import React from 'react';
import './main.css'
import {handleScroll} from "../../utils/Scroll";

const Index = ({mainRef, feedbackRef}) => {
    const data = new Date().getHours()
    console.log(data)
    return (
        <div ref={mainRef} className='main  h-screen mb-12 bg-fixed  bg-cover custom-img relative'>
            <div
                className="block text-[#190550] w-[18rem] xl:top-[15rem] xl:left-[26rem]    md:top-[16rem] md:left-[13rem] absolute ">
                <h2 className='xl:text-3xl md:text-2xl'>{data >= 6 ? <h3>Доброе утро</h3> : data >= 13 ?
                    <h3>добрый день</h3> : data >= 18 ? <h3>Добрый Вечер</h3> : data >= 22 ? <h3>Доброй ночи</h3> : null
                }
                </h2>
                <p className='xl:text-sm md:text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
                    eius nihil quam
                    quis
                    sunt. Adipisci
                    amet beatae cumque cupiditate ducimus numquam. Accusantium doloremque ea est magnam, officia placeat
                    tempore vel?</p>
                <button onClick={() => handleScroll(feedbackRef.current)}
                        className='rounded-2xl border-2 py-2 p-3 bg-white lg:mt-5'>Оставить заявку
                </button>
            </div>

        </div>
    );
};

export default Index;