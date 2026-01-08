import React from 'react';
import RoadmapTimeline from '../components/roadmap/RoadmapTimeline';
import RecommendationProjects from '../components/roadmap/RecommendationProjects';
import LearningStats from '../components/roadmap/LearningStats';

const Roadmap: React.FC = () => {
    return (
        <div className="animate-fade-in flex flex-col gap-8 pb-10">

            {/* Hero Section with Resume Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Greeting & Readiness */}
                <div className="lg:col-span-2 relative overflow-hidden rounded-xl bg-[#1b2723] border border-[#283933] p-8 flex flex-col justify-between min-h-[280px]">
                    {/* Abstract Background Pattern */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle at 100% 0%, #25f4af 0%, transparent 50%)' }}></div>
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e2e28] border border-[#283933] w-fit">
                            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-medium text-primary uppercase tracking-wider">Phase 2: Advanced Prototyping</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-xl">
                            Your Path to Senior Product Designer
                        </h1>
                        <p className="text-gray-400 text-lg max-w-md">
                            You're outpacing 85% of your peers. Keep up the momentum to reach "Job Ready" status by August.
                        </p>
                    </div>
                    <div className="relative z-10 mt-8 flex flex-wrap gap-4">
                        <button className="flex items-center justify-center gap-2 h-12 px-6 bg-primary hover:bg-primary-dark text-background-dark text-base font-bold rounded-lg shadow-[0_0_15px_rgba(37,244,175,0.3)] transition-all">
                            <span className="material-symbols-outlined">play_arrow</span>
                            Resume Learning
                        </button>
                        <button className="flex items-center justify-center gap-2 h-12 px-6 bg-transparent border border-[#3b544c] hover:border-primary text-white text-base font-medium rounded-lg transition-colors">
                            View Analytics
                        </button>
                    </div>
                </div>

                {/* Readiness Gauge Card */}
                <div className="rounded-xl bg-[#1b2723] border border-[#283933] p-6 flex flex-col items-center justify-center relative">
                    <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-6 absolute top-6 left-6">Job Readiness</h3>
                    {/* Circular Progress Implementation */}
                    <div className="relative size-48 flex items-center justify-center">
                        {/* Background Circle */}
                        <svg className="w-full h-full transform -rotate-90">
                            <circle cx="96" cy="96" fill="none" r="88" stroke="#1e2e28" strokeWidth="12"></circle>
                            <circle className="drop-shadow-[0_0_10px_rgba(37,244,175,0.4)]" cx="96" cy="96" fill="none" r="88" stroke="#25f4af" strokeDasharray="552" strokeDashoffset="303" strokeLinecap="round" strokeWidth="12"></circle>
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-5xl font-bold text-white">45%</span>
                            <span className="text-sm text-gray-400 mt-1">Industry Ready</span>
                        </div>
                    </div>
                    <div className="w-full mt-6 grid grid-cols-2 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-white">12</div>
                            <div className="text-xs text-gray-400">Skills Mastered</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">340</div>
                            <div className="text-xs text-gray-400">XP This Week</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Two Column Layout: Timeline vs Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Timeline & Projects (8 cols) */}
                <div className="lg:col-span-8 flex flex-col gap-10">
                    {/* Timeline Section */}
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-white text-2xl font-bold">Current Milestone</h2>
                            <button className="text-sm text-primary hover:text-white transition-colors">View Full Roadmap</button>
                        </div>
                        <RoadmapTimeline />
                    </div>

                    {/* Projects Section */}
                    <div>
                        <h2 className="text-white text-2xl font-bold mb-6">Projects to Build</h2>
                        <RecommendationProjects />
                    </div>
                </div>

                {/* Right Column: Sidebar Widgets (4 cols) */}
                <div className="lg:col-span-4">
                    <LearningStats />
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
