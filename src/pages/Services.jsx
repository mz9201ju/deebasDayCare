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
                            className="service-card-media absolute inset-0 transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(120,53,15,0.12), rgba(245,158,11,0.22)), url(${service.image})`,
                                filter: "brightness(1.02) saturate(1.08)",
                            }}
                        />

                        {/* Warm readability layer that matches the site's orange palette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/45 via-orange-800/25 to-amber-200/10 transition-all duration-700 group-hover:from-amber-950/35 group-hover:via-orange-700/20"></div>

                        {/* 💬 Foreground text */}
                        <div className="relative z-10 p-6 text-center text-white">
                            <h3
                                className="text-3xl font-extrabold text-white transition-all duration-500 group-hover:text-amber-100 group-active:text-amber-100"
                                style={{
                                    textShadow: "0 0 8px rgba(251,191,36,0.55), 0 2px 8px rgba(120,53,15,0.75)",
                                }}
                            >
                                {service.title}
                            </h3>
                            <p className="whitespace-pre-line text-lg text-amber-50/95 leading-relaxed mt-2 drop-shadow-[0_2px_8px_rgba(120,53,15,0.85)]">
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
