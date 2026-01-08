import React from 'react';

const PeerComparisonChart: React.FC = () => {
    return (
        <div className="bg-[#1b2723] rounded-xl p-6 border border-[#283933]">
            <h3 className="text-white font-bold text-lg mb-4">Peer Comparison</h3>
            <div className="space-y-4">
                <div className="flex justify-between items-end text-xs text-gray-400 mb-1">
                    <span>Years Experience</span>
                    <span>Top 10%</span>
                </div>

                {/* Bar Item 1 */}
                <div className="relative pt-1">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-white">Visual Design</span>
                        <span className="text-xs font-semibold text-primary">92/100</span>
                    </div>
                    <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-[#283933]">
                        <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary" style={{ width: "92%" }}></div>
                    </div>
                    {/* Marker for avg */}
                    <div className="absolute top-0 bottom-0 left-[75%] w-0.5 bg-gray-500/50 border-r border-dashed border-gray-500"></div>
                </div>

                {/* Bar Item 2 */}
                <div className="relative pt-1">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-white">Interaction</span>
                        <span className="text-xs font-semibold text-yellow-500">64/100</span>
                    </div>
                    <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-[#283933]">
                        <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500" style={{ width: "64%" }}></div>
                    </div>
                    {/* Marker for avg */}
                    <div className="absolute top-0 bottom-0 left-[80%] w-0.5 bg-gray-500/50 border-r border-dashed border-gray-500"></div>
                </div>

                {/* Bar Item 3 */}
                <div className="relative pt-1">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-white">Technical (Code)</span>
                        <span className="text-xs font-semibold text-red-500">25/100</span>
                    </div>
                    <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-[#283933]">
                        <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500" style={{ width: "25%" }}></div>
                    </div>
                    {/* Marker for avg */}
                    <div className="absolute top-0 bottom-0 left-[45%] w-0.5 bg-gray-500/50 border-r border-dashed border-gray-500"></div>
                </div>

                <div className="flex items-center gap-2 mt-2">
                    <div className="w-3 h-0.5 bg-gray-500 border-t border-dashed"></div>
                    <span className="text-[10px] text-gray-500">Industry Avg for Senior Role</span>
                </div>
            </div>
        </div>
    );
};

export default PeerComparisonChart;
