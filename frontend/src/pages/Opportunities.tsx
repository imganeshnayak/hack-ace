import React from 'react';
import JobCard from '../components/opportunities/JobCard';

const Opportunities: React.FC = () => {
    const jobs = [
        {
            role: "Senior React Engineer",
            company: "TechFlow AI",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
            matchScore: 94,
            salary: "$140k - $180k",
            location: "Remote",
            tags: ["React", "TypeScript", "Performance"],
            missingSkills: []
        },
        {
            role: "Frontend Architect",
            company: "DataSphere",
            logo: "https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png",
            matchScore: 88,
            salary: "$160k - $210k",
            location: "New York, NY",
            tags: ["System Design", "React", "Node.js"],
            missingSkills: ["GraphDB"]
        },
        {
            role: "Full Stack Developer",
            company: "GreenEnergy",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
            matchScore: 72,
            salary: "$110k - $140k",
            location: "Austin, TX [Hybrid]",
            tags: ["Vue.js", "Python", "AWS"],
            missingSkills: ["Vue.js", "AWS"]
        }
    ];

    return (
        <div className="animate-fade-in flex flex-col gap-8 pb-10">
            {/* Header */}
            <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold text-white tracking-tight">Opportunity Match</h2>
                <p className="text-gray-400 max-w-2xl">
                    AI-curated roles that fit your <span className="text-primary font-bold">Digital Twin</span> profile.
                    <br />
                    <span className="text-xs text-[#283933] bg-primary/10 px-2 py-0.5 rounded border border-primary/20 mt-2 inline-block">
                        Beta: Matches based on verified skills & roadmap progress.
                    </span>
                </p>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Filters Sidebar */}
                <div className="lg:col-span-1 space-y-4">
                    <div className="bg-[#16201d] border border-[#283933] rounded-xl p-5">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-sm">filter_list</span>
                            Filters
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Readiness</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer hover:text-white">
                                        <input type="checkbox" className="rounded border-[#283933] bg-[#111816] text-primary focus:ring-primary" defaultChecked />
                                        High Match (85%+)
                                    </label>
                                    <label className="flex items-center gap-2 text-gray-300 text-sm cursor-pointer hover:text-white">
                                        <input type="checkbox" className="rounded border-[#283933] bg-[#111816] text-primary focus:ring-primary" defaultChecked />
                                        Reach Roles
                                    </label>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-[#283933]">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Location</label>
                                <select className="w-full bg-[#111816] border border-[#283933] rounded text-white text-sm p-2 focus:ring-primary focus:border-primary">
                                    <option>Remote / Anywhere</option>
                                    <option>United States</option>
                                    <option>Europe</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Job Feed */}
                <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400">Found 12 matches for "Front End Engineer"</span>
                        <div className="flex items-center gap-2 text-sm text-white">
                            <span>Sort by:</span>
                            <span className="font-bold text-primary cursor-pointer">Match Score</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {jobs.map((job, index) => (
                            <JobCard key={index} {...job} />
                        ))}
                    </div>

                    {/* Load More Mock */}
                    <button className="w-full py-3 rounded-lg border border-[#283933] text-gray-400 hover:text-white hover:bg-[#16201d] transition-colors text-sm font-medium mt-4">
                        Load More Recommendations
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Opportunities;
