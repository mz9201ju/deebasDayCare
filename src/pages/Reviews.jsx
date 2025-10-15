import Section from "../components/Section";
import { Star } from "lucide-react"; // optional icon for stars

export default function Reviews() {
    const reviews = [
        {
            name: "Jennifer D.",
            text: "My 3 children went to Deebas Daycare over the past 16yrs. \
            They are like family to us. They always took excellent care of my \
            children and my children love them. They are wonderful people and an \
            amazing Daycare. I highly recommend Deebas Daycare!",
            rating: 5,
        },
        {
            name: "",
            text: "We are very grateful for the care and support provided to our son by Deeba’s daycare. He was there from the age of 4 months until he started kindergarten. They did a fantastic job of preparing him for schoool.",
            rating: 5,
        },
        {
            name: "",
            text: "I highly recommend Deeba’s daycare. My son loves it there. They are loving and provide exceptional care!",
            rating: 5,
        },
    ];

    return (
        <Section
            title="Parent Reviews"
            subtitle="What families say about us 💕"
        >
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
                            — {r.name}
                        </footer>

                        {/* 🌈 Animated glow border (cute effect) */}
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

            {/* 💫 Call-to-action footer */}
            <div className="mt-12 text-center">
                <p className="text-brand-700 text-lg">
                    Have a wonderful experience with us?
                </p>
                <a
                    href="https://www.yelp.com/biz/deebas-daycare-bellevue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
    inline-block mt-3 px-6 py-2 rounded-full bg-brand-500 text-white font-semibold
    shadow-lg hover:bg-brand-600 active:scale-95 transition
  "
                >
                    Leave a Review ❤️
                </a>

            </div>
        </Section>
    );
}
