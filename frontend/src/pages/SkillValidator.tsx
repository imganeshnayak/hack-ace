import React from 'react';
import MissionBrief from '../components/validator/MissionBrief';
import CodingEnvironment from '../components/validator/CodingEnvironment';
import AIAnalysisPanel from '../components/validator/AIAnalysisPanel';
import { Link } from 'react-router-dom';

const SkillValidator: React.FC = () => {
    return (
        <div className="animate-fade-in flex flex-col gap-8 pb-10 h-[calc(100vh-100px)]">
            {/* Breadcrumbs & Heading */}
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-sm text-[#9cbab0] mb-2">
                    <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                    <span className="text-white">Engineering</span>
                    <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                    <span className="text-primary">React Performance</span>
                </div>
                <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Skill Validator</h2>
                        <p className="text-[#9cbab0] mt-1">Challenge: React Component Optimization & Virtualization</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full border border-[#283933] bg-[#16201d] text-xs text-[#9cbab0] flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">schedule</span> 45m Limit
                        </span>
                        <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs text-primary font-medium flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">stars</span> 500 XP
                        </span>
                    </div>
                </div>
            </div>

            {/* 3-Column Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                {/* LEFT COLUMN: Task Context (3 cols) */}
                <div className="lg:col-span-3">
                    <MissionBrief />
                </div>

                {/* CENTER COLUMN: Workspace (5 cols) */}
                <div className="lg:col-span-5 flex flex-col">
                    <CodingEnvironment />
                </div>

                {/* RIGHT COLUMN: AI Analysis (4 cols) */}
                <div className="lg:col-span-4">
                    <AIAnalysisPanel />
                </div>
            </div>
        </div>
    );
};

export default SkillValidator;
