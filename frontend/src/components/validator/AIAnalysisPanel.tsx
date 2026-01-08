import React from 'react';

const AIAnalysisPanel: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* AI Evaluation Window */}
            <div className="bg-[#0a0f0d] border border-[#283933] rounded-xl p-5 flex flex-col gap-4 relative overflow-hidden h-[240px]">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-lg animate-spin">data_usage</span>
                        <h3 className="text-sm font-bold text-white tracking-wide uppercase">AI_EVAL_PROTOCOL_v4</h3>
                    </div>
                    <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">ONLINE</span>
                </div>
                {/* Terminal Output */}
                <div className="flex-1 overflow-y-auto font-mono text-xs space-y-2 p-3 bg-black/40 rounded border border-white/5 relative">
                    <div className="absolute top-0 left-0 right-0 h-full w-full pointer-events-none bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-[scanline_3s_linear_infinite] z-10"></div>
                    <div className="text-[#9cbab0]">&gt; Initializing rendering engine...</div>
                    <div className="text-[#9cbab0]">&gt; Loading dataset: 10,000 items</div>
                    <div className="text-green-500 font-bold">&gt; [PASS] Virtualization detected (react-window)</div>
                    <div className="text-green-500 font-bold">&gt; [PASS] useMemo implementation verified</div>
                    <div className="text-[#9cbab0]">&gt; Calculating average render time...</div>
                    <div className="text-primary">&gt; Result: 14ms (Target: &lt;16ms)</div>
                    <div className="text-white mt-2 border-t border-white/10 pt-2 flex items-center gap-2">
                        <span className="w-1.5 h-3 bg-primary animate-pulse"></span>
                        Analysis Finalized.
                    </div>
                </div>
            </div>

            {/* Results & Badge Card */}
            <div className="bg-[#16201d] border border-[#283933] rounded-xl p-0 overflow-hidden flex flex-col shadow-lg">
                <div className="p-5 border-b border-[#283933] flex justify-between items-start">
                    <div>
                        <h3 className="text-lg font-bold text-white">Validation Results</h3>
                        <p className="text-xs text-[#9cbab0] mt-1">Based on performance benchmarks</p>
                    </div>
                    {/* Confidence Score Radial */}
                    <div className="relative size-14 flex items-center justify-center">
                        <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                            <path className="text-[#283933]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
                            <path className="text-primary drop-shadow-[0_0_2px_rgba(37,244,175,0.8)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="92, 100" strokeWidth="3"></path>
                        </svg>
                        <span className="absolute text-xs font-bold text-white">92%</span>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 divide-x divide-[#283933] border-b border-[#283933] bg-[#141b18]">
                    <div className="p-4 flex flex-col gap-1">
                        <span className="text-[10px] uppercase text-[#9cbab0] font-bold tracking-wider">Efficiency</span>
                        <span className="text-xl font-bold text-white font-mono">A+</span>
                    </div>
                    <div className="p-4 flex flex-col gap-1">
                        <span className="text-[10px] uppercase text-[#9cbab0] font-bold tracking-wider">Memory</span>
                        <span className="text-xl font-bold text-white font-mono">42MB</span>
                    </div>
                </div>

                {/* Verified Badge Section */}
                <div className="p-6 bg-gradient-to-br from-[#16201d] to-[#1a2d26] flex flex-col items-center justify-center text-center relative overflow-hidden">
                    {/* Badge Visual */}
                    <div className="relative mb-4 group cursor-pointer">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all duration-500"></div>
                        <div className="size-20 rounded-xl bg-gradient-to-br from-[#283933] to-[#111816] border border-primary p-1 relative z-10 shadow-[0_0_20px_-5px_rgba(37,244,175,0.3)] flex items-center justify-center transform group-hover:scale-105 transition-transform">
                            <div className="size-full border border-primary/30 rounded-lg flex items-center justify-center bg-[#111816]">
                                <span className="material-symbols-outlined text-4xl text-primary">verified_user</span>
                            </div>
                        </div>
                        {/* Particles (decorative dots) */}
                        <div className="absolute -top-2 -right-2 size-2 bg-primary rounded-full animate-pulse"></div>
                        <div className="absolute bottom-0 -left-2 size-1.5 bg-white rounded-full opacity-50"></div>
                    </div>
                    <h4 className="text-white font-bold text-lg relative z-10">Skill Verified</h4>
                    <p className="text-xs text-[#9cbab0] mb-4 relative z-10">Badge issued on Oct 24, 2023</p>
                    <button className="w-full py-2 rounded bg-[#111816] border border-[#283933] text-xs text-primary font-medium hover:bg-primary hover:text-black transition-all relative z-10">
                        Add to Profile
                    </button>
                </div>
            </div>

            {/* Feedback Accordion */}
            <div className="bg-[#16201d] border border-[#283933] rounded-xl p-1 overflow-hidden">
                <details className="group p-2" open>
                    <summary className="flex items-center justify-between cursor-pointer list-none p-2 rounded hover:bg-white/5 transition-colors">
                        <span className="text-sm font-bold text-white">AI Feedback Summary</span>
                        <span className="material-symbols-outlined text-[#9cbab0] transform group-open:rotate-180 transition-transform">expand_more</span>
                    </summary>
                    <div className="px-2 pb-2 pt-1 text-sm text-[#9cbab0] border-t border-[#283933] mt-2">
                        <p className="mb-2"><span className="text-primary font-bold">Strengths:</span> Excellent use of virtualization libraries. Code structure is clean and modular.</p>
                        <p className=""><span className="text-yellow-500 font-bold">Tip:</span> Consider debouncing the scroll event handler for even smoother performance on older devices.</p>
                    </div>
                </details>
            </div>
        </div>
    );
};

export default AIAnalysisPanel;
