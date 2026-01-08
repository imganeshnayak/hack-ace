import React from 'react';

const RoleFitCard: React.FC = () => {
    const roles = [
        { title: 'Frontend Developer', match: 92, status: 'Ready' },
        { title: 'Full Stack Engineer', match: 74, status: 'Gap' },
        { title: 'UI/UX Engineer', match: 85, status: 'Ready' },
        { title: 'Engineering Lead', match: 45, status: 'High Gap' },
    ];

    return (
        <div className="bg-surface-dark border border-[#283933] rounded-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-lg">Role Fit Simulation</h3>
                <button className="text-primary text-xs font-bold uppercase hover:underline">View All</button>
            </div>

            <div className="flex flex-col gap-4">
                {roles.map((role, idx) => (
                    <div key={idx} className="group relative overflow-hidden rounded-lg bg-[#111816] border border-[#283933] p-3 hover:border-primary/30 transition-all cursor-pointer">
                        <div className="flex justify-between items-center mb-2 z-10 relative">
                            <span className="text-gray-200 font-medium text-sm">{role.title}</span>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded ${role.status === 'Ready' ? 'bg-primary/20 text-primary' :
                                    role.status === 'Gap' ? 'bg-yellow-500/20 text-yellow-500' : 'bg-red-500/20 text-red-500'
                                }`}>
                                {role.match}%
                            </span>
                        </div>
                        <div className="w-full bg-[#283933] h-1.5 rounded-full overflow-hidden z-10 relative">
                            <div
                                className={`h-full rounded-full transition-all duration-1000 ${role.status === 'Ready' ? 'bg-primary shadow-[0_0_8px_#25f4af]' :
                                        role.status === 'Gap' ? 'bg-yellow-500' : 'bg-red-500'
                                    }`}
                                style={{ width: `${role.match}%` }}
                            ></div>
                        </div>
                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoleFitCard;
