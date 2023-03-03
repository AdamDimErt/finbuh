import React from 'react';
import './index.css'

const Index = () => {
    return (
        <div className={'mb-20 index'}>
            <h1 className="text-5xl text-center mt-10 text-[#585859]">Наш опыт в цифрах</h1>
            <div className="flex exp__main max-w-[1200px] m-auto mt-20 justify-between">
                <div className="exp__block flex flex-col justify-evenly h-[180px]">
                    <h1 className={'text-5xl'}>10</h1>
                    <p className={'w-28'}>лет на рынке бухгалтерских услуг</p>
                </div>
                <div className="exp__block  flex flex-col justify-evenly h-[180px]">
                    <h1 className={'text-5xl'}>20+</h1>
                    <p className={'w-28'}>Компаний на бухгалтерском обслуживании</p>
                </div>
                <div className="exp__block  flex flex-col justify-evenly h-[180px]">
                    <h1 className={'text-5xl'}>20</h1>
                    <p className={'w-28'}>млн тенге сэкономленных налогов</p>
                </div>
                <div className="flex flex-col justify-evenly h-[180px]">
                    <h1 className={'text-5xl'}>1000</h1>
                    <p className={'w-28'}> оказали налоговых консультаций</p>
                </div>

            </div>
        </div>
    );
};

export default Index;