import React from 'react';

const SWOTAnalysis: React.FC = () => {
    return (
        <div className="bg-surface-dark border border-[#283933] rounded-xl p-6 flex flex-col h-full">
            <h3 className="text-white font-bold text-lg mb-6">Twin SWOT Analysis</h3>

            <div className="grid grid-cols-2 gap-4 flex-1">
                {/* Strengths */}
                <div className="p-4 rounded-lg bg-[#111816] border-l-2 border-primary relative">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                        <span className="text-white font-bold text-sm">Strengths</span>
                    </div>
                    <ul className="text-gray-400 text-xs space-y-2 list-disc list-inside">
                        <li>Strong React Ecosystem grasp</li>
                        <li>Clean UI/UX implementation</li>
                        <li>Type-safe methodology</li>
                    </ul>
                </div>

                {/* Weaknesses */}
                <div className="p-4 rounded-lg bg-[#111816] border-l-2 border-yellow-500 relative">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-yellow-500 text-sm">warning</span>
                        <span className="text-white font-bold text-sm">Weaknesses</span>
                    </div>
                    <ul className="text-gray-400 text-xs space-y-2 list-disc list-inside">
                        <li>Lack of Backend System Design</li>
                        <li>No Cloud/AWS experience</li>
                        <li>Unit testing coverage low</li>
                    </ul>
                </div>

                {/* Opportunities */}
                <div className="p-4 rounded-lg bg-[#111816] border-l-2 border-blue-500 relative">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-blue-500 text-sm">trending_up</span>
                        <span className="text-white font-bold text-sm">Opportunities</span>
                    </div>
                    <ul className="text-gray-400 text-xs space-y-2 list-disc list-inside">
                        <li>High demand for Full Stack</li>
                        <li>FinTech role transition</li>
                        <li>Remote US startups</li>
                    </ul>
                </div>

                {/* Threats */}
                <div className="p-4 rounded-lg bg-[#111816] border-l-2 border-red-500 relative">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-red-500 text-sm">security</span>
                        <span className="text-white font-bold text-sm">Threats</span>
                    </div>
                    <ul className="text-gray-400 text-xs space-y-2 list-disc list-inside">
                        <li>Oversaturated Entry Level</li>
                        <li>AI Code Gen adoption</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SWOTAnalysis;
