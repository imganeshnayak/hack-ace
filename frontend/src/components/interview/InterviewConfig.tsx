import React from 'react';

const InterviewConfig: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 h-full">
            {/* Role Config Card */}
            <div className="bg-[#162822] border border-white/5 bg-opacity-70 backdrop-blur-md rounded-xl p-5 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">tune</span>
                        Configuration
                    </h3>
                </div>
                {/* Role Select */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Target Role</label>
                    <div className="relative">
                        <select className="w-full bg-[#1f362e] border border-white/10 rounded-lg h-12 px-4 text-white appearance-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors cursor-pointer outline-none">
                            <option>Senior Product Manager</option>
                            <option>Full Stack Developer</option>
                            <option>UX Designer</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-3 text-gray-500 pointer-events-none">expand_more</span>
                    </div>
                </div>
                {/* Difficulty */}
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">Difficulty</label>
                    <div className="relative">
                        <select className="w-full bg-[#1f362e] border border-white/10 rounded-lg h-12 px-4 text-white appearance-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors cursor-pointer outline-none">
                            <option>Expert (Hard)</option>
                            <option>Intermediate</option>
                            <option>Junior</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3 top-3 text-gray-500 pointer-events-none">expand_more</span>
                    </div>
                </div>
                {/* Mode Toggle */}
                <div className="bg-[#1f362e] p-1 rounded-lg flex border border-white/5">
                    <button className="flex-1 py-2 text-sm font-bold rounded bg-primary text-[#10221c] shadow-[0_4px_10px_-2px_rgba(37,244,175,0.2)]">Voice Mode</button>
                    <button className="flex-1 py-2 text-sm font-medium rounded text-gray-400 hover:text-white transition-colors">Text Chat</button>
                </div>
            </div>

            {/* Focus Areas */}
            <div className="bg-[#162822] border border-white/5 bg-opacity-70 backdrop-blur-md rounded-xl p-5 flex flex-col gap-4 flex-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-xl">target</span>
                    Focus Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded bg-primary/20 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wide">Behavioral</span>
                    <span className="px-3 py-1.5 rounded bg-[#1f362e] text-gray-300 border border-white/5 text-xs font-bold uppercase tracking-wide hover:border-primary/50 cursor-pointer transition-colors">Technical</span>
                    <span className="px-3 py-1.5 rounded bg-[#1f362e] text-gray-300 border border-white/5 text-xs font-bold uppercase tracking-wide hover:border-primary/50 cursor-pointer transition-colors">Leadership</span>
                    <span className="px-3 py-1.5 rounded bg-[#1f362e] text-gray-300 border border-white/5 text-xs font-bold uppercase tracking-wide hover:border-primary/50 cursor-pointer transition-colors">System Design</span>
                    <span className="px-3 py-1.5 rounded bg-primary/20 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wide">Problem Solving</span>
                </div>
                <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                        <span className="material-symbols-outlined text-red-400">info</span>
                        <p className="text-xs text-gray-300 leading-relaxed">Focusing on <span className="text-white font-bold">STAR Method</span> responses for this session.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewConfig;
