import React from 'react';

const Market: React.FC = () => {
    return (
        <>
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">Live Data</span>
                        <span className="text-gray-400 text-sm">Updated 2 mins ago</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Market Pulse</h2>
                    <p className="text-gray-400 mt-1">Global insights & AI-curated opportunities tailored to your profile.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#283933] bg-surface-dark text-white text-sm font-medium hover:bg-[#283933] transition-colors">
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        Export Report
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-background-dark text-sm font-bold hover:bg-primary-dark transition-colors shadow-[0_0_15px_rgba(37,244,175,0.3)]">
                        <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                        Analyze Gaps
                    </button>
                </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Stats Cards (Top Row) */}
                <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-surface-dark border border-[#283933] rounded-xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-white">shield</span>
                        </div>
                        <div className="flex flex-col gap-1 z-10 relative">
                            <p className="text-gray-400 text-sm font-medium">Career Stability Score</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-3xl font-bold text-white">88/100</h3>
                                <span className="text-primary text-sm font-medium flex items-center">
                                    <span className="material-symbols-outlined text-[16px]">trending_up</span>
                                    +2%
                                </span>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">High demand expected for next 5 years based on current stack.</p>
                        </div>
                        <div className="w-full bg-[#283933] h-1 mt-4 rounded-full overflow-hidden">
                            <div className="bg-primary h-full w-[88%] rounded-full shadow-[0_0_10px_#25f4af]"></div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-surface-dark border border-[#283933] rounded-xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-white">payments</span>
                        </div>
                        <div className="flex flex-col gap-1 z-10 relative">
                            <p className="text-gray-400 text-sm font-medium">Projected Salary Growth</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-3xl font-bold text-white">+$15k</h3>
                                <span className="text-gray-400 text-sm font-medium">YoY</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">Market average for Senior roles is trending upward.</p>
                        </div>
                        {/* Micro Chart */}
                        <div className="flex items-end gap-1 h-6 mt-4 opacity-60">
                            <div className="w-1/6 bg-[#283933] h-[40%] rounded-t-sm"></div>
                            <div className="w-1/6 bg-[#283933] h-[50%] rounded-t-sm"></div>
                            <div className="w-1/6 bg-[#283933] h-[45%] rounded-t-sm"></div>
                            <div className="w-1/6 bg-[#283933] h-[70%] rounded-t-sm"></div>
                            <div className="w-1/6 bg-[#283933] h-[85%] rounded-t-sm"></div>
                            <div className="w-1/6 bg-primary h-[100%] rounded-t-sm"></div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-surface-dark border border-[#283933] rounded-xl p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-6xl text-white">psychology</span>
                        </div>
                        <div className="flex flex-col gap-1 z-10 relative">
                            <p className="text-gray-400 text-sm font-medium">Skill Relevance</p>
                            <div className="flex items-baseline gap-2">
                                <h3 className="text-3xl font-bold text-white">92%</h3>
                                <span className="text-primary text-sm font-medium">Elite</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">Your React & Node.js proficiency is in top tier demand.</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <span className="text-[10px] px-2 py-1 bg-[#283933] rounded text-white border border-[#3b544c]">React +12%</span>
                            <span className="text-[10px] px-2 py-1 bg-[#283933] rounded text-white border border-[#3b544c]">Node +8%</span>
                        </div>
                    </div>
                </div>

                {/* Main Chart Area (Middle Left) */}
                <div className="lg:col-span-8 bg-surface-dark border border-[#283933] rounded-xl p-6 flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-white text-lg font-bold">Demand Velocity vs. Talent Supply</h3>
                            <p className="text-gray-400 text-sm">Software Engineering • Last 6 Months</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1 text-xs text-primary">
                                <span className="size-2 rounded-full bg-primary"></span> Demand
                            </span>
                            <span className="flex items-center gap-1 text-xs text-gray-400">
                                <span className="size-2 rounded-full bg-gray-400"></span> Supply
                            </span>
                        </div>
                    </div>
                    <div className="relative w-full h-64 md:h-80">
                        {/* SVG Chart */}
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 800 300">
                            <defs>
                                <linearGradient id="gradientDemand" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#25f4af" stopOpacity="0.2"></stop>
                                    <stop offset="100%" stopColor="#25f4af" stopOpacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="gradientSupply" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#9cbab0" stopOpacity="0.1"></stop>
                                    <stop offset="100%" stopColor="#9cbab0" stopOpacity="0"></stop>
                                </linearGradient>
                            </defs>
                            {/* Grid Lines */}
                            <line stroke="#283933" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="0" y2="0"></line>
                            <line stroke="#283933" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="75" y2="75"></line>
                            <line stroke="#283933" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
                            <line stroke="#283933" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="800" y1="225" y2="225"></line>
                            {/* Supply Area */}
                            <path d="M0,200 C100,200 150,220 200,210 C300,190 350,180 400,185 C500,195 550,210 600,200 C700,190 750,170 800,180 L800,300 L0,300 Z" fill="url(#gradientSupply)"></path>
                            <path d="M0,200 C100,200 150,220 200,210 C300,190 350,180 400,185 C500,195 550,210 600,200 C700,190 750,170 800,180" fill="none" stroke="#52665e" strokeWidth="2"></path>
                            {/* Demand Area */}
                            <path d="M0,150 C100,140 150,100 200,110 C300,130 350,100 400,80 C500,60 550,40 600,50 C700,70 750,30 800,20 L800,300 L0,300 Z" fill="url(#gradientDemand)"></path>
                            <path d="M0,150 C100,140 150,100 200,110 C300,130 350,100 400,80 C500,60 550,40 600,50 C700,70 750,30 800,20" fill="none" filter="drop-shadow(0 0 4px rgba(37,244,175,0.5))" stroke="#25f4af" strokeWidth="3"></path>
                            {/* Tooltip Indicator */}
                            <circle cx="600" cy="50" fill="#101413" r="6" stroke="#25f4af" strokeWidth="2"></circle>
                            <line opacity="0.5" stroke="#25f4af" strokeDasharray="2 2" strokeWidth="1" x1="600" x2="600" y1="50" y2="300"></line>
                        </svg>
                        {/* Floating Tooltip */}
                        <div className="absolute top-[10%] left-[70%] bg-[#1a2220]/90 backdrop-blur border border-primary/30 p-3 rounded-lg shadow-lg transform -translate-x-1/2">
                            <p className="text-white text-xs font-bold">Peak Demand</p>
                            <p className="text-primary text-lg font-bold leading-none">+12%</p>
                            <p className="text-gray-400 text-[10px]">vs. previous month</p>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-gray-400 font-medium uppercase tracking-wider">
                        <span>Jan</span>
                        <span>Feb</span>
                        <span>Mar</span>
                        <span>Apr</span>
                        <span>May</span>
                        <span>Jun</span>
                    </div>
                </div>

                {/* Sidebar / Skills (Middle Right) */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    {/* Twin's Insight */}
                    <div className="bg-gradient-to-br from-surface-dark to-[#152e25] border border-primary/20 rounded-xl p-5 relative">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="material-symbols-outlined text-primary">auto_awesome</span>
                            <h3 className="text-white text-base font-bold">Twin's Insight</h3>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-1 bg-primary rounded-full opacity-50"></div>
                            <p className="text-sm text-gray-200 leading-relaxed">
                                Based on today's data, your portfolio needs more <span className="text-primary font-medium">backend projects</span>. Adding a GraphQL case study could increase your match potential by <span className="text-white font-bold">~15%</span>.
                            </p>
                        </div>
                        <button className="mt-4 w-full py-2 bg-[#283933]/50 hover:bg-[#283933] border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded transition-colors">
                            View Recommended Projects
                        </button>
                    </div>
                    {/* Trending Skills */}
                    <div className="bg-surface-dark border border-[#283933] rounded-xl p-5 flex-1">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-white text-base font-bold">Trending Skills</h3>
                            <span className="text-xs text-gray-400">Global Top 5</span>
                        </div>
                        <div className="flex flex-col gap-3">
                            {[
                                { name: "Generative AI", progress: 94, growth: "+24%" },
                                { name: "Rust", progress: 78, growth: "+18%" },
                                { name: "Cloud Security", progress: 65, growth: "+12%" },
                                { name: "TypeScript", progress: 55, growth: "+5%", neutral: true },
                            ].map((skill, i) => (
                                <div key={i} className="group flex items-center justify-between p-2 rounded hover:bg-[#283933] transition-colors cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className="text-white font-medium">{skill.name}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-16 bg-[#111816] h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-primary h-full" style={{ width: `${skill.progress}%` }}></div>
                                        </div>
                                        <span className={`text-xs font-bold ${skill.neutral ? 'text-gray-400' : 'text-primary'}`}>{skill.growth}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Opportunity Match Section (Bottom Full Width) */}
                <div className="lg:col-span-12 flex flex-col gap-4 mt-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white">Top Opportunities</h3>
                        <div className="flex gap-2">
                            <span className="text-sm text-gray-400">Sorted by:</span>
                            <select className="bg-transparent text-primary text-sm font-bold border-none p-0 focus:ring-0 cursor-pointer">
                                <option>Match Score</option>
                                <option>Salary</option>
                                <option>Date Posted</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Job Card 1 */}
                        <div className="bg-surface-dark border border-primary/30 rounded-xl p-5 hover:border-primary hover:shadow-[0_0_20px_rgba(37,244,175,0.1)] transition-all group relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-white flex items-center justify-center p-1" data-alt="TechCorp Logo">
                                        <span className="material-symbols-outlined text-black">business</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg leading-tight">Sr. Frontend Dev</h4>
                                        <p className="text-gray-400 text-xs">TechCorp • Remote</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-primary text-xl font-bold">98%</div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Match</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Salary Range</p>
                                    <p className="text-white font-medium text-sm">$140k - $180k</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Selection Probability</p>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 bg-[#283933] h-2 rounded-full overflow-hidden">
                                            <div className="bg-primary h-full w-[88%] shadow-[0_0_8px_#25f4af]"></div>
                                        </div>
                                        <span className="text-white font-bold text-xs">High</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 rounded bg-[#283933] text-gray-400 text-xs">React</span>
                                <span className="px-2 py-1 rounded bg-[#283933] text-gray-400 text-xs">TypeScript</span>
                                <span className="px-2 py-1 rounded bg-[#283933]/50 text-gray-400/50 text-xs line-through decoration-red-400">GraphQL</span>
                            </div>
                            <button className="w-full py-2.5 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-black font-bold text-sm transition-all flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
                                Apply with Twin
                            </button>
                        </div>
                        {/* Job Card 2 */}
                        <div className="bg-surface-dark border border-[#283933] rounded-xl p-5 hover:border-primary/50 transition-all group relative">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-indigo-600 flex items-center justify-center p-1 text-white" data-alt="InnovateInc Logo">
                                        <span className="material-symbols-outlined">rocket_launch</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg leading-tight">Full Stack Eng.</h4>
                                        <p className="text-gray-400 text-xs">InnovateInc • Hybrid</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-primary/90 text-xl font-bold">92%</div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Match</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Salary Range</p>
                                    <p className="text-white font-medium text-sm">$130k - $165k</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Selection Probability</p>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 bg-[#283933] h-2 rounded-full overflow-hidden">
                                            <div className="bg-primary/70 h-full w-[75%]"></div>
                                        </div>
                                        <span className="text-white font-bold text-xs">Med</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 rounded bg-[#283933] text-gray-400 text-xs">Node.js</span>
                                <span className="px-2 py-1 rounded bg-[#283933] text-gray-400 text-xs">AWS</span>
                                <span className="px-2 py-1 rounded bg-[#283933] text-gray-400 text-xs">Python</span>
                            </div>
                            <button className="w-full py-2.5 rounded-lg bg-[#283933] hover:bg-[#3b544c] text-white font-bold text-sm transition-all flex items-center justify-center gap-2">
                                View Details
                            </button>
                        </div>
                        {/* Job Card 3 */}
                        <div className="bg-surface-dark border border-[#283933] rounded-xl p-5 hover:border-primary/50 transition-all group relative">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="size-10 rounded-lg bg-orange-500 flex items-center justify-center p-1 text-white" data-alt="DataFlow Logo">
                                        <span className="material-symbols-outlined">dataset</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg leading-tight">Data Engineer</h4>
                                        <p className="text-gray-400 text-xs">DataFlow • Remote</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-gray-400 text-xl font-bold">84%</div>
                                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">Match</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Salary Range</p>
                                    <p className="text-white font-medium text-sm">$150k - $200k</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Selection Probability</p>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 bg-[#283933] h-2 rounded-full overflow-hidden">
                                            <div className="bg-yellow-500 h-full w-[60%]"></div>
                                        </div>
                                        <span className="text-white font-bold text-xs">Fair</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-2 py-1 rounded bg-[#283933] text-gray-400 text-xs">Spark</span>
                                <span className="px-2 py-1 rounded bg-[#283933] text-gray-400 text-xs">Kafka</span>
                                <span className="px-2 py-1 rounded bg-[#283933]/50 text-gray-400/50 text-xs line-through decoration-red-400">Scala</span>
                            </div>
                            <button className="w-full py-2.5 rounded-lg bg-[#283933] hover:bg-[#3b544c] text-white font-bold text-sm transition-all flex items-center justify-center gap-2">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Market;
