import React from 'react';

const Features: React.FC = () => {
    return (
        <section className="py-20 bg-surface-darker border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
                    <p className="text-gray-400">Unlock your career potential with our intelligent toolset designed to get you hired faster.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="group relative p-8 rounded-xl bg-background-dark border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">mic</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 relative z-10">AI Mock Interviews</h3>
                        <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                            Practice with a digital twin that adapts to your answers, analyzing tone, confidence, and keyword usage in real-time.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="group relative p-8 rounded-xl bg-background-dark border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">description</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 relative z-10">Resume Neural Network</h3>
                        <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                            Beat the ATS with data-backed keywords. Our engine restructures your CV based on successful hires in your target role.
                        </p>
                    </div>
                    {/* Feature 3 */}
                    <div className="group relative p-8 rounded-xl bg-background-dark border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">analytics</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 relative z-10">Market Pulse</h3>
                        <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                            Real-time insights on what industries are hiring. We scan millions of job posts to tell you exactly what skills to learn next.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
