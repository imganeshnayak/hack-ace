import React from 'react';
import InterviewConfig from '../components/interview/InterviewConfig';
import InterviewChat from '../components/interview/InterviewChat';
import LiveFeedback from '../components/interview/LiveFeedback';

const AIInterviewCoach: React.FC = () => {
    return (
        <div className="animate-fade-in flex flex-col h-[calc(100vh-100px)]">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-white tracking-tight">AI Interview Coach</h2>
                    <p className="text-gray-400 text-sm mt-1">Practice with a digital twin of a hiring manager tailored to your target role.</p>
                </div>
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#1f362e] border border-white/5">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs font-mono text-primary/80 uppercase tracking-widest">Live Session</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-0">
                {/* Left Sidebar: Configuration (3 cols) */}
                <div className="hidden lg:block lg:col-span-3 h-full overflow-hidden">
                    <InterviewConfig />
                </div>

                {/* Center Stage: Interview Interface (6 cols) */}
                <div className="col-span-1 lg:col-span-6 h-full min-h-0">
                    <InterviewChat />
                </div>

                {/* Right Sidebar: Live Feedback (3 cols) */}
                <div className="hidden lg:block lg:col-span-3 h-full overflow-hidden">
                    <LiveFeedback />
                </div>
            </div>
        </div>
    );
};

export default AIInterviewCoach;
