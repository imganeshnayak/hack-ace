import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    {/* Hero Content */}
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-primary/20 w-fit mx-auto lg:mx-0">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-xs font-medium text-primary tracking-wide uppercase">AI-Powered Career Architect</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                            Clone Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 text-glow">Potential.</span> <br />
                            Master Your Career.
                        </h1>
                        <p className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            JobTwin uses advanced neural networks to simulate interviews, optimize your resume against ATS bots, and bridge your skill gaps in real-time.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
                            <Link to="/register" className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-background-dark text-base font-bold h-12 px-8 rounded-lg transition-all shadow-neon hover:shadow-lg">
                                <span className="material-symbols-outlined text-[20px]">add_circle</span>
                                Create Your Twin
                            </Link>
                            <button className="flex items-center justify-center gap-2 bg-surface-dark hover:bg-surface-darker text-white border border-gray-700 hover:border-primary/50 text-base font-bold h-12 px-8 rounded-lg transition-all">
                                <span className="material-symbols-outlined text-[20px]">play_circle</span>
                                View Demo
                            </button>
                        </div>
                        <div className="pt-8 border-t border-white/5 mt-4 flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
                            <span>Trusted by candidates hired at:</span>
                            <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                                <span className="font-bold text-white text-lg">GOOGLE</span>
                                <span className="font-bold text-white text-lg">AMAZON</span>
                                <span className="font-bold text-white text-lg">META</span>
                                <span className="font-bold text-white text-lg">NETFLIX</span>
                            </div>
                        </div>
                    </div>
                    {/* Hero Visual */}
                    <div className="relative lg:h-[600px] flex items-center justify-center">
                        <div className="relative w-full aspect-square max-w-[500px] glass-card rounded-2xl p-6 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl shadow-primary/5">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
                            {/* Decorative UI Header inside card */}
                            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="text-xs font-mono text-primary/70">SYSTEM_STATUS: ONLINE</div>
                            </div>
                            {/* Image */}
                            <div className="w-full h-64 rounded-lg bg-cover bg-center mb-6 relative overflow-hidden group"
                                style={{
                                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4X7gxhamQ0NoUao7noyq36D2xM-Q7DF94733miAjKt7ciWOk__HaFghOBPI0WAain36BuEfJF7Nl6_6iBFrPKGdE95iFFGTfODv1RtM394gW1cNAsPuQ1ztgcoydANJHzQpJ-CMaFj78Oe9zro34oDlrppO3bE5DgGFVgTcTw470d9BH7N-ePKJYDLzq1vaJbjrdyWLLSHoy-H33Fx7NWDr_2XsEkAi2gIeF6jRoY3p2iJHL399_oDhLm5O_0Pl6yNIL0UH6hHFd1")'
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <div className="bg-background-dark/80 backdrop-blur px-3 py-1 rounded text-xs font-mono text-primary border border-primary/30">
                                        Scanning Resume... 98%
                                    </div>
                                </div>
                            </div>
                            {/* Stats grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-surface-darker p-4 rounded-lg border border-white/5">
                                    <div className="text-gray-400 text-xs mb-1">Interview Readiness</div>
                                    <div className="text-2xl font-bold text-white">87% <span className="text-primary text-sm">▲</span></div>
                                    <div className="w-full bg-gray-700 h-1 mt-2 rounded-full overflow-hidden">
                                        <div className="bg-primary w-[87%] h-full"></div>
                                    </div>
                                </div>
                                <div className="bg-surface-darker p-4 rounded-lg border border-white/5">
                                    <div className="text-gray-400 text-xs mb-1">Market Match</div>
                                    <div className="text-2xl font-bold text-white">Top 5%</div>
                                    <div className="flex gap-1 mt-2">
                                        <span className="w-1 h-3 bg-primary rounded-full opacity-40"></span>
                                        <span className="w-1 h-4 bg-primary rounded-full opacity-60"></span>
                                        <span className="w-1 h-6 bg-primary rounded-full"></span>
                                        <span className="w-1 h-4 bg-primary rounded-full opacity-60"></span>
                                        <span className="w-1 h-3 bg-primary rounded-full opacity-40"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
