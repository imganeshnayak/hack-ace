import React from 'react';

interface SalaryGraphProps {
    salary: {
        current: number;
        progression: Array<{ label: string; value: number }>;
    };
}

const SalaryGraph: React.FC<SalaryGraphProps> = ({ salary }) => {
    return (
        <div className="rounded-xl border border-[#1e362e] bg-[#162b24] p-6">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-medium text-white">Salary Expectations</h3>
                    <p className="text-xs text-gray-400">Base salary progression over 5 years</p>
                </div>
                <div className="text-right">
                    <p className="text-xs text-gray-400">Senior Level</p>
                    <p className="text-xl font-bold text-primary">${(salary.current / 1000).toFixed(0)}k</p>
                </div>
            </div>
            {/* CSS Chart Representation */}
            <div className="relative h-48 w-full mt-6">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-600 font-mono">
                    <div className="border-b border-white/5 pb-1">180k</div>
                    <div className="border-b border-white/5 pb-1">140k</div>
                    <div className="border-b border-white/5 pb-1">100k</div>
                    <div className="border-b border-white/5 pb-1">60k</div>
                </div>
                {/* Line Graph SVG - Static for now but could be dynamic based on points if needed */}
                <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="0%" stopColor="#25f4af" stopOpacity="0.2"></stop>
                            <stop offset="100%" stopColor="#25f4af" stopOpacity="0"></stop>
                        </linearGradient>
                    </defs>
                    <path d="M0,130 C40,120 80,110 120,90 C160,70 220,50 300,20" fill="none" stroke="#25f4af" strokeLinecap="round" strokeWidth="3" vectorEffect="non-scaling-stroke"></path>
                    <path d="M0,130 C40,120 80,110 120,90 C160,70 220,50 300,20 L300,160 L0,160 Z" fill="url(#gradientArea)" stroke="none"></path>
                    {/* Points */}
                    <circle cx="0%" cy="130" fill="#10221c" r="4" stroke="#25f4af" strokeWidth="2"></circle>
                    <circle cx="40%" cy="90" fill="#10221c" r="4" stroke="#25f4af" strokeWidth="2"></circle>
                    <circle cx="100%" cy="20" fill="#10221c" r="4" stroke="#25f4af" strokeWidth="2"></circle>
                </svg>
                {/* X Axis Labels */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs text-gray-500 font-mono">
                    {salary.progression.map((item, index) => (
                        <span key={index}>{item.label}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SalaryGraph;
