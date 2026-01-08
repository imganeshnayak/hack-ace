import React from 'react';

const LearningPathPreview: React.FC = () => {
    return (
        <div className="bg-[#1b2723] rounded-xl p-6 border border-[#283933]">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-white font-bold text-lg">Recommended Path</h3>
                <button className="text-primary text-xs font-bold hover:underline">View All</button>
            </div>

            <div className="space-y-4">
                {/* Course 1 */}
                <div className="flex gap-3 items-center group cursor-pointer">
                    <div className="size-12 rounded-lg bg-[#283933] flex items-center justify-center shrink-0 border border-gray-600 group-hover:border-primary transition-colors">
                        <span className="material-symbols-outlined text-white">design_services</span>
                    </div>
                    <div>
                        <h5 className="text-white text-sm font-semibold group-hover:text-primary transition-colors line-clamp-1">Advanced Figma Prototyping</h5>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-1">
                            <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[10px]">schedule</span> 4h 30m</span>
                            <span>•</span>
                            <span className="text-yellow-500">Intermediate</span>
                        </div>
                    </div>
                </div>

                {/* Course 2 */}
                <div className="flex gap-3 items-center group cursor-pointer">
                    <div className="size-12 rounded-lg bg-[#283933] flex items-center justify-center shrink-0 border border-gray-600 group-hover:border-primary transition-colors">
                        <span className="material-symbols-outlined text-white">code</span>
                    </div>
                    <div>
                        <h5 className="text-white text-sm font-semibold group-hover:text-primary transition-colors line-clamp-1">React for Designers 101</h5>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400 mt-1">
                            <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[10px]">schedule</span> 6h 15m</span>
                            <span>•</span>
                            <span className="text-red-500">Beginner</span>
                        </div>
                    </div>
                </div>
            </div>

            <button className="w-full mt-5 py-2 rounded-lg bg-[#283933] hover:bg-[#3f4a46] text-white text-xs font-bold border border-[#283933] transition-colors">
                Add Skills to Roadmap
            </button>
        </div>
    );
};

export default LearningPathPreview;
