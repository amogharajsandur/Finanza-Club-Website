import React from 'react';
import { FaPhotoVideo } from "react-icons/fa";

function MediaSection() {
    const mediaItems = [
        {
            title: "Event Highlights",
            desc: "Recap of our recent annual finance summit.",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
        },
        {
            title: "Reels & Bytes",
            desc: "Quick financial tips and tricks for students.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
        },
        {
            title: "Club News",
            desc: "Latest announcements and upcoming opportunities.",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-4xl font-bold text-[#C0003D] mb-4">Media | Reels | News</h2>
                <p className="text-center text-gray-600 max-w-3xl">
                    Stay connected with our latest media coverage, social media reels, and club news.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mediaItems.map((item, index) => (
                    <div key={index} className="group cursor-pointer">
                        <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                        <h3 className="text-xl font-bold text-[#C0003D] mb-2 group-hover:text-[#a00033] transition-colors">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default MediaSection;