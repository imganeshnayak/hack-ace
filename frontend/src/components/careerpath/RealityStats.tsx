import React from 'react';

interface RealityStatsProps {
    investment: {
        total: number;
        courses: number;
        tools: number;
        roiTimeframe: string;
        vsIndustry: number;
    };
    timeline: {
        totalYears: number;
        stages: Array<{ name: string; duration: string; skills: string }>;
    };
    risk: {
        level: string;
        competition: string;
        automationImpact: string;
        topApplicantPercent: number;
    };
}

const RealityStats: React.FC<RealityStatsProps> = ({ investment, timeline, risk }) => {
    return (
        <div className="space-y-6">
            {/* Cost & Investment */}
            <div className="group relative overflow-hidden rounded-xl border border-[#1e362e] bg-[#162b24] p-6 transition-all hover:border-primary/30">
                <div className="absolute -right-6 -top-6 size-24 rounded-full bg-primary/5 blur-2xl"></div>
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">Investment Required</h3>
                    <span className="material-symbols-outlined text-gray-400">payments</span>
                </div>
                <div className="mb-2">
                    <span className="text-4xl font-bold text-white">${investment.total.toLocaleString()}</span>
                    <span className="text-sm text-gray-400 ml-2">est. total cost</span>
                </div>
                <p className="mb-4 text-sm text-[#fa5838] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">trending_down</span> {investment.vsIndustry}% vs industry avg
                </p>
                <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Courses</span>
                        <span className="text-white">${investment.courses.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Tools & Certs</span>
                        <span className="text-white">${investment.tools.toLocaleString()}</span>
                    </div>
                    <div className="h-px w-full bg-[#1e362e]"></div>
                    <div className="flex justify-between text-sm font-medium">
                        <span className="text-primary">ROI Timeframe</span>
                        <span className="text-white">{investment.roiTimeframe}</span>
                    </div>
                </div>
            </div>

            {/* Timeline Bar */}
            <div className="rounded-xl border border-[#1e362e] bg-[#162b24] p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">Timeline Reality</h3>
                    <span className="rounded bg-[#1e362e] px-2 py-1 text-xs text-primary">{timeline.totalYears} Years</span>
                </div>
                <div className="relative ml-2 border-l border-dashed border-gray-600 pb-2">
                    {timeline.stages.map((stage, index) => (
                        <div key={index} className="mb-8 ml-6 relative last:mb-0">
                            <span className={`absolute -left-[31px] flex size-4 items-center justify-center rounded-full ${index === 0 ? 'bg-primary' : 'bg-[#1e362e] border border-gray-500'} ring-4 ring-[#162b24]`}></span>
                            <h4 className={`text-sm font-bold ${index === 0 ? 'text-white' : 'text-gray-300'}`}>{stage.name}</h4>
                            <p className="text-xs text-gray-400 mt-1">{stage.duration} • {stage.skills}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Risk & Competition */}
            <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#1e362e] bg-[#162b24] p-4 flex flex-col items-center justify-center text-center">
                    <div className="mb-2 text-yellow-400">
                        <span className="material-symbols-outlined text-[32px]">warning</span>
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Risk Level</p>
                    <p className="text-lg font-bold text-white mt-1">{risk.level}</p>
                    <p className="text-[10px] text-gray-500 mt-1">AI Impact: {risk.automationImpact}</p>
                </div>
                <div className="rounded-xl border border-[#1e362e] bg-[#162b24] p-4 flex flex-col items-center justify-center text-center">
                    <div className="mb-2 text-purple-400">
                        <span className="material-symbols-outlined text-[32px]">groups</span>
                    </div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Competition</p>
                    <p className="text-lg font-bold text-white mt-1">{risk.competition}</p>
                    <p className="text-[10px] text-gray-500 mt-1">Top {risk.topApplicantPercent}% Applicants</p>
                </div>
            </div>
        </div>
    );
};

export default RealityStats;
