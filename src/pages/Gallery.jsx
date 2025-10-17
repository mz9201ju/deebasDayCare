import { useState, useEffect } from "react";
import Section from "../components/Section";
import image1 from "../assets/daycare1.jpg";
import image2 from "../assets/daycare2.jpg";

export default function Gallery() {
    const photos = [
        { src: image1, alt: "Kids playing together" },
        { src: image2, alt: "Kids reading books" },
    ];

    // State for lightbox
    const [selectedIndex, setSelectedIndex] = useState(null);

    // Keyboard navigation (← → Esc)
    useEffect(() => {
        const handleKey = (e) => {
            if (selectedIndex === null) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") setSelectedIndex(null);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selectedIndex]);

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % photos.length);
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    return (
        <Section title="Gallery" subtitle="Smiles, crafts, and playtime moments.">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {photos.map((p, i) => (
                    <img
                        key={i}
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        onClick={() => setSelectedIndex(i)} // open full image
                        className="w-full h-48 object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-[1.02] transition-transform"
                    />
                ))}
            </div>

            {/* ✅ Lightbox overlay */}
            {selectedIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelectedIndex(null)}
                >
                    <img
                        src={photos[selectedIndex].src}
                        alt={photos[selectedIndex].alt}
                        className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl border border-white/20"
                    />

                    {/* Close button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedIndex(null);
                        }}
                        className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-brand-400"
                    >
                        ✕
                    </button>

                    {/* Prev / Next arrows */}
                    <button
                        onClick={prevImage}
                        className="absolute left-6 text-white text-4xl font-bold hover:text-brand-400"
                    >
                        ‹
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-6 text-white text-4xl font-bold hover:text-brand-400"
                    >
                        ›
                    </button>
                </div>
            )}
        </Section>
    );
}
