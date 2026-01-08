import React from 'react';
import SkillGapCard from '../components/skillgap/SkillGapCard';
import PeerComparisonChart from '../components/skillgap/PeerComparisonChart';
import LearningPathPreview from '../components/skillgap/LearningPathPreview';

const SkillGapDetector: React.FC = () => {
    return (
        <div className="animate-fade-in flex flex-col gap-8">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#283933] text-gray-400 border border-[#3f4a46]">Target Role</span>
                        <span className="material-symbols-outlined text-gray-500 text-sm">arrow_forward</span>
                        <span className="text-primary text-xs font-bold tracking-wide uppercase">Active Track</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">Senior Product Designer</h1>
                    <p className="text-gray-400 max-w-xl">AI-powered analysis of your current skillset against 5,400+ active job listings and industry standards.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1b2723] border border-[#283933] hover:border-gray-500 text-white text-sm font-semibold transition-colors">
                        <span className="material-symbols-outlined text-lg">edit</span>
                        Edit Role
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary hover:bg-primary-dark text-background-dark text-sm font-bold shadow-[0_0_15px_rgba(37,244,175,0.3)] transition-all">
                        <span className="material-symbols-outlined text-lg">download</span>
                        Export Report
                    </button>
                </div>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* Hero Stat: Role Readiness (Left - Large) */}
                <div className="lg:col-span-4 bg-[#1b2723] rounded-xl p-6 border border-[#283933] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-symbols-outlined text-8xl text-primary">analytics</span>
                    </div>
                    <h3 className="text-gray-400 font-medium mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg">verified</span>
                        Role Readiness
                    </h3>
                    <div className="flex flex-col items-center justify-center py-4">
                        {/* Circular Progress Visualization */}
                        <div className="relative size-48 rounded-full flex items-center justify-center mb-6" style={{ background: 'conic-gradient(#25f4af 68%, #283933 0)' }}>
                            <div className="absolute inset-1 rounded-full bg-[#1b2723] flex flex-col items-center justify-center z-10">
                                <span className="text-5xl font-bold text-white">68%</span>
                                <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">Match</span>
                            </div>
                        </div>
                        <div className="w-full space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Current Level</span>
                                <span className="text-white font-medium">Mid-Senior</span>
                            </div>
                            <div className="w-full bg-[#283933] rounded-full h-1.5">
                                <div className="bg-primary h-1.5 rounded-full" style={{ width: '68%' }}></div>
                            </div>
                            <p className="text-xs text-center text-gray-500 mt-2">You are in the top 30% of applicants for this role.</p>
                        </div>
                    </div>
                </div>

                {/* Stats & AI Insight (Middle Column) */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Stat: Salary Potential */}
                    <div className="bg-[#1b2723] rounded-xl p-6 border border-[#283933] flex flex-col justify-between hover:border-primary/30 transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <span className="material-symbols-outlined">attach_money</span>
                            </div>
                            <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">+12%</span>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-400 text-sm font-medium">Potential Salary Increase</p>
                            <h4 className="text-3xl font-bold text-white mt-1">+$15k<span className="text-lg text-gray-500 font-normal">/yr</span></h4>
                            <p className="text-xs text-gray-500 mt-2">Closing critical gaps can unlock this value.</p>
                        </div>
                    </div>

                    {/* Stat: Critical Gaps */}
                    <div className="bg-[#1b2723] rounded-xl p-6 border border-[#283933] flex flex-col justify-between hover:border-red-500/30 transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                            <span className="bg-red-500/20 text-red-500 text-xs font-bold px-2 py-1 rounded">Action Needed</span>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-400 text-sm font-medium">Critical Skill Gaps</p>
                            <h4 className="text-3xl font-bold text-white mt-1">4 Skills</h4>
                            <p className="text-xs text-gray-500 mt-2">2 High Impact, 2 Moderate Impact.</p>
                        </div>
                    </div>

                    {/* AI Insight Box */}
                    <div className="md:col-span-2 bg-gradient-to-r from-[#111816] to-[#1b2723] rounded-xl p-1 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                        <div className="bg-[#1b2723]/50 backdrop-blur-sm rounded-lg p-5 flex gap-4 items-start h-full">
                            <div className="bg-primary rounded-full p-2 text-[#111816] shrink-0 mt-1 shadow-[0_0_15px_rgba(37,244,175,0.4)]">
                                <span className="material-symbols-outlined">auto_awesome</span>
                            </div>
                            <div>
                                <h5 className="text-white font-bold text-lg mb-1">AI Twin Recommendation</h5>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Mastering <span className="text-primary font-medium">Figma Variables</span> is your quickest win. It is requested in 85% of Senior roles but only present in 40% of profiles. Learning this will boost your match score by <span className="text-primary font-bold">+8%</span>.
                                </p>
                                <button className="mt-3 text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                                    View Recommended Course <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content: Skill Gap List (Left Column) */}
                <div className="lg:col-span-8 flex flex-col gap-4">
                    <div className="flex items-center justify-between mt-4 mb-2">
                        <h3 className="text-lg font-bold text-white">Skill Analysis</h3>
                        <div className="flex gap-2 bg-[#1b2723] p-1 rounded-lg border border-[#283933]">
                            <button className="px-3 py-1 rounded bg-[#283933] text-white text-xs font-medium shadow-sm">All</button>
                            <button className="px-3 py-1 rounded text-gray-400 hover:text-white text-xs font-medium transition-colors">Missing</button>
                            <button className="px-3 py-1 rounded text-gray-400 hover:text-white text-xs font-medium transition-colors">Mastered</button>
                        </div>
                    </div>

                    <SkillGapCard
                        title="Advanced Prototyping"
                        description="Proficiency with variables, conditional logic, and advanced interactions."
                        level="Critical"
                        demand="High"
                    />
                    <SkillGapCard
                        title="Design Systems (Tokens)"
                        description="Managing token taxonomies and multi-brand system architecture."
                        level="Moderate"
                        demand="Medium"
                    />
                    <SkillGapCard
                        title="Frontend Basics (React)"
                        description="Understanding component lifecycles and prop drilling for better dev handoff."
                        level="Moderate"
                        demand="Medium"
                    />

                    {/* Skill Card: Good (Green - Contextual) */}
                    <div className="bg-[#1b2723] rounded-lg p-5 border-l-4 border-primary flex flex-col md:flex-row gap-4 items-start md:items-center justify-between group hover:bg-[#283933] transition-colors opacity-75 hover:opacity-100">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                                <h4 className="text-white font-bold text-lg">User Research</h4>
                                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide border border-primary/20">Strong Match</span>
                            </div>
                            <p className="text-gray-400 text-sm">Your experience with usability testing exceeds the role average.</p>
                        </div>
                        <div className="flex items-center gap-6 w-full md:w-auto">
                            <div className="flex flex-col items-end gap-1 min-w-[100px]">
                                <span className="text-[10px] text-gray-500 uppercase">Your Proficiency</span>
                                <div className="flex gap-1">
                                    <div className="h-1.5 w-8 bg-primary rounded-full"></div>
                                    <div className="h-1.5 w-8 bg-primary rounded-full"></div>
                                    <div className="h-1.5 w-8 bg-primary rounded-full"></div>
                                </div>
                                <span className="text-xs text-primary font-bold">Expert</span>
                            </div>
                            <div className="size-8 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined text-lg">check</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Right Column: Peer Comparison & Learning Path */}
                <div className="lg:col-span-4 flex flex-col gap-6 mt-4 lg:mt-0">
                    <PeerComparisonChart />
                    <LearningPathPreview />
                </div>
            </div>
        </div>
    );
};

export default SkillGapDetector;
