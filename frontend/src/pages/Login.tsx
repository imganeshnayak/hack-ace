import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder for authentication logic
        console.log('Logging in with:', email, password);
        // Navigate to dashboard on success (simulated)
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-background-dark flex items-center justify-center p-4 relative overflow-hidden">
             {/* Background Effects */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="w-full max-w-md bg-surface-dark/60 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">Welcome Back</h1>
                    <p className="text-gray-400 text-sm">Enter your credentials to access your terminal.</p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-5">
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

                    <div className="space-y-1">
                        <label className="text-xs font-mono text-primary uppercase tracking-wider ml-1">Password_Key</label>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="material-symbols-outlined text-gray-500 group-focus-within:text-primary transition-colors">lock</span>
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#0b1814] border border-[#283933] text-white text-sm rounded-lg focus:ring-1 focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 outline-none transition-all placeholder-gray-600"
                                placeholder="••••••••"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center cursor-pointer group">
                             <input type="checkbox" className="w-4 h-4 rounded bg-[#0b1814] border-gray-600 text-primary focus:ring-primary focus:ring-offset-gray-800" />
                             <span className="ml-2 text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
                        </label>
                        <a href="#" className="text-primary hover:text-primary-hover font-medium transition-colors">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full text-background-dark bg-primary hover:bg-primary-hover focus:ring-4 focus:outline-none focus:ring-primary/30 font-bold rounded-lg text-sm px-5 py-3 text-center transition-all shadow-[0_0_20px_rgba(37,244,175,0.3)] hover:shadow-[0_0_30px_rgba(37,244,175,0.5)] flex items-center justify-center gap-2 mt-2"
                    >
                        <span className="material-symbols-outlined text-[20px]">login</span>
                        Initialize Session
                    </button>
                </form>

                <div className="mt-6 text-center text-sm">
                    <span className="text-gray-500">New user? </span>
                    <Link to="/register" className="text-primary hover:text-primary-hover font-medium transition-colors">Create Access Key</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
