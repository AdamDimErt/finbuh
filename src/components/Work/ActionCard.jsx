import React from 'react';


const ActionCard = ({title, description, icon}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg px-6 py-8">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full mb-4">
                {icon}
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
            <p className="text-gray-600 mt-4">{description}</p>
        </div>
    );
};
export default ActionCard;