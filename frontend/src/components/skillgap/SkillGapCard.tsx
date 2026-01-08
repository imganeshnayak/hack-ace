import React from 'react';

interface SkillGapCardProps {
    title: string;
    description: string;
    level: 'Critical' | 'Moderate';
    demand: 'High' | 'Medium' | 'Low';
    category?: string;
}

const SkillGapCard: React.FC<SkillGapCardProps> = ({ title, description, level, demand }) => {
    const isCritical = level === 'Critical';
    const borderColor = isCritical ? 'border-red-500' : 'border-yellow-500';
    const bgColor = isCritical ? 'bg-red-500/10' : 'bg-yellow-500/10';
    const textColor = isCritical ? 'text-red-500' : 'text-yellow-500';

    // Demand Bars
    const getDemandBars = () => {
        const activeColor = isCritical ? 'bg-red-500' : 'bg-yellow-500';
        const inactiveColor = 'bg-slate-700';

        return (
            <div className="flex gap-1">
                <div className={`h-1.5 w-8 rounded-full ${activeColor}`}></div>
                <div className={`h-1.5 w-8 rounded-full ${demand !== 'Low' ? activeColor : inactiveColor}`}></div>
                <div className={`h-1.5 w-8 rounded-full ${demand === 'High' ? activeColor : inactiveColor}`}></div>
            </div>
        );
    };

    return (
        <div className={`rounded-lg p-5 border-l-4 ${borderColor} bg-[#1b2723] flex flex-col md:flex-row gap-4 items-start md:items-center justify-between group hover:bg-[#283933] transition-colors`}>
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-white font-bold text-lg">{title}</h4>
                    <span className={`px-2 py-0.5 rounded-full ${bgColor} ${textColor} text-[10px] font-bold uppercase tracking-wide border ${borderColor}/20`}>
                        {level} Gap
                    </span>
                </div>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>

            <div className="flex items-center gap-6 w-full md:w-auto">
                <div className="flex flex-col items-end gap-1 min-w-[100px]">
                    <span className="text-[10px] text-gray-500 uppercase">Market Demand</span>
                    {getDemandBars()}
                    <span className={`text-xs ${textColor} font-bold`}>{demand}</span>
                </div>
                <button className="ml-auto md:ml-0 size-8 flex items-center justify-center rounded-full border border-gray-600 hover:bg-white hover:text-black hover:border-white text-white transition-all">
                    <span className="material-symbols-outlined text-lg">add</span>
                </button>
            </div>
        </div>
    );
};

export default SkillGapCard;
