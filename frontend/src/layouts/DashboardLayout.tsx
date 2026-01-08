import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <div className="flex h-screen w-full bg-background-dark text-slate-900 dark:text-white font-display overflow-hidden antialiased selection:bg-primary selection:text-black">
            {/* Sidebar (Desktop & Mobile) */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#111816] border-r border-[#283933] transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col h-full p-4 justify-between">
                    <div className="flex flex-col gap-8">
                        {/* Logo */}
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-3">
                                <div className="relative flex items-center justify-center size-10 rounded-full bg-surface-darker border border-[#283933] shadow-[0_0_15px_rgba(37,244,175,0.1)]">
                                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>smart_toy</span>
                                </div>
                                <h1 className="text-white text-xl font-bold tracking-tight">JobTwin</h1>
                            </div>
                            {/* Mobile Close Button */}
                            <button onClick={() => setIsMobileMenuOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        {/* Nav Links */}
                        <nav className="flex flex-col gap-2">
                            <Link to="/dashboard"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${location.pathname === '/dashboard' || location.pathname === '/dashboard/' ? 'bg-[#283933] text-white shadow-sm border-l-2 border-primary' : 'text-gray-400 hover:bg-surface-dark hover:text-white'}`}>
                                <span className={`material-symbols-outlined ${location.pathname === '/dashboard' ? 'filled text-primary' : 'group-hover:text-primary transition-colors'}`}>dashboard</span>
                                <span className="text-sm font-medium">Dashboard</span>
                            </Link>
                            <Link to="/dashboard/market"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${location.pathname === '/dashboard/market' ? 'bg-[#283933] text-white shadow-sm border-l-2 border-primary' : 'text-gray-400 hover:bg-surface-dark hover:text-white'}`}>
                                <span className={`material-symbols-outlined ${location.pathname === '/dashboard/market' ? 'filled text-primary' : 'group-hover:text-primary transition-colors'}`}>show_chart</span>
                                <span className="text-sm font-medium">Market Pulse</span>
                            </Link>
                            <Link to="/dashboard/roadmap"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${location.pathname === '/dashboard/roadmap' ? 'bg-[#283933] text-white shadow-sm border-l-2 border-primary' : 'text-gray-400 hover:bg-surface-dark hover:text-white'}`}>
                                <span className={`material-symbols-outlined ${location.pathname === '/dashboard/roadmap' ? 'filled text-primary' : 'group-hover:text-primary transition-colors'}`}>map</span>
                                <span className="text-sm font-medium">Career Roadmap</span>
                            </Link>

                            {/* Career Path Reality - Feature 4 */}
                            <Link to="/dashboard/career-path"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${location.pathname === '/dashboard/career-path' ? 'bg-[#283933] text-white shadow-sm border-l-2 border-primary' : 'text-gray-400 hover:bg-surface-dark hover:text-white'}`}>
                                <span className={`material-symbols-outlined ${location.pathname === '/dashboard/career-path' ? 'filled text-primary' : 'group-hover:text-primary transition-colors'}`}>dataset_linked</span>
                                <span className="text-sm font-medium">Career Reality</span>
                            </Link>

                            {/* Skill Gap - Feature 2 */}
                            <Link to="/dashboard/validator"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${location.pathname === '/dashboard/validator' ? 'bg-[#283933] text-white shadow-sm border-l-2 border-primary' : 'text-gray-400 hover:bg-surface-dark hover:text-white'}`}>
                                <span className={`material-symbols-outlined ${location.pathname === '/dashboard/validator' ? 'filled text-primary' : 'group-hover:text-primary transition-colors'}`}>school</span>
                                <span className="text-sm font-medium">Skill Gap</span>
                            </Link>

                            {/* Skill Challenge - Feature 5 */}
                            <Link to="/dashboard/challenge"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${location.pathname === '/dashboard/challenge' ? 'bg-[#283933] text-white shadow-sm border-l-2 border-primary' : 'text-gray-400 hover:bg-surface-dark hover:text-white'}`}>
                                <span className={`material-symbols-outlined ${location.pathname === '/dashboard/challenge' ? 'filled text-primary' : 'group-hover:text-primary transition-colors'}`}>token</span>
                                <span className="text-sm font-medium">Skill Validator</span>
                            </Link>

                            <Link to="/dashboard/interview"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${location.pathname === '/dashboard/interview' ? 'bg-[#283933] text-white shadow-sm border-l-2 border-primary' : 'text-gray-400 hover:bg-surface-dark hover:text-white'}`}>
                                <span className={`material-symbols-outlined ${location.pathname === '/dashboard/interview' ? 'filled text-primary' : 'group-hover:text-primary transition-colors'}`}>mic</span>
                                <span className="text-sm font-medium">Interview Coach</span>
                            </Link>
                            <Link to="/dashboard/jobs"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors group ${location.pathname === '/dashboard/jobs' ? 'bg-[#283933] text-white shadow-sm border-l-2 border-primary' : 'text-gray-400 hover:bg-surface-dark hover:text-white'}`}>
                                <span className={`material-symbols-outlined ${location.pathname === '/dashboard/jobs' ? 'filled text-primary' : 'group-hover:text-primary transition-colors'}`}>work</span>
                                <span className="text-sm font-medium">Opportunities</span>
                            </Link>
                        </nav>
                    </div>
                    {/* Bottom Actions */}
                    <div className="flex flex-col gap-2">
                        <Link to="/dashboard/profile" className="flex items-center gap-3 px-3 py-4 mt-2 border-t border-[#283933] hover:bg-surface-dark transition-colors group">
                            <div className="size-8 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdzTBDSGVjVLwi26O5_FdQk55ysluyVGtzNbQwWOR187DRTV_6v5TGyc5LV2L2z_fn5VTJWYkFVcjT1RSuXhMnQGM7UDodxNK4XEKpp4e11cDfKDUsyMdTA6UHM0p2Z4--P0l03daEPw5Go44i6ZfO-iOP25dnSD9GbTg99h-CQ4IUak3ovetX-TYCX5OiiWz7DdJyTEhr723tWiFG6oSzApCl8b5VUrfHvkUfYB7RPvb6f2ufC")' }}></div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-white leading-none group-hover:text-primary transition-colors">Alex M.</span>
                                <span className="text-xs text-gray-400 mt-1">Pro Member</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 bg-background-dark relative">
                {/* Top Nav */}
                <header className="flex items-center justify-between border-b border-[#283933] px-8 py-4 bg-[#111816]/80 backdrop-blur-md sticky top-0 z-20">
                    <div className="flex items-center gap-6 flex-1">
                        <div className="lg:hidden">
                            <button onClick={() => setIsMobileMenuOpen(true)} className="p-1 text-white hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>
                        <div className="relative w-full max-w-md hidden md:block">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="material-symbols-outlined text-gray-400">search</span>
                            </div>
                            <input className="block w-full p-2.5 pl-10 text-sm text-white bg-surface-darker border border-[#283933] rounded-lg focus:ring-primary focus:border-primary placeholder-gray-400" placeholder="Search jobs, skills, or companies..." type="text" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-6 mr-4 border-r border-[#283933] pr-6">
                            <a className="text-sm font-bold text-primary border-b border-primary" href="#">Software Eng.</a>
                            <a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Data Science</a>
                            <a className="text-sm font-medium text-gray-400 hover:text-white transition-colors" href="#">Product</a>
                        </div>
                        <button className="relative p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-[#283933]">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-primary rounded-full"></span>
                        </button>
                        <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-[#283933]">
                            <span className="material-symbols-outlined">chat_bubble</span>
                        </button>
                        <Link to="/" className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-[#283933]" title="Back to Home">
                            <span className="material-symbols-outlined">home</span>
                        </Link>
                    </div>
                </header>
                {/* Scrollable Page Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
                    <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
