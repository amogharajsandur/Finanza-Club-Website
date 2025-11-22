import React from 'react';
import { FaNewspaper } from "react-icons/fa6";

function NewsletterSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img
                        src="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?q=80&w=2071&auto=format&fit=crop"
                        alt="Latest Newsletter"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-8">
                        <span className="bg-[#C0003D] text-white px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                            LATEST EDITION
                        </span>
                        <h3 className="text-white text-3xl font-bold">The Fin-Z</h3>
                    </div>
                </div>

                <div>
                    <div className="mb-8">
                        <h2 className="text-4xl font-bold text-[#C0003D] mb-2">Latest Newsletter</h2>
                        <div className="h-1 w-20 bg-[#C0003D]"></div>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                        Stay ahead of the curve with our monthly newsletter, "The Fin-Z". We cover the latest market trends, financial news, and club updates. Our team of student editors curates insightful articles to keep you informed and engaged.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-[#C0003D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a00033] transition-colors shadow-lg hover:shadow-xl">
                            Read It
                        </button>
                        <button className="border-2 border-[#C0003D] text-[#C0003D] px-8 py-3 rounded-full font-semibold hover:bg-[#C0003D] hover:text-white transition-all duration-300">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsletterSection;