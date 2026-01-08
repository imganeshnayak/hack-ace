import React from 'react';

const Placeholder: React.FC<{ title: string }> = ({ title }) => {
    return (
        <div className="flex flex-col items-center justify-center h-[50vh] text-center">
            <div className="p-6 bg-surface-dark border border-[#283933] rounded-xl flex flex-col items-center gap-4">
                <span className="material-symbols-outlined text-4xl text-gray-600">construction</span>
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <p className="text-gray-400">This feature is currently under construction.</p>
                <div className="w-full bg-[#283933] h-1 mt-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[25%] animate-pulse"></div>
                </div>
            </div>
        </div>
    );
};

export default Placeholder;
