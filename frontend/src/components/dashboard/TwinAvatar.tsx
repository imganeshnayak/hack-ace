import React from 'react';

const TwinAvatar: React.FC = () => {
    return (
        <div className="relative overflow-hidden rounded-xl border border-[#283933] bg-[#1b2723] p-6 shadow-lg">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(37,244,175,0.15),transparent_70%)]"></div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-6">
                    {/* Animated Rings */}
                    <div className="absolute inset-0 -m-4 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-0 -m-8 rounded-full border border-dashed border-primary/10 animate-[spin_15s_linear_infinite_reverse]"></div>
                    {/* Avatar Image */}
                    <div className="h-32 w-32 rounded-full border-2 border-primary bg-slate-800 bg-cover bg-center shadow-[0_0_30px_rgba(37,244,175,0.3)]" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbBPwM3QTPZt77iCHlaGR9Ba5PxkbX9xXIPInpsUhgdylD4rf72CFRzfIhAJrz8Yjukk6X7Vz_no_n8sfJ0Wy75EskRMY2tt-vYlcvPLfUUbOgo_PMcYaMVB81o7NQfUKyHJH8sb4HLSaO_M3XFh-VpxoJXBYRceZENRxU7Rcik4FvoxftTL9GhrduFMZlnxltzPTRpQoVQg7lrZWV_dbtKJQhOAZE-XEFNz7-ree1RxnWOR0vq9diK_K5o7cFQEFQeKqMBU_Ed_4a")' }}></div>
                    <div className="absolute bottom-0 right-0 rounded-full bg-[#1b2723] p-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-[#111816]">
                            <span className="material-symbols-outlined text-sm font-bold">bolt</span>
                        </div>
                    </div>
                </div>
                <h3 className="text-xl font-bold text-white">Alex's Twin v2.4</h3>
                <p className="text-center text-sm text-gray-400 mt-1">Optimized for Senior Product Designer roles in Fintech.</p>
                <div className="mt-6 grid w-full grid-cols-2 gap-3">
                    <div className="rounded-lg bg-[#283933]/50 p-3 text-center border border-[#283933]">
                        <p className="text-xs text-gray-400">Match Rate</p>
                        <p className="text-lg font-bold text-white">92%</p>
                    </div>
                    <div className="rounded-lg bg-[#283933]/50 p-3 text-center border border-[#283933]">
                        <p className="text-xs text-gray-400">Salary Est.</p>
                        <p className="text-lg font-bold text-white">$145k</p>
                    </div>
                </div>
                <button className="mt-6 w-full rounded-lg bg-[#283933] py-2 text-sm font-bold text-white hover:bg-[#3f4a46] transition-colors border border-transparent hover:border-gray-500/30">
                    Update Experience
                </button>
            </div>
        </div>
    );
};

export default TwinAvatar;
