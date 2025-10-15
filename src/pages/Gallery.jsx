import { useState } from 'react'
import Section from '../components/Section'
import image1 from "../assets/daycare1.jpg"
import image2 from "../assets/daycare2.jpg"

export default function Gallery() {
    const photos = [
        { src: image1, alt: 'Kids playing together' },
        { src: image2, alt: 'Kids playing together' },
    ]

    // State for lightbox
    const [selected, setSelected] = useState(null)

    return (
        <Section title="Gallery" subtitle="Smiles, crafts, and playtime moments.">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {photos.map((p, i) => (
                    <img
                        key={i}
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        onClick={() => setSelected(p.src)} // open full image
                        className="w-full h-48 object-cover rounded-2xl shadow-lg cursor-pointer hover:scale-[1.02] transition-transform"
                    />
                ))}
            </div>

            {/* ✅ Lightbox overlay */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
                    onClick={() => setSelected(null)}
                >
                    <img
                        src={selected}
                        alt="Full size"
                        className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl border border-white/20"
                    />
                    <button
                        onClick={() => setSelected(null)}
                        className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-brand-400"
                    >
                        ✕
                    </button>
                </div>
            )}
        </Section>
    )
}
