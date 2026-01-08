import React from 'react';

const RealStories: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">Real Stories</h3>
                <a className="text-xs text-primary hover:underline" href="#">View All</a>
            </div>
            {/* Story Card 1 */}
            <div className="group relative rounded-xl border border-[#1e362e] bg-[#162b24] overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary/50 group-hover:bg-primary transition-colors"></div>
                <div className="p-5">
                    <div className="mb-3 flex items-start gap-3">
                        <div className="size-10 rounded-full bg-cover bg-center border border-gray-600" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzOPvbB4QgAmczagobq_7F1wzy9b1fAhsrAAUwk8lE-eT_GtZUfVXl0wgyVlDbQPMHVcOD-J1tMf5IWxVT255jGlzx9ohoFwQfguhsAr_Llndceh_YendSzYQ2O9dxWnNnmXmwW0CdXxXTSHXxXqiUxDsgl3Jukt_XB3ael0qZZkOe2eoxFLx2AWxUO1DfExai_jv22SN2ZiEJM_1jtwr_UsR_auuPAAU564xidMZfD2ytBXUzWoaaGIIbhZwQC3eil0v3Y8e99_DR")' }}></div>
                        <div>
                            <p className="font-bold text-white text-sm">Sarah J.</p>
                            <p className="text-xs text-gray-400">Barista → Data Scientist</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-300 italic mb-3">"I took the python bootcamp recommended here. Took 18 months, but I tripled my salary."</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="material-symbols-outlined text-[16px]">verified</span> Verified Path
                    </div>
                </div>
            </div>
            {/* Story Card 2 */}
            <div className="group relative rounded-xl border border-[#1e362e] bg-[#162b24] overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-500 transition-colors"></div>
                <div className="p-5">
                    <div className="mb-3 flex items-start gap-3">
                        <div className="size-10 rounded-full bg-cover bg-center border border-gray-600" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3UhbP5ZfmZNYQU8An2vOILylkym5t7JFVnMfS_7UcB5ipUgNToDnlAL4rm2qTY_RBu_CR-BoOzJ8Kc0cmUHhqBG3ATTA95WFFiDYsc01mhzcdQFKvVUs9ejPWyvV2lOl4JzH_WsWMwxlJT6pwCP2LvEeLLgMuV_8S-KKebw5nBapoDRQWoRAGDR8H73g6B43QaZl-ZHcJWEqNhw3l2mHP90l6z49k9teZdcRC54pOYAczHlUlaLjV23bsqnJVvVhc_6cUFFK4Gaxx")' }}></div>
                        <div>
                            <p className="font-bold text-white text-sm">Michael C.</p>
                            <p className="text-xs text-gray-400">Analyst → Senior DS</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-300 italic mb-3">"The hardest part was the math. Don't skip the foundations module, it's crucial for interviews."</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="material-symbols-outlined text-[16px]">verified</span> Verified Path
                    </div>
                </div>
            </div>
            {/* Promo Card */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-[#162b24] p-6 border border-primary/20 text-center">
                <div className="absolute -right-10 -top-10 size-32 rounded-full bg-primary/20 blur-2xl"></div>
                <span className="material-symbols-outlined text-4xl text-primary mb-3">school</span>
                <h3 className="text-lg font-bold text-white mb-2">Need a Mentor?</h3>
                <p className="text-sm text-gray-300 mb-4">Connect with senior data scientists who can guide your specific journey.</p>
                <button className="w-full rounded-lg bg-[#1e362e] border border-white/10 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">Find a Mentor</button>
            </div>
        </div>
    );
};

export default RealStories;
