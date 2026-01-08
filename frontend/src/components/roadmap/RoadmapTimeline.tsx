import React from 'react';

const RoadmapTimeline: React.FC = () => {
    return (
        <div className="bg-[#1b2723] border border-[#283933] rounded-xl p-6 sm:p-8">
            <div className="flex flex-col">
                {/* Step 1: Completed */}
                <div className="relative pl-8 sm:pl-12 pb-8 border-l-2 border-[#3b544c] last:border-0 last:pb-0 group">
                    <div className="absolute -left-[9px] top-0 size-[18px] rounded-full bg-[#111816] border-2 border-primary text-primary flex items-center justify-center">
                        <div className="size-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 -mt-1.5 opacity-60">
                        <div>
                            <h4 className="text-lg font-bold text-white line-through decoration-primary/50">UX Research Fundamentals</h4>
                            <p className="text-sm text-gray-400">Module 1 • 12 Lessons</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 rounded bg-[#15201d] border border-[#283933] w-fit">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                            <span className="text-xs font-bold text-white">Completed</span>
                        </div>
                    </div>
                </div>

                {/* Step 2: Active (Expanded) */}
                <div className="relative pl-8 sm:pl-12 pb-10 border-l-2 border-primary/30 last:border-0 last:pb-0">
                    {/* Animated Node */}
                    <div className="absolute -left-[11px] top-0 size-[22px] rounded-full bg-primary shadow-[0_0_15px_rgba(37,244,175,0.3)] flex items-center justify-center z-10">
                        <span className="material-symbols-outlined text-[#10221c] text-[14px] font-bold">play_arrow</span>
                    </div>
                    <div className="flex flex-col gap-4 bg-[#20332c] border border-primary/30 rounded-lg p-5 -mt-2 shadow-lg">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h4 className="text-xl font-bold text-white">Figma Auto-Layout Mastery</h4>
                                    <span className="px-2 py-0.5 bg-primary text-[#10221c] text-[10px] font-bold uppercase tracking-wide rounded">Current Focus</span>
                                </div>
                                <p className="text-sm text-gray-400 max-w-lg">Mastering constraints, resizing behavior, and building responsive components for design systems.</p>
                            </div>
                            <div className="text-right shrink-0">
                                <div className="text-2xl font-bold text-white">85%</div>
                                <div className="text-xs text-gray-400">Completion</div>
                            </div>
                        </div>
                        {/* Sub-tasks / Progress */}
                        <div className="w-full h-1.5 bg-[#10221c] rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[85%] shadow-[0_0_15px_rgba(37,244,175,0.3)]"></div>
                        </div>
                        <div className="flex gap-3 mt-1">
                            <button className="flex-1 bg-primary text-[#10221c] font-bold text-sm py-2 rounded hover:bg-primary-dark transition-colors">
                                Continue Lesson
                            </button>
                            <button className="px-4 py-2 border border-[#3b544c] hover:border-primary text-white rounded transition-colors flex items-center justify-center">
                                <span className="material-symbols-outlined">description</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Step 3: Locked */}
                <div className="relative pl-8 sm:pl-12 pb-8 border-l-2 border-[#283933] last:border-0 last:pb-0">
                    <div className="absolute -left-[9px] top-0 size-[18px] rounded-full bg-[#15201d] border-2 border-[#3b544c] flex items-center justify-center">
                        <span className="material-symbols-outlined text-gray-500 text-[10px]">lock</span>
                    </div>
                    <div className="flex items-center justify-between -mt-1.5">
                        <div>
                            <h4 className="text-lg font-medium text-gray-500">Design Systems Architecture</h4>
                            <p className="text-sm text-[#3b544c]">Locked • Complete previous module</p>
                        </div>
                    </div>
                </div>

                {/* Step 4: Locked */}
                <div className="relative pl-8 sm:pl-12 pb-0 border-l-2 border-[#283933] last:border-0 last:pb-0">
                    <div className="absolute -left-[9px] top-0 size-[18px] rounded-full bg-[#15201d] border-2 border-[#3b544c] flex items-center justify-center">
                        <span className="material-symbols-outlined text-gray-500 text-[10px]">lock</span>
                    </div>
                    <div className="flex items-center justify-between -mt-1.5">
                        <div>
                            <h4 className="text-lg font-medium text-gray-500">React for Designers</h4>
                            <p className="text-sm text-[#3b544c]">Locked • Future Module</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RoadmapTimeline;
