import React from 'react';

const ReadinessBreakdown: React.FC = () => {
    return (
        <div className="rounded-xl border border-[#283933] bg-[#1b2723] p-6">
            <h3 className="font-bold text-white mb-4">Readiness Breakdown</h3>
            <div className="space-y-4">
                <div className="group">
                    <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-white font-medium">UX Research</span>
                        <span className="text-white font-mono">92/100</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#283933] overflow-hidden">
                        <div className="h-full rounded-full bg-primary w-[92%] group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                </div>
                <div className="group">
                    <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-white font-medium">Prototyping (Figma)</span>
                        <span className="text-white font-mono">88/100</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#283933] overflow-hidden">
                        <div className="h-full rounded-full bg-primary w-[88%] group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                </div>
                <div className="group">
                    <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-white font-medium">Design Systems</span>
                        <span className="text-white font-mono">76/100</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#283933] overflow-hidden">
                        <div className="h-full rounded-full bg-yellow-400 w-[76%] group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadinessBreakdown;
