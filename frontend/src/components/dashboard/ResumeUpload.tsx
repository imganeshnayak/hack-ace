import React, { useState } from 'react';
import { useUserStore } from "../../store/useUserStore";

const ResumeUpload: React.FC = () => {
    const { setResumeUploaded, setEmployabilityScore } = useUserStore();
    const [isDragging, setIsDragging] = useState(false);
    const [isScanning, setIsScanning] = useState(false);

    const handleSimulateUpload = () => {
        setIsScanning(true);
        // Simulate scanning delay
        setTimeout(() => {
            setIsScanning(false);
            setResumeUploaded(true);
            setEmployabilityScore(78); // Set a mock initial score
        }, 3000);
    };

    return (
        <div
            className={`relative rounded-xl border-2 border-dashed transition-all duration-300 p-8 text-center cursor-pointer group
                ${isDragging ? 'border-primary bg-primary/5' : 'border-gray-700 bg-surface-dark hover:border-primary/50 hover:bg-surface-darker'}
            `}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleSimulateUpload(); }}
            onClick={handleSimulateUpload}
        >
            {isScanning ? (
                <div className="flex flex-col items-center gap-4">
                    <div className="relative size-16">
                        <div className="absolute inset-0 rounded-full border-4 border-[#283933]"></div>
                        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                        <span className="material-symbols-outlined absolute inset-0 flex items-center justify-center text-primary animate-pulse">
                            smart_toy
                        </span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold text-lg animate-pulse">Analyzing Twin...</h3>
                        <p className="text-gray-400 text-sm">Parsing keywords, extracting skills, measuring impact...</p>
                    </div>
                </div>
            ) : (
                <>
                    <div className="size-16 rounded-full bg-[#283933] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl text-primary">cloud_upload</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2">Upload Resume / CV</h3>
                    <p className="text-gray-400 text-sm max-w-xs mx-auto">
                        Drag & drop your PDF here or click to browse.
                        We'll clone your professional identity in seconds.
                    </p>
                </>
            )}
        </div>
    );
};

export default ResumeUpload;
