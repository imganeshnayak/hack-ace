import React from 'react';

const MarketGrowth: React.FC = () => {
    return (
        <div className="rounded-xl border border-[#1e362e] bg-[#162b24] p-6">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">Market Demand</h3>
                <span className="flex items-center gap-1 text-sm text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span> +22% YoY
                </span>
            </div>
            <div className="flex gap-2 h-24 items-end">
                <div className="w-1/5 bg-[#1e362e] hover:bg-primary/40 transition-colors rounded-t-sm h-[40%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black px-2 py-1 text-xs rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">2020</div>
                </div>
                <div className="w-1/5 bg-[#1e362e] hover:bg-primary/40 transition-colors rounded-t-sm h-[55%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black px-2 py-1 text-xs rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">2021</div>
                </div>
                <div className="w-1/5 bg-[#1e362e] hover:bg-primary/40 transition-colors rounded-t-sm h-[70%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black px-2 py-1 text-xs rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">2022</div>
                </div>
                <div className="w-1/5 bg-[#1e362e] hover:bg-primary/40 transition-colors rounded-t-sm h-[85%] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black px-2 py-1 text-xs rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">2023</div>
                </div>
                <div className="w-1/5 bg-primary hover:bg-primary-hover transition-colors rounded-t-sm h-[100%] shadow-[0_0_15px_rgba(37,244,175,0.4)] relative group">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black px-2 py-1 text-xs rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">2024</div>
                </div>
            </div>
            <p className="mt-4 text-xs text-gray-400">Demand for Data Scientists is projected to grow much faster than average for all occupations.</p>
        </div>
    );
};

export default MarketGrowth;
