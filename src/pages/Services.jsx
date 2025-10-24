import Section from "../components/Section";
import yougaclass from "../assets/yougaclass.jpg";
import toddlercare from "../assets/toddlercare.jpg";
import musickids from "../assets/musickids.jpg";
import spanishclass from "../assets/spanishclass.jpg";
import gymclass from "../assets/gymclass.jpg";
import danceclass from "../assets/danceclass.jpg";

export default function Services() {
    const items = [
        {
            t: "Toddler Care",
            d: `Our toddler care program provides a fun, supportive environment where your child can explore, grow, and gain independence. Experienced and attentive caregivers guide each toddler through their developmental milestones with patience, encouragement, and love.
            
            Engaging activities like story time, sensory play, music, art, and outdoor exploration help build language, motor, and social-emotional skills. We partner closely with families, sharing daily updates on your child’s routines, meals, moods, and progress, so you always feel connected to their day.`,
            img: toddlercare,
        },
        {
            t: "Spanish Classes",
            d: `Our Spanish classes introduce toddlers and preschoolers to a new language in a fun, playful way through music, movement, games, and storytelling. Led by a dedicated Spanish instructor, these weekly classes help children build basic vocabulary, improve listening skills, and gain early exposure to different cultures.
            
            With a focus on repetition and everyday language, our Spanish program supports memory, communication, and curiosity—laying a strong foundation for bilingual learning in the future.`,
            img: spanishclass,
        },
        {
            t: "Music Classes",
            d: `Our music classes are filled with joyful sounds, movement, and creativity that get kids excited to sing, clap, and explore rhythm.
            
            Led by a talented music instructor every Friday, each class is themed around the seasons and holidays, helping children connect music to the world around them.
            
            Music supports early brain development, boosts memory, and encourages self-expression—making it one of the happiest and most enriching parts of our week!`,
            img: musickids,
        },
        {
            t: "Yoga Classes",
            d: `Every Tuesday, we welcome a skilled yoga instructor to lead calming, playful yoga sessions designed just for kids. 
            
            The classes loosely follow seasonal themes, using imaginative poses like “falling leaves” or “stretching sunflowers” to keep little ones engaged.
            
            Yoga helps children build strength, balance, and focus, while also promoting mindfulness and emotional regulation—all in a fun, lighthearted setting.`,
            img: yougaclass,
        },
        {
            t: "Gym Classes",
            d: `Every Wednesday, we bring in a specialized gym teacher to lead high-energy classes that get kids moving, stretching, and building strength.
            
            Each class is themed around the seasons and holidays—think pumpkin crawls in fall or egg-hunt relays in spring—making fitness fun and fresh every time.
            
            These classes support motor skill development, teamwork, and confidence, helping children stay active and engaged in a playful, supportive setting.`,
            img: gymclass,
        },
        {
            t: "Dance Classes",
            d: `Our dance classes take place every Thursday and are all about movement, rhythm, and fun!
            
            Led by a vibrant instructor, kids explore different dance styles through playful routines that follow seasonal themes—like snowflake dances in winter or sunshine shuffles in summer.
            
            Dance helps little ones improve coordination, balance, and confidence, all while expressing themselves and having a great time with their friends.`,
            img: danceclass,
        },
    ];

    return (
        <Section title="Our Services" subtitle="Flexible options for busy families.">
            <div className="grid gap-6 sm:grid-cols-2">
                {items.map((x) => (
                    <div
                        key={x.t}
                        className="relative rounded-2xl overflow-hidden shadow-card group transition-transform duration-700 ease-out"
                        style={{
                            minHeight: "240px",
                        }}
                    >
                        {/* 🌅 Background image with smooth fade */}
                        <div
                            className="absolute inset-0 transition-transform duration-700 group-hover:scale-110 group-active:scale-110"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${x.img})`,
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
                                {x.t}
                            </h3>
                            <p className="whitespace-pre-line text-lg text-white/90 leading-relaxed mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                                {x.d}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>

    );
}
