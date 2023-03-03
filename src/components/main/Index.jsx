import React from 'react';
import './main.css';
import {handleScroll} from '../../utils/Scroll';

const Index = ({mainRef, feedbackRef}) => {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour >= 4 && currentHour < 12) {
        greeting = 'Доброе утро';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Добрый день';
    } else if (currentHour >= 18 && currentHour < 22) {
        greeting = 'Добрый вечер';
    } else {
        greeting = 'Доброй ночи';
    }

    return (
        <div ref={mainRef} className="main h-screen mb-12 bg-fixed bg-cover custom-img relative">
            <div
                className="shadow-2xl absolute block text-[#190550] w-[18rem] md:top-[16rem] md:left-[13rem] xl:top-[15rem] xl:left-[26rem] bg-white p-4 rounded-2xl">
                <h2 className="xl:text-3xl md:text-2xl">{greeting}</h2>
                <p className="xl:text-sm md:text-[12px]">
                    Вас приветсвует бухгалтерская аутсорсинг компания FiNova
                    мы предоставлям спектр бухгалтерских услуг.
                    Оставте нам ваши контакты и мы обсудим дальнейшее сотрудничество.
                    Бухгалтерия онлайн теперь с вами!
                </p>
                <button
                    onClick={() => handleScroll(feedbackRef.current)}
                    className="border-2 py-2 p-3 rounded-2xl bg-white lg:mt-5"
                >
                    Оставить заявку
                </button>
            </div>
        </div>
    );
};

export default Index;
