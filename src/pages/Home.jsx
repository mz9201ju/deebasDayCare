import Section from '../components/Section'
import { SITE } from "../lib/config";
import home from "../assets/home.jpg"; // ⬅️ add this


export default function Home() {
    return (
        <div className="space-y-10">
            {/* Hero */}
            <div
                className="relative rounded-xl2 text-center overflow-hidden bg-white bg-center bg-no-repeat bg-[length:80%] h-80"
                style={{
                    backgroundImage: `url(${home})`,
                    backgroundSize: "cover", backgroundPosition: "center"
                }}
            >
                <div className="absolute inset-0 pointer-events-none bg-white/0" />
                <div className="relative">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-800">
                        {SITE.hero.title}
                    </h1>
                    <p
                        className="mt-3 text-white font-semibold max-w-2xl mx-auto"
                        style={{
                            textShadow:
                                "0 0 8px #ff00ff, 0 0 12px #00ffff, 0 0 16px #ff0000, 0 0 20px #00ff00",
                            animation: "glow 3s linear infinite",
                        }}
                    >
                        {SITE.hero.subtitle}
                    </p>
                </div>
            </div>


            {/* Quick highlights using reusable Section */}
            <Section title="Why families choose us">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { t: 'Warm caregivers', d: 'CPR‑certified, patient, and kind.' },
                        { t: 'Play‑based learning', d: 'STEM toys, story time, arts & crafts.' },
                        { t: 'Healthy snacks', d: 'Nut‑safe options and hydration.' },
                    ].map((x) => (
                        <div key={x.t} className="card">
                            <h3 className="font-bold text-brand-800">{x.t}</h3>
                            <p className="text-brand-700/80 mt-1">{x.d}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    )
}