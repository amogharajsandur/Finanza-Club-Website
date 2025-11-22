import React from 'react';

function AboutSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#C0003D] mb-2">About</h2>
                <h2 className="text-5xl font-bold text-[#C0003D]">Finanza</h2>
            </div>

            <div className="text-gray-700 leading-relaxed space-y-6 max-w-4xl">
                <p className="text-lg">
                    The Finance Club at Rishihood University is a student-led initiative dedicated to fostering financial literacy and investment acumen among students. We provide a platform for students to learn, discuss, and apply financial concepts in real-world scenarios.
                </p>
                <p className="text-lg">
                    Our mission is to bridge the gap between theoretical knowledge and practical application through workshops, guest lectures, competitions, and hands-on projects. Join us to explore the dynamic world of finance.
                </p>
            </div>
        </section>
    );
}

export default AboutSection;