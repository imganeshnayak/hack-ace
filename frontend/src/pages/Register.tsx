import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for registration logic
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        console.log('Registering with:', name, email, password);
        // Navigate to login or dashboard on success (simulated)
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-background-dark flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="w-full max-w-md bg-surface-dark/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">Join the Network</h1>
                    <p className="text-gray-400 text-sm">Create your secure access identity.</p>
                </div>

                <form onSubmit={handleRegister} className="flex flex-col gap-5">
                    <div className="space-y-1">
                        <label className="text-xs font-mono text-primary uppercase tracking-wider ml-1">Full_Name</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">badge</span>
                            </div>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-[#0b1814] border border-[#283933] text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 outline-none transition-all placeholder-gray-600"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-mono text-primary uppercase tracking-wider ml-1">Email_Address</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">alternate_email</span>
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#0b1814] border border-[#283933] text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 outline-none transition-all placeholder-gray-600"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-mono text-primary uppercase tracking-wider ml-1">Password</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">lock</span>
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-[#0b1814] border border-[#283933] text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 outline-none transition-all placeholder-gray-600"
                                    placeholder="••••••"
                                    required
                                />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-mono text-primary uppercase tracking-wider ml-1">Confirm</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">lock_reset</span>
                                </div>
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full bg-[#0b1814] border border-[#283933] text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 outline-none transition-all placeholder-gray-600"
                                    placeholder="••••••"
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-600 rounded bg-[#0b1814] focus:ring-3 focus:ring-primary/50 text-primary" required />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="text-gray-400">I accept the <a href="#" className="font-medium text-primary hover:underline">Terms and Conditions</a></label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full text-background-dark bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary/30 font-bold rounded-lg text-sm px-5 py-3 text-center transition-all shadow-[0_0_20px_rgba(37,244,175,0.3)] hover:shadow-[0_0_30px_rgba(37,244,175,0.5)] flex items-center justify-center gap-2 mt-2"
                    >
                        <span className="material-symbols-outlined text-[20px]">person_add</span>
                        Create Account
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <span className="text-gray-500">Already a member? </span>
                    <Link to="/login" className="text-primary hover:text-primary-hover font-medium transition-colors">Access Terminal</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
