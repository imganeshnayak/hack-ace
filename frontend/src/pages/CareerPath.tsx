import React from 'react';
import RealityStats from '../components/careerpath/RealityStats';
import SalaryGraph from '../components/careerpath/SalaryGraph';
import MarketGrowth from '../components/careerpath/MarketGrowth';
import RealStories from '../components/careerpath/RealStories';

const CareerPath: React.FC = () => {
    return (
        <div className="animate-fade-in flex flex-col gap-8 pb-10">
            {/* Page Header */}
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-[#1e362e] px-2.5 py-0.5 text-xs font-medium text-primary border border-primary/20">
                            <span className="material-symbols-outlined text-[14px] mr-1">auto_awesome</span> AI Recommended
                        </span>
                        <span className="text-gray-400 text-sm">Last updated 2 days ago</span>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Senior Data Scientist</h1>
                    <p className="text-lg text-gray-400 max-w-2xl">Analyze complex data to drive business decisions. High demand role with strong growth potential in FinTech and Healthcare.</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-400">Match Score</p>
                            <p className="text-3xl font-bold text-primary">88%</p>
                        </div>
                        <div className="relative size-14">
                            <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                <path className="text-[#1e362e]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                                <path className="text-primary drop-shadow-[0_0_8px_rgba(37,244,175,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="88, 100" strokeWidth="3"></path>
                            </svg>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-[#10221c] shadow-[0_0_20px_rgba(37,244,175,0.3)] hover:bg-primary-hover transition-all">
                        <span className="material-symbols-outlined text-[20px]">alt_route</span>
                        Generate Roadmap
                    </button>
                </div>
            </div>

            {/* Main Dashboard Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                {/* Left Column: Reality Stats (Cost, Timeline, Risk) */}
                <div className="lg:col-span-4">
                    <RealityStats />
                </div>

                {/* Middle Column: Graphs & Skills */}
                <div className="space-y-6 lg:col-span-5">
                    <SalaryGraph />
                    <MarketGrowth />

                    {/* Skills Matrix */}
                    <div className="rounded-xl border border-[#1e362e] bg-[#162b24] p-6">
                        <div className="mb-4">
                            <h3 className="text-lg font-medium text-white">Skills Matrix</h3>
                            <p className="text-xs text-gray-400 mt-1">Based on 50k+ job listings</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <span className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Python</span>
                            <span className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">SQL</span>
                            <span className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Machine Learning</span>
                            <span className="rounded-md border border-[#1e362e] bg-[#1e362e] px-3 py-1 text-sm font-medium text-gray-300">TensorFlow</span>
                            <span className="rounded-md border border-[#1e362e] bg-[#1e362e] px-3 py-1 text-sm font-medium text-gray-300">AWS</span>
                            <span className="rounded-md border border-[#1e362e] bg-[#1e362e] px-3 py-1 text-sm font-medium text-gray-300">Statistics</span>
                            <span className="rounded-md border border-[#1e362e] bg-[#1e362e] px-3 py-1 text-sm font-medium text-gray-300">Data Vis</span>
                            <span className="rounded-md border border-[#1e362e] bg-[#1e362e] px-3 py-1 text-sm font-medium text-gray-300">Communication</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Success Stories & Mentor */}
                <div className="lg:col-span-3">
                    <RealStories />
                </div>
            </div>
        </div>
    );
};

export default CareerPath;
