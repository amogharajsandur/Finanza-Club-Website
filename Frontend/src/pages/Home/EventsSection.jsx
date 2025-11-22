import React from 'react';
import { MdEvent } from "react-icons/md";

function EventsSection() {
    const events = [
        {
            title: "Market Masterclass",
            desc: "Learn how markets move through real-time charts and expert-led analysis.",
            image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop",
            span: "col-span-1"
        },
        {
            title: "Budgeting Bootcamp",
            desc: "A practical, activity-based session on planning and managing personal finances.",
            image: "https://images.unsplash.com/photo-1554224155-9ffd48f43635?q=80&w=2070&auto=format&fit=crop",
            span: "col-span-1"
        },
        {
            title: "Finance 101 Workshop",
            desc: "Build strong fundamentals in investing, money management, and budgeting.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop",
            span: "col-span-1"
        },
        {
            title: "Investor's Roundtable",
            desc: "Engage in open discussions about stocks, trends, and global finance.",
            image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
            span: "md:col-span-2"
        },
        {
            title: "Guest Speaker Series",
            desc: "Industry leaders share their experience, journeys, and advice.",
            image: "https://images.unsplash.com/photo-1515168816144-b35639401023?q=80&w=2067&auto=format&fit=crop",
            span: "col-span-1"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-4xl font-bold text-[#C0003D] mb-4">Events</h2>
                <p className="text-center text-gray-600 max-w-3xl">
                    From expert talks to hands-on workshops, Finanza hosts regular events that blend learning, networking, and real-world financial insights. Each session is designed to help students understand finance more deeply and build practical skills.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`bg-[#FFF9F0] p-6 rounded-[32px] hover:shadow-lg transition-shadow duration-300 ${event.span}`}
                    >
                        <div className="h-56 mb-6 overflow-hidden rounded-2xl">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[#C0003D] mb-3">{event.title}</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {event.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default EventsSection;