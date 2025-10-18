import Section from '../components/Section'
import { SITE } from "../lib/config";
import home from "../assets/home.jpg"; // ⬅️ add this

export default function Home() {
    return (
        <div className="space-y-10">
            {/* Hero */}
            <div
                className="relative rounded-xl2 text-center overflow-hidden bg-center bg-no-repeat h-80"
                style={{
                    backgroundImage: `url(${home})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                {/* 🔥 CHANGED: Added strong fade overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Keep content visible above overlay */}
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

                    <p
                        className="mt-4 text-lg sm:text-2xl font-semibold text-white leading-relaxed max-w-[700px]"
                    >
                        It can be not easy adjusting your work schedule around the school hours of your children.
                        At Deeba's Daycare, we offer exceptional home day care services, so the little ones
                        are properly taken care of during your busy day.
                    </p>
                </div>

            </div>

            {/* Quick highlights using reusable Section */}
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
                                <span className="font-semibold text-brand-800">
                                    Zero screen time:
                                </span>{" "}
                                We focus on play, learning, and social interaction — no devices.
                            </li>
                            <li>
                                <span className="font-semibold text-brand-800">
                                    Potty training:
                                </span>{" "}
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
    )
}
