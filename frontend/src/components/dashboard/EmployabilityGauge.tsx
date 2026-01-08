import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface EmployabilityGaugeProps {
    score: number;
}

const EmployabilityGauge: React.FC<EmployabilityGaugeProps> = ({ score }) => {
    const data = [
        { name: 'Score', value: score },
        { name: 'Remaining', value: 100 - score },
    ];

    // Gradient colors based on score
    const getColors = (score: number) => {
        if (score >= 80) return ['#25f4af', '#1a2220']; // Green
        if (score >= 60) return ['#fbbf24', '#1a2220']; // Yellow
        return ['#ef4444', '#1a2220']; // Red
    };

    const colors = getColors(score);

    return (
        <div className="bg-surface-dark border border-[#283933] rounded-xl p-6 flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-6xl text-white">speed</span>
            </div>

            <h3 className="text-white font-bold text-lg w-full text-left mb-2">Twin Factor</h3>
            <p className="text-gray-400 text-xs w-full text-left mb-4">Overall employability resonance</p>

            <div className="relative h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            startAngle={180}
                            endAngle={0}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            <Cell key="cell-0" fill={colors[0]} />
                            <Cell key="cell-1" fill={colors[1]} />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-x-0 bottom-[20%] flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-bold text-white leading-none">{score}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">/ 100</span>
                </div>
            </div>

            <div className="w-full flex justify-between px-4 mt-2">
                <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 uppercase">Growth</span>
                    <span className="text-primary font-bold">+12%</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-500 uppercase">Rank</span>
                    <span className="text-white font-bold">Top 15%</span>
                </div>
            </div>
        </div>
    );
};

export default EmployabilityGauge;
