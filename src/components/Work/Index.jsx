import React from "react";
import {FaClipboardList, FaFileSignature, FaPhoneAlt, FaTools} from "react-icons/fa";

const Index = () => {
    const actions = [
        {
            title: "Оставляете заявку",
            description: "Оставьте заявку на нашем сайте, и мы свяжемся с вами в ближайшее время",
            icon: <FaClipboardList/>,
        },
        {
            title: "Консультация",
            description: "Наши специалисты ответят на все ваши вопросы и помогут выбрать лучшее решение",
            icon: <FaPhoneAlt/>,
        },
        {
            title: "Подписание договора",
            description: "Подписывайте договор у нас в офисе или удаленно по электронной почте",
            icon: <FaFileSignature/>,
        },
        {
            title: "Начало работы",
            description: "Наша команда профессионалов приступает к выполнению вашего проекта",
            icon: <FaTools/>,
        },
    ];

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto px-4 py-8">
            {actions.map((action) => (
                <div key={action.title} className="bg-white shadow-lg rounded-lg overflow-hidden flex-1">
                    <div className="p-4">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                            {action.icon}
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900">{action.title}</h3>
                        <p className="mt-2 text-sm text-gray-500">{action.description}</p>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Index;