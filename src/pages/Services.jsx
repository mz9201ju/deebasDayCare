import Section from "../components/Section";
import infintcare from "../assets/infintcare.jpg";
import toddlercare from "../assets/toddlercare.jpg";
import musickids from "../assets/musickids.jpg";

export default function Services() {
    const items = [
        {
            t: "Infant Care",
            d: "When we care for your infant, you can be sure that your little one will receive qualified and caring attention. Our staff members at Deeba's Daycare are trained and experienced in all aspects of infant care. We genuinely love what we do, so you can rest assured that your child is safe, comfortable, and clean with our professional child care service. Our home day care specialists ask about allergies and other environmental factors that may affect your child's health. We keep a close eye on your child at all times. We help with early child development and help your child socialize well with their peers. To reserve a spot for your infant or toddler care, contact us at Deeba's Daycare in Bellevue, WA.",
            img: infintcare,
        },
        {
            t: "Toddler Care",
            d: "Individual care and attention allow toddlers to feel safe and secure when taking their first steps and speaking their first words. Our toddler care program offers stimulating activities and group interactions that encourage play and exploration. At our licensed day care, toddlers learn through sensory experiences emphasizing the environment and their relationships. We balance group interaction with individual attention to help toddlers build socialization, cognitive, language, and motor skills, self-esteem, and self-help skills. When you bring your child to the best day care center, you can rest assured that they will be able to take advantage of the preschool preparation needed to grow.",
            img: toddlercare,
        },
        {
            t: "Music for Kids",
            d: "When you allow your child to play music, their lives can change forever. Music doesn’t discriminate and will always bring people together. Music classes for kids offer the opportunity to meet new people and become friends. At Deeba's Daycare in Bellevue, WA, we specialize in quality music lessons, offering early education to children interested in playing an instrument.",
            img: musickids,
        },
    ];

    return (
        <Section title="Our Services" subtitle="Flexible options for busy families.">
            <div className="grid gap-6 sm:grid-cols-2">
                {items.map((x) => (
                    <div
                        key={x.t}
                        className="relative rounded-xl2 overflow-hidden shadow-card group transition-transform duration-700 ease-out"
                        style={{
                            backgroundImage: `url(${x.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            minHeight: "240px",
                        }}
                    >
                        {/* ✨ lighter overlay for text readability */}
                        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/60"></div>

                        {/* 🖼️ Zoom on hover/tap */}
                        <div
                            className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                            style={{
                                backgroundImage: `url(${x.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                zIndex: 0,
                            }}
                        />

                        {/* 💬 Text (glows on hover/tap) */}
                        {/* Foreground content */}
                        <div className="relative z-10 p-6 text-center text-white drop-shadow-[0_3px_1px_rgba(0,0,0,1)]">
                            <h3
                                className="
                  text-3xl font-extrabold text-white transition-all duration-500 
                  group-hover:text-glow-rainbow group-active:text-glow-rainbow
                "
                            >
                                {x.t}
                            </h3>
                            <p
                                className="text-lg text-white/95 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
                            >
                                {x.d}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
