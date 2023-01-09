import React from 'react';
import './main.css'

const Index = () => {
    return (
        <div className='main  h-screen mb-12 bg-fixed  bg-cover custom-img relative'>
            <div
                className="block w-[18rem] lg:top-[15rem] lg:left-[26rem]  md:top-[17rem] md:left-[12rem] absolute ">
                <h2 className='text-3xl'>О нас</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eius nihil quam
                    quis
                    sunt. Adipisci
                    amet beatae cumque cupiditate ducimus numquam. Accusantium doloremque ea est magnam, officia placeat
                    tempore vel?</p>
                <button className='rounded-2xl border-2 py-2 p-3 bg-white'>Оставить заявку</button>
            </div>

        </div>
    );
};

export default Index;