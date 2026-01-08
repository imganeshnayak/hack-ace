import React, { useEffect } from 'react';
import { useUserStore } from '../store/useUserStore';
import ResumeUpload from '../components/dashboard/ResumeUpload';
import EmployabilityGauge from '../components/dashboard/EmployabilityGauge';
import TwinAvatar from '../components/dashboard/TwinAvatar';
import SkillRadarChart from '../components/dashboard/SkillRadarChart';
import ReadinessBreakdown from '../components/dashboard/ReadinessBreakdown';

const Dashboard: React.FC = () => {
    const { name, resumeUploaded, employabilityScore } = useUserStore();

    if (!resumeUploaded) {
        return (
            <div className="flex flex-col items-center justify-center h-[70vh] animate-fade-in">
                <div className="max-w-xl w-full">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2">Initialize Your Twin</h2>
                        <p className="text-gray-400">Upload your resume to generate a real-time simulation of your professional identity.</p>
                    </div>
                    <ResumeUpload />
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            {/* Page Heading */}
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/20">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mr-1.5 animate-pulse"></span>
                            Live Analysis
                        </span>
                        <span className="text-xs text-gray-400">Last updated: Just now</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">Employability Digital Twin</h2>
                    <p className="mt-1 text-gray-400 text-lg">Real-time simulation of your profile against 50M+ job descriptions.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center justify-center rounded-lg border border-[#283933] bg-[#1b2723] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#283933] transition-colors">
                        Export PDF
                    </button>
                    <button className="flex items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-[#111816] hover:bg-gray-100 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <span className="material-symbols-outlined text-[18px] mr-2">refresh</span>
                        Recalibrate Twin
                    </button>
                </div>
            </div>

            {/* Stats Row */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="group relative overflow-hidden rounded-xl border border-[#283933] bg-[#1b2723] p-6 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,244,175,0.05)]">
                    <div className="flex justify-between items-start mb-4">
                        <div className="rounded-lg bg-[#283933] p-2 text-white group-hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">speed</span>
                        </div>
                        <span className="flex items-center text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                            <span className="material-symbols-outlined text-[14px] mr-1">arrow_upward</span> 12%
                        </span>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">Industry Readiness Score</p>
                    <div className="flex items-baseline gap-2 mt-1">
                        <h3 className="text-3xl font-bold text-white">{employabilityScore}<span className="text-lg text-gray-400">/100</span></h3>
                    </div>
                    <div className="mt-4 h-1.5 w-full rounded-full bg-[#283933]">
                        <div className="h-1.5 rounded-full bg-primary shadow-[0_0_10px_#25f4af]" style={{ width: `${employabilityScore}%` }}></div>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-[#283933] bg-[#1b2723] p-6 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,244,175,0.05)]">
                    <div className="flex justify-between items-start mb-4">
                        <div className="rounded-lg bg-[#283933] p-2 text-white group-hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">verified_user</span>
                        </div>
                        <span className="flex items-center text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">Top 5%</span>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">Profile Strength</p>
                    <div className="flex items-baseline gap-2 mt-1">
                        <h3 className="text-3xl font-bold text-white">Elite</h3>
                    </div>
                    <div className="mt-4 flex gap-1">
                        <div className="h-1.5 flex-1 rounded-l-full bg-primary"></div>
                        <div className="h-1.5 flex-1 bg-primary"></div>
                        <div className="h-1.5 flex-1 bg-primary"></div>
                        <div className="h-1.5 flex-1 bg-primary"></div>
                        <div className="h-1.5 flex-1 rounded-r-full bg-[#283933]"></div>
                    </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border border-[#283933] bg-[#1b2723] p-6 transition-all hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,244,175,0.05)]">
                    <div className="flex justify-between items-start mb-4">
                        <div className="rounded-lg bg-[#283933] p-2 text-white group-hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">work</span>
                        </div>
                        <span className="flex items-center text-xs font-medium text-gray-400 bg-[#283933] px-2 py-1 rounded-full">Stable</span>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">Market Demand</p>
                    <div className="flex items-baseline gap-2 mt-1">
                        <h3 className="text-3xl font-bold text-white">High</h3>
                    </div>
                    <div className="mt-4 flex -space-x-2">
                        <div className="h-8 w-8 rounded-full border-2 border-[#1b2723] bg-[#283933] flex items-center justify-center text-[10px] text-white font-bold">G</div>
                        <div className="h-8 w-8 rounded-full border-2 border-[#1b2723] bg-[#283933] flex items-center justify-center text-[10px] text-white font-bold">A</div>
                        <div className="h-8 w-8 rounded-full border-2 border-[#1b2723] bg-[#283933] flex items-center justify-center text-[10px] text-white font-bold">M</div>
                        <div className="h-8 w-8 rounded-full border-2 border-[#1b2723] bg-[#3f4a46] flex items-center justify-center text-xs font-medium text-white pl-1">+12</div>
                    </div>
                </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 mb-10">
                {/* Left Column: Twin Visual (4 cols) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <TwinAvatar />
                    <ReadinessBreakdown />
                </div>

                {/* Center Column: Radar & Analysis (8 cols) */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    <SkillRadarChart />

                    {/* Actionable Insights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative overflow-hidden rounded-xl border border-l-4 border-[#283933] border-l-primary bg-[#1b2723] p-4 shadow-md hover:translate-x-1 transition-transform cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <span className="inline-block rounded bg-primary/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">High Impact</span>
                                <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">Advanced Prototyping</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Add variables and logic to your Figma portfolio. It increases interview chances by 22%.</p>
                        </div>
                        <div className="relative overflow-hidden rounded-xl border border-l-4 border-[#283933] border-l-yellow-400 bg-[#1b2723] p-4 shadow-md hover:translate-x-1 transition-transform cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <span className="inline-block rounded bg-yellow-400/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-yellow-400">Medium</span>
                                <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">Update "About" Section</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">Your summary lacks keywords: "Strategic Thinking" and "Agile".</p>
                        </div>
                        <div className="relative overflow-hidden rounded-xl border border-l-4 border-[#283933] border-l-blue-400 bg-[#1b2723] p-4 shadow-md hover:translate-x-1 transition-transform cursor-pointer">
                            <div className="flex justify-between items-start mb-1">
                                <span className="inline-block rounded bg-blue-400/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-blue-400">Network</span>
                                <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
                            </div>
                            <h4 className="text-sm font-bold text-white mb-1">Connect with Peers</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">3 alumni from your university work at target companies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
