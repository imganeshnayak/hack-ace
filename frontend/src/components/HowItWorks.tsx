import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <section className="py-20 bg-background-dark relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">The Optimization Process</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="relative">
                    {/* Connecting Line (Vertical) */}
                    <div className="absolute left-[20px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 md:left-1/2 md:-ml-px"></div>
                    {/* Step 1 */}
                    <div className="relative flex flex-col md:flex-row items-start mb-12 md:items-center">
                        <div className="flex-1 md:text-right md:pr-12 md:order-1 order-2 pl-12 md:pl-0">
                            <h3 className="text-xl font-bold text-white text-glow">Current State Analysis</h3>
                            <p className="text-gray-400 text-sm mt-2">Upload your resume and LinkedIn. Our AI scans for gaps, weaknesses, and formatting errors instantly.</p>
                        </div>
                        <div className="absolute left-0 md:relative md:left-auto md:order-2 flex items-center justify-center w-10 h-10 rounded-full bg-background-dark border-2 border-primary z-10 shadow-neon">
                            <span className="material-symbols-outlined text-primary text-sm">scan</span>
                        </div>
                        <div className="flex-1 md:pl-12 md:order-3 hidden md:block opacity-50">
                            {/* Placeholder or decorative element for balance */}
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div className="relative flex flex-col md:flex-row items-start mb-12 md:items-center">
                        <div className="flex-1 md:text-right md:pr-12 md:order-1 hidden md:block opacity-50"></div>
                        <div className="absolute left-0 md:relative md:left-auto md:order-2 flex items-center justify-center w-10 h-10 rounded-full bg-background-dark border-2 border-primary z-10 shadow-neon">
                            <span className="material-symbols-outlined text-primary text-sm">psychology</span>
                        </div>
                        <div className="flex-1 md:pl-12 md:order-3 order-2 pl-12 md:pl-0">
                            <h3 className="text-xl font-bold text-white text-glow">AI Optimization Loop</h3>
                            <p className="text-gray-400 text-sm mt-2">Engage in iterative mock interviews and skill assessments. The system updates your profile as you improve.</p>
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div className="relative flex flex-col md:flex-row items-start md:items-center">
                        <div className="flex-1 md:text-right md:pr-12 md:order-1 order-2 pl-12 md:pl-0">
                            <h3 className="text-xl font-bold text-white text-glow">Hired & Market Ready</h3>
                            <p className="text-gray-400 text-sm mt-2">Apply with confidence using tailored application kits. Track your success and salary negotiation leverage.</p>
                        </div>
                        <div className="absolute left-0 md:relative md:left-auto md:order-2 flex items-center justify-center w-10 h-10 rounded-full bg-background-dark border-2 border-primary z-10 shadow-neon">
                            <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                        </div>
                        <div className="flex-1 md:pl-12 md:order-3 hidden md:block opacity-50"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
