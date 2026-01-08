import React from 'react';

interface MarketGrowthProps {
    marketGrowth: {
        yoy: number;
        demandText: string;
        history: Array<{ year: number; label: string; value: number }>;
    };
}

const MarketGrowth: React.FC<MarketGrowthProps> = ({ marketGrowth }) => {
    return (
        <div className="rounded-xl border border-[#1e362e] bg-[#162b24] p-6">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">Market Demand</h3>
                <span className="flex items-center gap-1 text-sm text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span> +{marketGrowth.yoy}% YoY
                </span>
            </div>
            <div className="flex gap-2 h-24 items-end">
                {marketGrowth.history.map((item, index) => (
                    <div key={index} className={`w-1/5 ${index === marketGrowth.history.length - 1 ? 'bg-primary hover:bg-primary-hover shadow-[0_0_15px_rgba(37,244,175,0.4)]' : 'bg-[#1e362e] hover:bg-primary/40'} transition-colors rounded-t-sm relative group`} style={{ height: `${item.value}%` }}>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black px-2 py-1 text-xs rounded text-white opacity-0 group-hover:opacity-100 transition-opacity z-10">{item.year}</div>
                    </div>
                ))}
            </div>
            <p className="mt-4 text-xs text-gray-400">{marketGrowth.demandText}</p>
        </div>
    );
};

export default MarketGrowth;
