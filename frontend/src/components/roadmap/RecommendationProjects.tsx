import React from 'react';

const RecommendationProjects: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <div className="group bg-[#1b2723] border border-[#283933] rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(37,244,175,0.05)] flex flex-col h-full">
                <div className="h-40 w-full bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCf3JK4n_5sqlpLmDpf-YiRsmlyRKt9PNE0csT8Hq9SQvGg0Nex1YT6PiY7mrvuc2J-bRftbTzf0Ta59WEjbzzg2T7FRIk3dv6mXdE-afMnDb04E2UV4Rp8yXItVnIz-ifsyN6MWo6EqO0f4JkFPtJDKRRlHzpg0-H4OW-1HUQ90j8aqZ9tMCKJ308OrThAy8R82BeVqu8g16q-wC37nUqfkVLGKpVlqu3a8EvsqddHGicxIUR9qoRivKAM4NdQ3OrJAFO_wpulUBeQ")' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b2723] to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white border border-white/10">
                        Intermediate
                    </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                    <div className="flex gap-2 mb-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#15201d] text-gray-400 border border-[#283933]">FIGMA</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#15201d] text-gray-400 border border-[#283933]">PROTOTYPING</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">E-Commerce Checkout Flow</h3>
                    <p className="text-sm text-gray-400 mb-6 flex-1">Redesign a friction-heavy checkout process focusing on mobile usability and accessibility compliance.</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#283933]">
                        <div className="flex -space-x-2">
                            <div className="size-6 rounded-full bg-blue-500 border border-[#1b2723]"></div>
                            <div className="size-6 rounded-full bg-purple-500 border border-[#1b2723]"></div>
                            <div className="size-6 rounded-full bg-[#283933] border border-[#1b2723] flex items-center justify-center text-[8px] text-white">+24</div>
                        </div>
                        <button className="text-sm font-bold text-white hover:text-primary flex items-center gap-1 transition-colors">
                            Start Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Project Card 2 */}
            <div className="group bg-[#1b2723] border border-[#283933] rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(37,244,175,0.05)] flex flex-col h-full">
                <div className="h-40 w-full bg-cover bg-center relative" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNur1Aj2wBoFt6F7ejojW6t7ukAqRwEs_r6BwejLKDnHCyPrrk5gDtr2Tzw23Cbw91j0WpqEsyMO3qC5CvdSEkBYsU7aEvfFSTOg1-tNBeDtkRud4uTRJilWhOWfHiZt6dsQ_skIFMSQWwj3pKjJOfcWYCG3ELWV7AJVVnh1ly50M1slN6C9dCIKBAHbKFQdLpe31ViRUuddZvqavEk4a3vpk_LR_SceMYhCXJMuBojX3T3kxc2xj4qVj-Kpo5XuvH8fSfaKupiqXB")' }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b2723] to-transparent"></div>
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white border border-white/10">
                        Advanced
                    </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                    <div className="flex gap-2 mb-3">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#15201d] text-gray-400 border border-[#283933]">REACT</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#15201d] text-gray-400 border border-[#283933]">STORYBOOK</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Design System Component Library</h3>
                    <p className="text-sm text-gray-400 mb-6 flex-1">Build and document a scalable button and input component set using React and Storybook.</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#283933]">
                        <div className="flex -space-x-2">
                            <div className="size-6 rounded-full bg-green-500 border border-[#1b2723]"></div>
                            <div className="size-6 rounded-full bg-yellow-500 border border-[#1b2723]"></div>
                            <div className="size-6 rounded-full bg-[#283933] border border-[#1b2723] flex items-center justify-center text-[8px] text-white">+12</div>
                        </div>
                        <button className="text-sm font-bold text-white hover:text-primary flex items-center gap-1 transition-colors">
                            Start Project <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecommendationProjects;
