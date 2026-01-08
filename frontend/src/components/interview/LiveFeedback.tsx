import React from 'react';

const LiveFeedback: React.FC = () => {
    return (
        <div className="flex flex-col gap-6 h-full overflow-y-auto pl-2">
            {/* Score Summary */}
            <div className="bg-[#162822] border border-white/5 bg-opacity-70 backdrop-blur-md rounded-xl p-6 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-white">Live Analysis</h3>
                    <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-bold border border-green-500/20">GOOD</span>
                </div>
                <div className="flex items-center gap-6">
                    {/* Radial Progress Placeholder */}
                    <div className="relative size-24 flex-none">
                        <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                            <path className="text-white/5" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                            <path className="text-primary drop-shadow-[0_0_10px_rgba(37,244,175,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="85, 100" strokeWidth="3"></path>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                            <span className="text-2xl font-bold text-white">85</span>
                            <span className="text-[10px] text-gray-400 uppercase">Score</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 flex-1">
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400">Confidence</span>
                                <span className="text-primary">High</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[90%] rounded-full shadow-[0_0_10px_rgba(37,244,175,0.5)]"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs mb-1">
                                <span className="text-gray-400">Pacing</span>
                                <span className="text-yellow-400">Fast</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-400 w-[75%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Instant Feedback */}
            <div className="bg-[#162822] border border-white/5 bg-opacity-70 backdrop-blur-md rounded-xl p-0 flex flex-col flex-1 overflow-hidden">
                <div className="p-5 border-b border-white/5">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-xl">tips_and_updates</span>
                        AI Tips
                    </h3>
                </div>
                <div className="flex-1 overflow-y-auto p-5 space-y-4">
                    {/* Tip Item */}
                    <div className="bg-[#1f362e] p-4 rounded-lg border-l-4 border-primary">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                            <div>
                                <p className="text-sm font-bold text-white mb-1">Strong Opening</p>
                                <p className="text-xs text-gray-400 leading-relaxed">You clearly stated the context of the situation immediately. Keep this up.</p>
                            </div>
                        </div>
                    </div>
                    {/* Tip Item */}
                    <div className="bg-[#1f362e] p-4 rounded-lg border-l-4 border-yellow-500">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-yellow-500 text-sm mt-0.5">speed</span>
                            <div>
                                <p className="text-sm font-bold text-white mb-1">Pacing Alert</p>
                                <p className="text-xs text-gray-400 leading-relaxed">You are speaking at ~160 words per minute. Try to slow down to emphasize key points.</p>
                            </div>
                        </div>
                    </div>
                    {/* Tip Item */}
                    <div className="bg-[#1f362e] p-4 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-blue-500 text-sm mt-0.5">psychology</span>
                            <div>
                                <p className="text-sm font-bold text-white mb-1">Quantify Impact</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Try to add specific metrics to your result (e.g., "Increased efficiency by 20%").</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Badges */}
            <div className="bg-[#162822] border border-white/5 bg-opacity-70 backdrop-blur-md rounded-xl p-5">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Session Badges</h3>
                <div className="flex gap-3">
                    <div className="size-12 rounded-lg bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 flex items-center justify-center group relative cursor-help">
                        <span className="material-symbols-outlined text-primary">record_voice_over</span>
                        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs p-2 rounded w-24 text-center z-50">Clear Voice</div>
                    </div>
                    <div className="size-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 flex items-center justify-center group relative cursor-help">
                        <span className="material-symbols-outlined text-purple-400">architecture</span>
                        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs p-2 rounded w-24 text-center z-50">Structured</div>
                    </div>
                    <div className="size-12 rounded-lg bg-[#1f362e] border border-white/5 flex items-center justify-center opacity-50">
                        <span className="material-symbols-outlined text-gray-500">lock</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveFeedback;
