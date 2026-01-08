import React from 'react';

const LearningStats: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* AI Insight Widget */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1b2723] to-[#10221c] border border-primary/30 p-5">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                <div className="flex items-start gap-4 mb-3">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined">smart_toy</span>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm">JobTwin AI Insight</h4>
                        <p className="text-gray-400 text-xs">Based on market trends</p>
                    </div>
                </div>
                <p className="text-white text-sm leading-relaxed mb-4">
                    Demand for <span className="text-primary font-medium">Design Systems</span> specialists has grown by 22% this month. Prioritize the "Figma Auto-Layout" module to boost your profile visibility.
                </p>
                <div className="flex gap-2">
                    <button className="text-xs font-bold text-[#10221c] bg-primary/90 hover:bg-primary px-3 py-1.5 rounded transition-colors">Apply to Roadmap</button>
                    <button className="text-xs font-bold text-white bg-transparent border border-[#3b544c] hover:border-primary px-3 py-1.5 rounded transition-colors">Dismiss</button>
                </div>
            </div>

            {/* Weekly Activity Stats */}
            <div className="rounded-xl bg-[#1b2723] border border-[#283933] p-5">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-bold text-sm">Learning Velocity</h4>
                    <span className="text-primary text-xs font-bold">+12% vs last week</span>
                </div>
                {/* Simple Bar Chart Visualization */}
                <div className="flex items-end justify-between gap-2 h-24 pt-4 border-b border-[#283933] mb-3 px-1">
                    <div className="w-full bg-[#1e2e28] rounded-t-sm h-[40%] hover:bg-primary/50 transition-all cursor-pointer group relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">2h</div>
                    </div>
                    <div className="w-full bg-[#1e2e28] rounded-t-sm h-[60%] hover:bg-primary/50 transition-all cursor-pointer group relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">3h</div>
                    </div>
                    <div className="w-full bg-[#1e2e28] rounded-t-sm h-[30%] hover:bg-primary/50 transition-all cursor-pointer group relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">1.5h</div>
                    </div>
                    <div className="w-full bg-[#1e2e28] rounded-t-sm h-[80%] hover:bg-primary/50 transition-all cursor-pointer group relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">4h</div>
                    </div>
                    <div className="w-full bg-primary rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(37,244,175,0.3)] group relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">4.5h</div>
                    </div>
                    <div className="w-full bg-[#1e2e28] rounded-t-sm h-[20%] hover:bg-primary/50 transition-all cursor-pointer group relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">1h</div>
                    </div>
                    <div className="w-full bg-[#1e2e28] rounded-t-sm h-[10%] hover:bg-primary/50 transition-all cursor-pointer group relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">0.5h</div>
                    </div>
                </div>
                <div className="flex justify-between text-gray-400 text-[10px] font-mono px-1">
                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                </div>
            </div>

            {/* Badges */}
            <div className="rounded-xl bg-[#1b2723] border border-[#283933] p-5">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-bold text-sm">Badges Earned</h4>
                    <button className="text-gray-400 hover:text-white text-xs">View All</button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                    <div className="aspect-square rounded-lg bg-[#1e2e28] border border-[#3b544c] flex items-center justify-center text-primary group cursor-pointer hover:border-primary transition-colors relative">
                        <span className="material-symbols-outlined">verified</span>
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
                    </div>
                    <div className="aspect-square rounded-lg bg-[#1e2e28] border border-[#3b544c] flex items-center justify-center text-blue-400 group cursor-pointer hover:border-blue-400 transition-colors relative">
                        <span className="material-symbols-outlined">rocket_launch</span>
                        <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
                    </div>
                    <div className="aspect-square rounded-lg bg-[#1e2e28] border border-[#3b544c] flex items-center justify-center text-purple-400 group cursor-pointer hover:border-purple-400 transition-colors relative">
                        <span className="material-symbols-outlined">palette</span>
                        <div className="absolute inset-0 bg-purple-400/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
                    </div>
                    <div className="aspect-square rounded-lg bg-transparent border border-dashed border-[#3b544c] flex items-center justify-center text-[#3b544c]">
                        <span className="material-symbols-outlined text-lg">add</span>
                    </div>
                </div>
            </div>

            {/* Skill Gap Analysis (Small) */}
            <div className="rounded-xl bg-[#1b2723] border border-[#283933] p-5">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-bold text-sm">Skill Gap Analysis</h4>
                </div>
                <div className="flex flex-col gap-3">
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-white">Prototyping</span>
                            <span className="text-primary font-bold">92%</span>
                        </div>
                        <div className="w-full bg-[#1e2e28] h-1.5 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[92%] rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-white">Wireframing</span>
                            <span className="text-white font-bold">78%</span>
                        </div>
                        <div className="w-full bg-[#1e2e28] h-1.5 rounded-full overflow-hidden">
                            <div className="bg-blue-400 h-full w-[78%] rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-white">User Testing</span>
                            <span className="text-gray-400 font-bold">45%</span>
                        </div>
                        <div className="w-full bg-[#1e2e28] h-1.5 rounded-full overflow-hidden">
                            <div className="bg-yellow-400 h-full w-[45%] rounded-full"></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs mb-1">
                            <span className="text-white">Coding (React)</span>
                            <span className="text-gray-400 font-bold">20%</span>
                        </div>
                        <div className="w-full bg-[#1e2e28] h-1.5 rounded-full overflow-hidden">
                            <div className="bg-red-400 h-full w-[20%] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LearningStats;
