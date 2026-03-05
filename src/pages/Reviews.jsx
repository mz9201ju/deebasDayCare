import { useState, useEffect } from "react";
import Section from "../components/Section";
import { Star } from "lucide-react";
import Seo from "../components/Seo";
import { generateCaptcha } from "../lib/captcha";
import { createReview, fetchReviews } from "../services/reviewsService";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [form, setForm] = useState({ name: "", text: "", rating: 5 });
    const [loading, setLoading] = useState(false);
    const [captcha, setCaptcha] = useState("");
    const [userCaptcha, setUserCaptcha] = useState("");
    const [isCaptchaValid, setIsCaptchaValid] = useState(false);

    useEffect(() => {
        async function loadReviews() {
            try {
                const loadedReviews = await fetchReviews();
                setReviews(loadedReviews);
            } catch (err) {
                console.error("Error loading reviews:", err);
            }
        }

        loadReviews();
        setCaptcha(generateCaptcha());
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!form.name || !form.text) {
            alert("Please fill in all fields");
            return;
        }

        if (!isCaptchaValid) {
            alert("Please verify the CAPTCHA before submitting your review.");
            return;
        }

        setLoading(true);
        try {
            const savedReview = await createReview(form);
            setReviews((prev) => [savedReview, ...prev]);
            setForm({ name: "", text: "", rating: 5 });
            setCaptcha(generateCaptcha());
            setUserCaptcha("");
            setIsCaptchaValid(false);
        } catch (err) {
            console.error("Error submitting review:", err);
            alert("Error saving review");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Seo
                title="Reviews"
                description="Read family testimonials and leave a review for Deeba's Daycare in Bellevue."
                path="/reviews"
            />
            <Section title="Parent Reviews" subtitle="What families say about us 💕">
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

                            {/* 🌈 Glow border */}
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

                <div className="mb-4 text-center">
                    <div className="flex justify-center items-center gap-3">
                        <div
                            className="px-4 py-2 bg-brand-200 rounded-lg font-mono tracking-widest text-brand-800 select-none shadow-md"
                        >
                            {captcha}
                        </div>
                        <button
                            type="button"
                            className="px-3 py-1 bg-brand-100 text-brand-700 rounded-lg text-sm hover:bg-brand-200 transition"
                            onClick={() => setCaptcha(generateCaptcha())}
                        >
                            🔄 Refresh
                        </button>
                    </div>

                    <input
                        type="text"
                        placeholder="Enter above text"
                        value={userCaptcha}
                        onChange={(e) =>
                            setUserCaptcha(e.target.value.toUpperCase())
                        }
                        className="mt-2 w-full px-4 py-2 rounded-lg border border-brand-200 text-center"
                    />

                    <button
                        type="button"
                        onClick={() => {
                            if (userCaptcha === captcha) {
                                setIsCaptchaValid(true);
                                alert("✅ CAPTCHA verified!");
                            } else {
                                setIsCaptchaValid(false);
                                alert("❌ CAPTCHA incorrect, please try again.");
                            }
                        }}
                        className="mt-2 px-4 py-1 rounded-full bg-brand-500 text-white font-semibold shadow-md hover:bg-brand-600 transition"
                    >
                        Verify
                    </button>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-3">
                    <button
                        disabled={loading || !isCaptchaValid}
                        className={`flex-1 px-6 py-2 rounded-full font-semibold shadow-lg active:scale-95 transition
            ${loading || !isCaptchaValid
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-brand-500 text-white hover:bg-brand-600"
                            }`}
                    >
                        {loading ? "Saving..." : "Submit Review"}
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            window.open(
                                "https://www.yelp.com/biz/deebas-daycare-bellevue",
                                "_blank"
                            )
                        }
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-[#d32323] text-white font-semibold shadow-lg hover:bg-[#b71c1c] active:scale-95 transition"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path d="M20.74 14.74c.47.47.47 1.22 0 1.69l-3.54 3.54a1.2 1.2 0 0 1-1.69 0l-2.73-2.73a1.2 1.2 0 0 1 .3-1.95l6.02-2.64a1.2 1.2 0 0 1 1.64.09ZM9.69 14.4l2.64 6.02a1.2 1.2 0 0 1-1.95 1.3L6.65 18.8a1.2 1.2 0 0 1 0-1.69l2.43-2.43a1.2 1.2 0 0 1 .61-.28Zm1.27-11.87 2.43 6.02a1.2 1.2 0 0 1-1.95 1.3L6.65 8.8a1.2 1.2 0 0 1 0-1.69l2.43-2.43a1.2 1.2 0 0 1 1.88.45Zm9.55 5.3-6.02 2.64a1.2 1.2 0 0 1-1.95-.3L10.54 7.4a1.2 1.2 0 0 1 1.95-1.3l6.02 2.64a1.2 1.2 0 0 1 .09 1.64ZM4.8 9.69l6.02 2.64a1.2 1.2 0 0 1 .3 1.95L8.8 17.35a1.2 1.2 0 0 1-1.69 0L3.57 13.8a1.2 1.2 0 0 1 0-1.69l1.23-1.23Z" />
                        </svg>
                        Yelp Review
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            window.open(
                                "https://www.google.com/search?q=deeba%27s+daycare+bellevue+reviews#lrd=0x54906df14668864f:0xea90a14206bf5646,1,,,,",
                                "_blank"
                            )
                        }
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white text-[#4285F4] font-semibold border border-gray-300 shadow-lg hover:bg-gray-100 active:scale-95 transition"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-.9 2.4-2 3.1v2.6h3.2c1.9-1.7 3-4.2 3-7 0-.6-.1-1.3-.2-1.9H12z" />
                            <path fill="#34A853" d="M6.6 14.4l-.9.7-2.6 2C4.8 20 8.1 22 12 22c2.4 0 4.4-.8 5.9-2.2l-3.2-2.6c-.9.6-2.1 1-2.7 1-2.1 0-3.9-1.4-4.5-3.3l-1-.5z" />
                            <path fill="#FBBC05" d="M3.1 8.7A9 9 0 0 0 3 12c0 1.1.2 2.1.6 3l3-2.4a5.4 5.4 0 0 1-.3-1.6c0-.6.1-1.1.3-1.6L3.1 8.7z" />
                            <path fill="#4285F4" d="M12 5.1c1.3 0 2.5.4 3.4 1.2l2.5-2.5C16.4 2.4 14.4 1.7 12 1.7 8.1 1.7 4.8 3.8 3.1 7l3.3 2.6c.6-1.9 2.4-3.3 4.5-3.3Z" />
                        </svg>
                        Google Review
                    </button>
                </div>

            </form>
            </Section>
        </>
    );
}
