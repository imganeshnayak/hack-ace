import React from 'react';

const InterviewChat: React.FC = () => {
    return (
        <div className="flex flex-col h-full gap-4 relative">
            {/* Chat Window */}
            <div className="bg-[#162822] border border-white/5 bg-opacity-70 backdrop-blur-md rounded-xl flex-1 flex flex-col relative overflow-hidden">
                {/* AI Status Indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                {/* Chat History */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* AI Message */}
                    <div className="flex gap-4 max-w-[90%]">
                        <div className="flex-none size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary">smart_toy</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-bold text-primary uppercase tracking-wider ml-1">JobTwin AI</span>
                            <div className="bg-[#1f362e] border border-white/5 rounded-2xl rounded-tl-none p-4 shadow-lg">
                                <p className="text-gray-200 leading-relaxed">Let's dive deeper. Tell me about a time you had to manage conflicting priorities with tight deadlines. How did you decide what to prioritize?</p>
                            </div>
                        </div>
                    </div>

                    {/* User Message */}
                    <div className="flex flex-row-reverse gap-4 max-w-[90%] ml-auto">
                        <div className="flex-none size-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC77g1vSqWrA-bFuJf1CpKKWXJRrVbqiZCdv5STn-GNfQxmieb36bNVdMrEwY908mflwstvd5FukDyQ2c0jZJfZEWO-cB9M07et96eUGnbtYqbQSHasyPP_O86NUQlp-_7BDEdz4zoZKNczLu7F1Isirk8wPa_uG3tsVjOWwbMkuSMAG4OPOW7USUeqBT0NsKy2hIrQ4r_v7iK07LFmds0f-NrNYqjBTCttrxUH0ZhQd2MVImjY4DywWHOoN_E-k8nSr3r05jv6mMbF")' }}>
                        </div>
                        <div className="flex flex-col gap-1 items-end">
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-1">You</span>
                            <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-none p-4 shadow-lg">
                                <p className="text-white leading-relaxed">In my previous role as a Product Lead, we had a major feature launch coinciding with a critical bug fix request from our enterprise client. I used the Eisenhower Matrix to categorize tasks...</p>
                            </div>
                        </div>
                    </div>

                    {/* Live Recording Indicator / Waveform */}
                    <div className="flex flex-col items-center justify-center py-8 gap-4 opacity-100 transition-opacity">
                        <div className="flex items-center gap-1 h-12">
                            {[...Array(13)].map((_, i) => (
                                <div key={i} className="w-1.5 bg-primary/40 rounded-full animate-[wave_1s_ease-in-out_infinite]" style={{ animationDuration: `${0.8 + Math.random() * 0.5}s`, height: i % 2 === 0 ? '40%' : '80%' }}></div>
                            ))}
                        </div>
                        <p className="text-primary text-sm font-mono animate-pulse">LISTENING...</p>
                    </div>
                </div>

                {/* Bottom Controls */}
                <div className="p-6 pt-0 flex justify-center items-end relative z-10 w-full mt-auto">
                    {/* Gradient cover is handled by parent or just natural stacking, but adding explicit bg fade helps focus */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#10221c] to-transparent pointer-events-none"></div>

                    <div className="relative z-20 flex items-center gap-6">
                        <button className="size-14 rounded-full bg-[#1f362e] hover:bg-red-500/20 text-white hover:text-red-400 border border-white/10 hover:border-red-500/50 flex items-center justify-center transition-all group">
                            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">close</span>
                        </button>
                        <button className="size-20 rounded-full bg-primary hover:bg-[#1ce09e] text-[#10221c] shadow-[0_0_30px_rgba(37,244,175,0.4)] hover:shadow-[0_0_50px_rgba(37,244,175,0.6)] flex items-center justify-center transition-all scale-100 hover:scale-105 active:scale-95 group">
                            <span className="material-symbols-outlined text-4xl group-hover:animate-pulse">mic</span>
                        </button>
                        <button className="size-14 rounded-full bg-[#1f362e] hover:bg-white/10 text-white border border-white/10 flex items-center justify-center transition-all group">
                            <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">keyboard</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewChat;
