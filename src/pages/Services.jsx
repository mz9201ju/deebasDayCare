import Section from "../components/Section";
import Seo from "../components/Seo";
import { servicesItems } from "../content/services";

export default function Services() {
    return (
        <>
            <Seo
                title="Services"
                description="Explore toddler care and enrichment classes including music, yoga, gym, dance, and Spanish for children in Bellevue."
                path="/services"
            />
            <Section title="Our Services" subtitle="Flexible options for busy families.">
            <div className="grid gap-6 sm:grid-cols-2">
                {servicesItems.map((service) => (
                    <div
                        key={service.title}
                        className="relative rounded-2xl overflow-hidden shadow-card group transition-transform duration-700 ease-out"
                        style={{
                            minHeight: "240px",
                        }}
                    >
                        {/* 🌅 Background image with smooth fade */}
                        <div
                            className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${service.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                filter: "brightness(0.9)",
                            }}
                        />

                        {/* ✨ Soft light overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-all duration-700 group-hover:from-black/60 group-hover:via-black/30"></div>

                        {/* 💬 Foreground text */}
                        <div className="relative z-10 p-6 text-center text-white">
                            <h3
                                className="text-3xl font-extrabold text-white transition-all duration-500 group-hover:text-glow-rainbow group-active:text-glow-rainbow"
                            >
                                {service.title}
                            </h3>
                            <p className="whitespace-pre-line text-lg text-white/90 leading-relaxed mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            </Section>
        </>

    );
}
