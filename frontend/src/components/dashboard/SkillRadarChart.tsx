import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const data = [
    { subject: 'Technical', A: 85, B: 65, fullMark: 100 },
    { subject: 'Strategy', A: 65, B: 45, fullMark: 100 },
    { subject: 'Leadership', A: 40, B: 30, fullMark: 100 },
    { subject: 'Execution', A: 90, B: 75, fullMark: 100 },
    { subject: 'Soft Skills', A: 75, B: 60, fullMark: 100 },
    { subject: 'Creativity', A: 80, B: 55, fullMark: 100 },
];

const SkillRadarChart: React.FC = () => {
    return (
        <div className="flex-1 rounded-xl border border-[#283933] bg-[#1b2723] p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-white">Strength vs. Benchmark</h3>
                <div className="flex items-center gap-3 text-xs">
                    <div className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-primary"></span>
                        <span className="text-white">You</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="h-2 w-2 rounded-full bg-[#3f4a46]"></span>
                        <span className="text-gray-400">Market Avg</span>
                    </div>
                </div>
            </div>
            <p className="text-xs text-gray-400 mb-6">Based on Senior Product Designer roles in NY.</p>

            <div className="flex-1 min-h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                        <PolarGrid stroke="#283933" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#9cbab0', fontSize: 10 }} />
                        <Radar
                            name="You"
                            dataKey="A"
                            stroke="#25f4af"
                            strokeWidth={2}
                            fill="#25f4af"
                            fillOpacity={0.2}
                        />
                        <Radar
                            name="Market Avg"
                            dataKey="B"
                            stroke="#525252"
                            strokeDasharray="3 3"
                            fill="transparent"
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SkillRadarChart;
