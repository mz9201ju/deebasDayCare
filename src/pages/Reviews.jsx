import { useState, useEffect } from "react";
import Section from "../components/Section";
import { Star } from "lucide-react";

// ✅ Change this to your deployed Worker URL
const API_URL = "https://gh-ai-proxy.omer-mnsu.workers.dev/reviews";

export default function Reviews() {
    // State for reviews list
    const [reviews, setReviews] = useState([]);
    // Form data
    const [form, setForm] = useState({ name: "", text: "", rating: 5 });
    // Loading state
    const [loading, setLoading] = useState(false);

    /* =====================================================
       🧠 Fetch reviews from KV (on mount)
       ===================================================== */
    useEffect(() => {
        async function loadReviews() {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                if (data.ok && data.reviews) setReviews(data.reviews);
            } catch (err) {
                console.error("❌ Error loading reviews:", err);
            }
        }
        loadReviews();
    }, []);

    /* =====================================================
       💾 Handle submit
       ===================================================== */
    async function handleSubmit(e) {
        e.preventDefault();
        if (!form.name || !form.text) return alert("Please fill in all fields");

        setLoading(true);
        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();

            if (data.ok) {
                // Add new review instantly
                setReviews((prev) => [data.review, ...prev]);
                setForm({ name: "", text: "", rating: 5 });
            } else {
                alert("Error saving review");
            }
        } catch (err) {
            console.error("❌ Error submitting review:", err);
        } finally {
            setLoading(false);
        }
    }

    /* =====================================================
       🎨 Render
       ===================================================== */
    return (
        <Section title="Parent Reviews" subtitle="What families say about us 💕">
            {/* 🌟 Reviews List */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {reviews.map((r, i) => (
                    <div
                        key={i}
                        className="
              relative bg-gradient-to-br from-brand-100 to-brand-200
              rounded-2xl shadow-lg p-6 text-center hover:scale-[1.03]
              transition-transform duration-500 ease-out
            "
                    >
                        {/* ⭐ Star Rating */}
                        <div className="flex justify-center mb-4">
                            {Array.from({ length: r.rating }).map((_, idx) => (
                                <Star
                                    key={idx}
                                    className="text-yellow-400 fill-yellow-400 w-5 h-5 mx-[1px] star-glow"
                                />
                            ))}
                        </div>

                        {/* 💬 Review Text */}
                        <p className="text-brand-900 leading-relaxed italic">
                            “{r.text}”
                        </p>

                        {/* 👩‍👧 Reviewer */}
                        <footer className="mt-4 text-brand-700 font-semibold">
                            — {r.name || "Anonymous"}
                        </footer>

                        {/* 🌈 Animated glow border */}
                        <span
                            className="
                absolute inset-0 rounded-2xl border-2 border-transparent
                group-hover:border-brand-400 transition-all
              "
                            style={{
                                boxShadow:
                                    "0 0 12px rgba(168,85,247,0.3), 0 0 24px rgba(147,51,234,0.2)",
                            }}
                        ></span>
                    </div>
                ))}
            </div>

            {/* ✍️ Add Review Form */}
            <form
                onSubmit={handleSubmit}
                className="mt-12 max-w-md mx-auto bg-brand-50 p-6 rounded-2xl shadow-lg"
            >
                <h3 className="text-brand-800 font-bold mb-4 text-lg">
                    Leave a Review ❤️
                </h3>

                <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full mb-3 px-4 py-2 rounded-lg border border-brand-200"
                />

                <textarea
                    placeholder="Write your experience..."
                    value={form.text}
                    onChange={(e) => setForm({ ...form, text: e.target.value })}
                    className="w-full mb-3 px-4 py-2 rounded-lg border border-brand-200 h-24"
                />

                <label className="block mb-2 text-brand-700 text-sm">
                    Rating:
                </label>
                <div className="flex justify-center mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            onClick={() => setForm({ ...form, rating: i + 1 })}
                            className={`w-6 h-6 cursor-pointer ${i < form.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                                }`}
                        />
                    ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-3">
                    <button
                        disabled={loading}
                        className="flex-1 px-6 py-2 rounded-full bg-brand-500 text-white font-semibold
               shadow-lg hover:bg-brand-600 active:scale-95 transition"
                    >
                        {loading ? "Saving..." : "Submit Review"}
                    </button>

                    <button
                        type="button"
                        onClick={() => window.open("https://www.yelp.com/biz/deebas-daycare-bellevue", "_blank")}
                        className="flex-1 px-6 py-2 rounded-full bg-brand-100 text-brand-700 font-semibold
               shadow-lg hover:bg-brand-200 active:scale-95 transition"
                    >
                        Leave a Yelp Review ❤️
                    </button>

                    <button
                        type="button"
                        onClick={() => window.open("https://www.google.com/search?q=deeba%27s+daycare+bellevue+reviews&sca_esv=6e20e6c2949c4c68&sxsrf=AE3TifNoaOQXCOhmXQ8FZQnkAvvH2sz60Q%3A1760774279599&source=hp&ei=h0jzaJf2Iaup0PEP-KmzyQw&iflsig=AOw8s4IAAAAAaPNWl4ZGK9FGwpmJpbXoX7FaVZ-aBnFZ&oq=deeb&gs_lp=Egdnd3Mtd2l6IgRkZWViKgIIADIEECMYJzIIEC4YgAQYsQMyCxAAGIAEGLEDGIMBMggQABiABBixAzIIEC4YgAQYsQMyCBAuGIAEGLEDMggQABiABBixAzIFEAAYgAQyDhAAGIAEGLEDGIMBGIoFMgUQABiABEj8FFC9AljaBnABeACQAQCYAX-gAdoDqgEDMC40uAEDyAEA-AEBmAIFoAL0A6gCCsICBxAjGCcY6gLCAg0QIxiABBgnGIoFGOoCwgILEC4YgAQYsQMYgwHCAg4QLhiABBixAxjRAxjHAcICDhAuGIAEGLEDGIMBGIoFwgIREC4YgAQYsQMY0QMYgwEYxwHCAgsQLhiABBjRAxjHAcICCxAuGIAEGLEDGNQCwgIFEC4YgATCAg4QLhiABBjHARiOBRivAcICCxAuGIAEGMcBGK8BmAMJ8QUxovdUQ8W5G5IHAzEuNKAHmEayBwMwLjS4B-oDwgcFMC4zLjLIBxE&sclient=gws-wiz#lrd=0x54906df14668864f:0xea90a14206bf5646,1,,,,", "_blank")}
                        className="flex-1 px-6 py-2 rounded-full bg-brand-100 text-brand-700 font-semibold
               shadow-lg hover:bg-brand-200 active:scale-95 transition"
                    >
                        Leave a Google Review ❤️
                    </button>
                </div>
            </form>
        </Section>
    );
}
