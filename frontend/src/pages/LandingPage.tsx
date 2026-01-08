import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
                <Hero />
                <Features />
                <HowItWorks />
                <Testimonials />
                <Footer />
            </main>
        </div>
    );
};

export default LandingPage;
