import React from 'react';

function HeroSection() {
    return (
        <section className="relative h-[500px] md:h-[600px] mb-16">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
                    alt="Finance classroom"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center">
                <div className="max-w-2xl text-white">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Rishihood University's<br />
                        Official Finance &<br />
                        Investment Club
                    </h1>
                    <p className="text-gray-200 text-lg mb-8 max-w-lg">
                        Learn, invest, and grow with a community of finance enthusiasts.
                    </p>
                    <button className="bg-[#C0003D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a00033] transition-colors">
                        Join Finanza
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;