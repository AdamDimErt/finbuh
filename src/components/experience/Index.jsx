import React from 'react';
import './index.css'


const ExperienceBlock = ({number, text}) => {
    return (
        <div className="exp__block flex flex-col justify-evenly h-[180px]">
            <h1 className={'text-5xl'}>{number}</h1>
            <p className={'w-28'}>{text}</p>
        </div>
    )

}
const Index = () => {
    return (
        <div className={'mb-20 index'}>
            <h1 className="text-5xl text-center mt-10 text-[#585859]">Наш опыт в цифрах</h1>
            <div className="flex exp__main max-w-[1200px] m-auto mt-20 justify-between">
                <ExperienceBlock text="лет на рынке бухгалтерских услуг" number="10"/>
                <ExperienceBlock text="Компаний на бухгалтерском обслуживании" number="20+"/>
                <ExperienceBlock text="млн тенге сэкономленных налогов" number="20"/>
                <ExperienceBlock text="оказали налоговых консультаций" number="1000"/>
            </div>
        </div>
    );
};

export default Index;