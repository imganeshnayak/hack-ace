import React from 'react';

interface RealStoriesProps {
    stories: Array<{
        name: string;
        from: string;
        to: string;
        quote: string;
        image: string;
    }>;
}

const RealStories: React.FC<RealStoriesProps> = ({ stories }) => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">Real Stories</h3>
                <a className="text-xs text-primary hover:underline" href="#">View All</a>
            </div>
            {stories.map((story, index) => (
                <div key={index} className="group relative rounded-xl border border-[#1e362e] bg-[#162b24] overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    <div className={`absolute top-0 left-0 w-1 h-full ${index % 2 === 0 ? 'bg-primary/50 group-hover:bg-primary' : 'bg-blue-500/50 group-hover:bg-blue-500'} transition-colors`}></div>
                    <div className="p-5">
                        <div className="mb-3 flex items-start gap-3">
                            <div className="size-10 rounded-full bg-cover bg-center border border-gray-600" style={{ backgroundImage: `url("${story.image}")` }}></div>
                            <div>
                                <p className="font-bold text-white text-sm">{story.name}</p>
                                <p className="text-xs text-gray-400">{story.from} → {story.to}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 italic mb-3">"{story.quote}"</p>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span className="material-symbols-outlined text-[16px]">verified</span> Verified Path
                        </div>
                    </div>
                </div>
            ))}
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
