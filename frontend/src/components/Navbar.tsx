import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background-dark/80 backdrop-blur-md border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-4xl">smart_toy</span>
                        <span className="text-2xl font-bold tracking-tight text-white">JobTwin</span>
                    </div>
                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-8 items-center">
                        <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Features</a>
                        <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">How it Works</a>
                        <a className="text-sm font-medium text-gray-300 hover:text-primary transition-colors" href="#">Pricing</a>
                    </nav>
                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link className="text-sm font-medium text-white hover:text-primary transition-colors" to="/login">Log In</Link>
                        <Link to="/register" className="bg-primary hover:bg-primary-dark text-background-dark text-sm font-bold py-2.5 px-5 rounded-lg transition-all shadow-neon hover:shadow-lg hover:scale-105">
                            Get Started
                        </Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu (Basic implementation) */}
            {isOpen && (
                <div className="md:hidden bg-background-dark border-b border-primary/10 px-4 pt-2 pb-4 space-y-1">
                    <a className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md" href="#">Features</a>
                    <a className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md" href="#">How it Works</a>
                    <a className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md" href="#">Pricing</a>
                </div>
            )}
        </header>
    );
};

export default Navbar;
