import { useState, useEffect, useCallback } from "react";
import Section from "../components/Section";
import Seo from "../components/Seo";
import { galleryPhotos } from "../content/gallery";

export default function Gallery() {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const nextImage = useCallback((e) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % galleryPhotos.length);
    }, []);

    const prevImage = useCallback((e) => {
        if (e) e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length);
    }, []);

    useEffect(() => {
        const handleKey = (e) => {
            if (selectedIndex === null) return;
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
            if (e.key === "Escape") setSelectedIndex(null);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [nextImage, prevImage, selectedIndex]);

    return (
        <>
            <Seo
                title="Gallery"
                description="Take a look at our daycare spaces, activities, and playful learning moments for children in Bellevue."
                path="/gallery"
            />
            <Section title="Gallery" subtitle="Smiles, crafts, and playtime moments.">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {galleryPhotos.map((photo, i) => (
                    <img
                        key={i}
                        src={photo.src}
                        alt={photo.alt}
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
                        src={galleryPhotos[selectedIndex].src}
                        alt={galleryPhotos[selectedIndex].alt}
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
        </>
    );
}
