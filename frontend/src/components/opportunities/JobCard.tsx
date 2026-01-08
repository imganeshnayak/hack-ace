import React from 'react';

interface JobCardProps {
    role: string;
    company: string;
    logo: string;
    matchScore: number;
    salary: string;
    location: string;
    tags: string[];
    missingSkills: string[];
}

const JobCard: React.FC<JobCardProps> = ({ role, company, logo, matchScore, salary, location, tags, missingSkills }) => {
    return (
        <div className="bg-[#16201d] border border-[#283933] rounded-xl p-6 flex flex-col gap-4 hover:border-primary/30 transition-all group relative overflow-hidden">
            {/* Match Gradient Overlay */}
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-${matchScore > 85 ? 'primary' : 'yellow-500'}/10 to-transparent rounded-bl-full pointer-events-none`}></div>

            <div className="flex justify-between items-start z-10">
                <div className="flex gap-4">
                    <div className="size-12 rounded-lg bg-white p-2 flex items-center justify-center">
                        <img src={logo} alt={company} className="max-w-full max-h-full object-contain" />
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg group-hover:text-primary transition-colors">{role}</h3>
                        <p className="text-gray-400 text-sm">{company} • {location}</p>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className={`text-2xl font-bold font-mono ${matchScore > 85 ? 'text-primary' : 'text-yellow-500'}`}>
                        {matchScore}%
                    </div>
                    <span className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Match</span>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 rounded bg-[#1f2e28] text-gray-300 text-xs border border-[#283933]">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Missing Skills Warning */}
            {missingSkills.length > 0 && (
                <div className="mt-2 text-xs bg-red-500/10 border border-red-500/20 rounded-lg p-3 flex items-start gap-2">
                    <span className="material-symbols-outlined text-red-400 text-sm mt-0.5">warning</span>
                    <div className="text-gray-300">
                        <span className="text-red-400 font-bold">Missing: </span>
                        {missingSkills.join(', ')}
                    </div>
                </div>
            )}

            {/* Footer Stats & Action */}
            <div className="mt-2 pt-4 border-t border-[#283933] flex items-center justify-between">
                <span className="text-sm font-mono text-gray-400">{salary}</span>
                <button className="px-4 py-2 bg-primary text-black font-bold text-sm rounded hover:bg-[#1ee09e] transition-colors shadow-[0_0_15px_rgba(37,244,175,0.2)]">
                    Quick Apply
                </button>
            </div>
        </div>
    );
};

export default JobCard;
