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

    // Profile Fields
    email: string;
    phone: string;
    location: string;
    bio: string;

    // Actions
    setResumeUploaded: (status: boolean) => void;
    setEmployabilityScore: (score: number) => void;
    addSkill: (skill: Skill) => void;
    updateProfile: (updates: Partial<UserState>) => void;
}

export const useUserStore = create<UserState>((set) => ({
    name: 'Alex M.',
    role: 'Frontend Developer',
    experience: 3,
    email: 'alex.m@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate software engineer with a focus on AI and machine learning. Love building intuitive user interfaces and solving complex problems.',
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
    updateProfile: (updates) => set((state) => ({ ...state, ...updates })),
}));
