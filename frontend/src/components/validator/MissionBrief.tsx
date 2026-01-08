import React from 'react';

const MissionBrief: React.FC = () => {
    return (
        <div className="flex flex-col gap-6">
            {/* Task Card */}
            <div className="bg-[#16201d] border border-[#283933] rounded-xl p-5 flex flex-col gap-4 shadow-lg">
                <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-wider">
                    <span className="material-symbols-outlined text-sm">assignment</span>
                    Mission Brief
                </div>
                <div className="h-32 w-full rounded-lg bg-cover bg-center relative overflow-hidden group" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAiBqmv9EzswtNoFy5S0rCKPG2uULhE3PQY4_kJZGp0oC2XGQasY3nNU7s_M_NLeJA2ac5IgDXp6jTmh6QDPQy_vcCi5PFKw81xecgtEF2vRGvU6OvKFWL5lPXZ9Jt4c0g-IxBoC7RpkpqMO2fP6_Kbr2s0-MoFhTM-M9eJ-4Aqi3xLni41EN8IIpXcJV-DtSv3j66Q0LJFS9JmU_9gl9LXxLWGHeil2U7WkoE1mPQbL7rStM9TR6KZWTP7KorQEPYi61K8yWvEJ6A8")' }}>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white mb-2">The Scenario</h3>
                    <p className="text-sm text-[#9cbab0] leading-relaxed">
                        The current product list implementation causes significant lag on mobile devices when scrolling through 10,000+ items.
                    </p>
                </div>
                <div className="border-t border-[#283933] pt-4">
                    <h4 className="text-sm font-bold text-white mb-3">Objectives</h4>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-[#9cbab0]">
                            <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                            <span>Implement list virtualization (windowing)</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-[#9cbab0]">
                            <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                            <span>Memoize heavy calculation functions</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-[#9cbab0]">
                            <span className="material-symbols-outlined text-[#9cbab0] text-base mt-0.5">radio_button_unchecked</span>
                            <span>Achieve &lt;16ms render time per frame</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Resources Widget */}
            <div className="bg-[#16201d] border border-[#283933] rounded-xl p-5">
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-[#9cbab0]">folder_open</span>
                    Resources
                </h4>
                <div className="space-y-2">
                    <a className="flex items-center justify-between p-3 rounded-lg bg-[#10221c] border border-[#283933] hover:border-primary/50 transition-colors group" href="#">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#9cbab0] group-hover:text-primary">javascript</span>
                            <span className="text-sm text-white">Starter_Code.js</span>
                        </div>
                        <span className="material-symbols-outlined text-[#9cbab0] text-sm">download</span>
                    </a>
                    <a className="flex items-center justify-between p-3 rounded-lg bg-[#10221c] border border-[#283933] hover:border-primary/50 transition-colors group" href="#">
                        <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-[#9cbab0] group-hover:text-primary">dataset</span>
                            <span className="text-sm text-white">mock_data.json</span>
                        </div>
                        <span className="material-symbols-outlined text-[#9cbab0] text-sm">download</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MissionBrief;
