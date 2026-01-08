import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUserStore } from '../store/useUserStore';

const ProfilePage: React.FC = () => {
    const { name, role, email, phone, location, bio, skills, updateProfile } = useUserStore();
    const [isEditing, setIsEditing] = useState(false);

    // Local state for editing form
    const [formData, setFormData] = useState({
        name,
        email,
        phone,
        location,
        bio
    });

    const handleEdit = () => {
        setIsEditing(true);
        // Sync form data with current store values
        setFormData({
            name,
            email,
            phone,
            location,
            bio
        });
    };

    const handleSave = () => {
        updateProfile(formData);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="relative overflow-hidden rounded-2xl bg-[#111816] border border-[#283933] p-8">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <span className="material-symbols-outlined text-[150px] leading-none text-primary">account_circle</span>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="relative">
                        <div className="size-24 rounded-full bg-cover bg-center border-4 border-[#1c2623] shadow-xl"
                            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdzTBDSGVjVLwi26O5_FdQk55ysluyVGtzNbQwWOR187DRTV_6v5TGyc5LV2L2z_fn5VTJWYkFVcjT1RSuXhMnQGM7UDodxNK4XEKpp4e11cDfKDUsyMdTA6UHM0p2Z4--P0l03daEPw5Go44i6ZfO-iOP25dnSD9GbTg99h-CQ4IUak3ovetX-TYCX5OiiWz7DdJyTEhr723tWiFG6oSzApCl8b5VUrfHvkUfYB7RPvb6f2ufC")' }}>
                        </div>
                        <button className="absolute bottom-0 right-0 p-1.5 bg-primary text-black rounded-full shadow-lg hover:bg-primary/90 transition-colors">
                            <span className="material-symbols-outlined text-[16px] font-bold">camera_alt</span>
                        </button>
                    </div>

                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                            <h1 className="text-3xl font-bold text-white">{name}</h1>
                            <span className="px-2 py-0.5 rounded text-xs font-bold bg-primary/20 text-primary border border-primary/20">
                                PRO
                            </span>
                        </div>
                        <p className="text-gray-400 text-lg">{role}</p>
                        <div className="flex items-center gap-4 mt-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[18px]">location_on</span>
                                {location}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                                Joined Jan 2024
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-0">
                        {!isEditing ? (
                            <button
                                onClick={handleEdit}
                                className="flex items-center gap-2 px-4 py-2 bg-[#283933] hover:bg-[#283933]/80 text-white rounded-lg transition-colors border border-transparent hover:border-primary/50"
                            >
                                <span className="material-symbols-outlined text-[20px]">edit</span>
                                Edit Profile
                            </button>
                        ) : (
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleCancel}
                                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-black font-medium rounded-lg transition-colors"
                                >
                                    <span className="material-symbols-outlined text-[20px]">save</span>
                                    Save Changes
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Personal Info & Bio */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Bio Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#111816] border border-[#283933] rounded-2xl p-6"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">description</span>
                            <h2 className="text-xl font-bold text-white">About Me</h2>
                        </div>

                        {isEditing ? (
                            <textarea
                                name="bio"
                                value={formData.bio}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-[#1c2623] border border-[#283933] rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                            />
                        ) : (
                            <p className="text-gray-400 leading-relaxed">
                                {bio}
                            </p>
                        )}
                    </motion.div>

                    {/* Personal Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#111816] border border-[#283933] rounded-2xl p-6"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">badge</span>
                            <h2 className="text-xl font-bold text-white">Personal Information</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#1c2623] border border-[#283933] rounded-lg p-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    />
                                ) : (
                                    <div className="text-white font-medium">{name}</div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Email Address</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#1c2623] border border-[#283933] rounded-lg p-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    />
                                ) : (
                                    <div className="text-white font-medium">{email}</div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</label>
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-[#1c2623] border border-[#283933] rounded-lg p-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    />
                                ) : (
                                    <div className="text-white font-medium">{phone}</div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Location</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full bg-[#1c2623] border border-[#283933] rounded-lg p-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    />
                                ) : (
                                    <div className="text-white font-medium">{location}</div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Stats & Settings */}
                <div className="space-y-6">
                    {/* Skills */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#111816] border border-[#283933] rounded-2xl p-6"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">bolt</span>
                            <h2 className="text-xl font-bold text-white">Top Skills</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                                <span key={skill.name} className="px-3 py-1 bg-surface-darker border border-[#283933] rounded-full text-sm text-gray-300">
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-[#111816] to-[#0d1210] border border-[#283933] rounded-2xl p-6"
                    >
                        <h2 className="text-xl font-bold text-white mb-6">Activity</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-[#1c2623]/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                                        <span className="material-symbols-outlined">workspace_premium</span>
                                    </div>
                                    <span className="text-gray-300">Certifications</span>
                                </div>
                                <span className="font-bold text-white">4</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-[#1c2623]/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                        <span className="material-symbols-outlined">school</span>
                                    </div>
                                    <span className="text-gray-300">Courses</span>
                                </div>
                                <span className="font-bold text-white">12</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-[#1c2623]/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                                        <span className="material-symbols-outlined">check_circle</span>
                                    </div>
                                    <span className="text-gray-300">Skills Verified</span>
                                </div>
                                <span className="font-bold text-white">8</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
