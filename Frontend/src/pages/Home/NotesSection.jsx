import React from 'react';
import { CgNotes } from "react-icons/cg";

function NotesSection() {
    const sessionNotes = [
        {
            title: "Why Is Earning Important?",
            subtitle: "Speaker: Mr. Nikhil Arya",
            content: "Earning forms the foundation of any personal finance journey. Before discussing how to manage, save, or invest, it’s critical to understand that generating income is the first step. Without earnings, financial advice about investing and budgeting becomes meaningless."
        },
        {
            title: "Education & Earning",
            subtitle: "Speaker: Mr. Nikhil Arya",
            content: "India’s education system before colonization focused on holistic enlightenment. The British colonial system transformed education into a job-oriented process, creating employees rather than thinkers or entrepreneurs."
        },
        {
            title: "Revenue Before Finance",
            subtitle: "Speaker: Mr. Nikhil Arya",
            content: "Finance is the skill of managing money, ensuring that what’s earned is wisely allocated. But before there can be any management, there must first be revenue—actual money flowing in. Generating revenue is the bedrock of all financial activity."
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 bg-[#FFF9F0] py-16 rounded-3xl">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-4xl font-bold text-[#C0003D] mb-4">Session notes</h2>
                <p className="text-center text-gray-600 max-w-3xl">
                    Access notes from our past sessions to catch up on what you missed or revisit key concepts.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {sessionNotes.map((note, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                        <h3 className="text-xl font-bold mb-3 text-gray-900">{note.title}</h3>
                        <p className="text-sm font-medium text-[#C0003D] mb-4">{note.subtitle}</p>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {note.content}
                        </p>
                        <a href="#" className="inline-block mt-6 text-sm font-semibold text-[#C0003D] hover:underline">
                            Read full notes →
                        </a>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <button className="bg-[#C0003D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#a00033] transition-colors shadow-lg hover:shadow-xl">
                    View More
                </button>
            </div>
        </section>
    );
}

export default NotesSection;