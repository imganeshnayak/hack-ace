import React from 'react';

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-surface-darker">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Success Logs</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Log Card 1 */}
                    <div className="bg-background-dark rounded-lg p-5 font-mono border border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-20">
                            <span className="material-symbols-outlined text-6xl">terminal</span>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuJcKba2SyTFWa70teS4vzdHB7yWGAm79rkynXYrnsyXCxHc1Qpln78Hz0K8ZvUgi6cY4iBU1HXwus8NpXXC7oVzcpYr2MD1WTHpr_x_8WPxb6cjDC6eDXZ25mOdtCuIMkD73XxiraHsex3IlQTJYB_rFZKjXWYdmGk1ZcKz6Zhe7b1D7r8EnZEPoE2c_BTGlVRUvL5xj34ivLTpcSc2Wm4g0DHO4BpAljSPacVQ73Jll2hQF4iy1f5-rkS3OSUakM6TvX8HsAdX8t")' }}></div>
                            <div>
                                <p className="text-primary text-xs">USER_ID: ALEX_M</p>
                                <p className="text-white text-sm font-bold">Placed @ TechCorp</p>
                            </div>
                        </div>
                        <div className="space-y-2 text-xs text-gray-400">
                            <p>&gt; Initial_Score: 45%</p>
                            <p>&gt; Optimization_Cycles: 3</p>
                            <p>&gt; Final_Offer: <span className="text-primary font-bold">$145,000 (+45% uplift)</span></p>
                            <p className="text-gray-500 italic mt-2">"The mock interviews were harder than the real thing. I felt superhuman during the onsite."</p>
                        </div>
                    </div>
                    {/* Log Card 2 */}
                    <div className="bg-background-dark rounded-lg p-5 font-mono border border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-20">
                            <span className="material-symbols-outlined text-6xl">terminal</span>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRWk5ccq6Ln3VTdbTycR2GzBbgWnqT5hj2GLbVGNwmiRoFrX3EHurzCfkVTHcEXodbtWkhQ3axorDabmrGJ1-_JRdJU3npUAtae09gmRDAfb6cGF29IvUtV7kVGPW7zy8H5gyTtx-Ki5nuYgoe4S0jR999Ey24bH9WhsHLZNihmfj0wGWC7YsNF1IVtqeqSsdVfH5lsV-NWeFUvWy0otnrmwp2tzUO01A4qSI_YKSNGyudVe_tRxec_kQBf8onhi7N0-Mp_lX1sOg5")' }}></div>
                            <div>
                                <p className="text-primary text-xs">USER_ID: DAVID_K</p>
                                <p className="text-white text-sm font-bold">Placed @ FinStream</p>
                            </div>
                        </div>
                        <div className="space-y-2 text-xs text-gray-400">
                            <p>&gt; Initial_Score: 62%</p>
                            <p>&gt; Optimization_Cycles: 2</p>
                            <p>&gt; Final_Offer: <span className="text-primary font-bold">$110,000 (Career Pivot)</span></p>
                            <p className="text-gray-500 italic mt-2">"JobTwin helped me translate my marketing skills into product management language effectively."</p>
                        </div>
                    </div>
                    {/* Log Card 3 */}
                    <div className="bg-background-dark rounded-lg p-5 font-mono border border-gray-800 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-20">
                            <span className="material-symbols-outlined text-6xl">terminal</span>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWJfzvzjmAHDZYgAvyO14LW7CZTK5elkRRomXkRBaTCop2DGyvfUcEJuD2l8i_XFjeg9xL_vOFV9amb3n0T6URSXms63oMLX1yDI16xXfDlCiSoV_JHzXflELwgYIeZW-7SngbK2k_J6sfD_jC0jbiupUyWWs-sGVZN2JqSe-pebk5yqTuwN4BENMEiMsrCDjQvzhAbmYUR3hwyRwMNxH4kXbOCqzh5cbU_piYobmqLDoZxAe13GS_WKigFlkuO164rZ6D9sO9rRkz")' }}></div>
                            <div>
                                <p className="text-primary text-xs">USER_ID: SARAH_L</p>
                                <p className="text-white text-sm font-bold">Placed @ InnovateX</p>
                            </div>
                        </div>
                        <div className="space-y-2 text-xs text-gray-400">
                            <p>&gt; Initial_Score: 58%</p>
                            <p>&gt; Optimization_Cycles: 4</p>
                            <p>&gt; Final_Offer: <span className="text-primary font-bold">Senior Designer Role</span></p>
                            <p className="text-gray-500 italic mt-2">"The resume neural network flagged keywords I was missing completely. Instant callback boost."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
