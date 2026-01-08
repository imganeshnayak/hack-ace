import { create } from 'zustand';

interface Skill {
    name: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
    verified: boolean;
}

interface UserState {
    name: string;
    role: string;
    experience: number;
    skills: Skill[];
    resumeUploaded: boolean;
    employabilityScore: number;

    // Actions
    setResumeUploaded: (status: boolean) => void;
    setEmployabilityScore: (score: number) => void;
    addSkill: (skill: Skill) => void;
}

export const useUserStore = create<UserState>((set) => ({
    name: 'Alex M.',
    role: 'Frontend Developer',
    experience: 3,
    skills: [
        { name: 'React', level: 'Advanced', verified: true },
        { name: 'TypeScript', level: 'Intermediate', verified: true },
        { name: 'Tailwind CSS', level: 'Expert', verified: false },
        { name: 'Node.js', level: 'Intermediate', verified: false },
    ],
    resumeUploaded: false,
    employabilityScore: 0, // Starts at 0, updates after "upload"

    setResumeUploaded: (status) => set({ resumeUploaded: status }),
    setEmployabilityScore: (score) => set({ employabilityScore: score }),
    addSkill: (skill) => set((state) => ({ skills: [...state.skills, skill] })),
}));
