import { useState, useEffect } from "react";
import Section from "../components/Section";
import { SITE } from "../lib/config";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";

export default function Home() {
    const [currentBg, setCurrentBg] = useState(home1);

    useEffect(() => {
        const images = [home1, home2];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % images.length;
            setCurrentBg(images[index]);
        }, 5000); // ⏱️ every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-10">
            {/* Hero */}
            <div
                className="relative rounded-xl2 text-center overflow-hidden bg-center bg-no-repeat h-200 transition-all duration-1000 ease-in-out"
                style={{
                    backgroundImage: `url(${currentBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* 🔥 Fade overlay */}
                <div className="absolute inset-0 bg-black/45 transition-opacity duration-1000"></div>

                {/* Content above overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                    <h1
                        className="mt-2 text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg leading-tight"
                        style={{
                            textShadow:
                                "0 0 8px #ff00ff, 0 0 12px #00ffff, 0 0 16px #ff0000, 0 0 20px #00ff00",
                            animation: "glow 3s linear infinite",
                        }}
                    >
                        {SITE.hero.title}
                    </h1>

                    <p className="whitespace-pre-line mt-4 text-lg sm:text-2xl font-semibold text-white leading-relaxed max-w-[700px]">
                        {SITE.hero.subtitle}
                    </p>
                </div>
            </div>

            {/* Highlights */}
            <Section>
                <div className="flex justify-center">
                    <div className="card p-6 rounded-2xl shadow-lg bg-gradient-to-br from-brand-100 to-brand-200 text-center max-w-xl">
                        <h3 className="text-2xl font-bold text-brand-800 mb-4">
                            What Makes Us Special
                        </h3>

                        <ul className="space-y-3 text-brand-700/90">
                            <li>
                                <span className="font-semibold text-brand-800">
                                    Certified extracurricular activities:
                                </span>{" "}
                                Engaging programs including rotating ballet, cooking, art, and yoga classes.
                            </li>
                            <li>
                                <span className="font-semibold text-brand-800">Zero screen time:</span>{" "}
                                We focus on play, learning, and social interaction — no devices.
                            </li>
                            <li>
                                <span className="font-semibold text-brand-800">Potty training:</span>{" "}
                                Gentle and consistent support to help children develop independence.
                            </li>
                            <li>
                                <span className="font-semibold text-brand-800">
                                    Kindergarten preparedness:
                                </span>{" "}
                                Early learning in Math, English Language Arts, and Science.
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>
        </div>
    );
}
