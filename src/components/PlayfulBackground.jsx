import { useEffect, useState } from "react";

export default function PlayfulBackground() {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        // 🎨 Generate random floating toys / shapes
        const shapeTypes = [
            "balloon",
            "cube",
            "ball",
            "star",
            "heart",
            "teddy",
            "cloud",
            "kite",
            "rocket",
            "rainbow",
        ];

        const toys = Array.from({ length: 20 }).map((_, i) => {
            const size = 40 + Math.random() * 60;
            const left = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = 18 + Math.random() * 20;
            const color = `hsl(${Math.random() * 360}, 85%, 70%)`;
            const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];

            // Optional: add subtle 3D depth by random Z offset
            const depth = Math.random() * 200 - 100; // -100px to +100px
            const rotate = Math.random() * 360;

            return { id: i, size, left, delay, duration, color, type, depth, rotate };
        });

        setElements(toys);
    }, []);


    return (
        <div className="kids-bg">
            {/* 🌈 Animated gradient background */}
            <div className="animated-gradient" />

            {/* ☁️ Drifting clouds */}
            {[...Array(5)].map((_, i) => (
                <div
                    key={`cloud-${i}`}
                    className="cloud"
                    style={{
                        top: `${10 + Math.random() * 70}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${40 + Math.random() * 20}s`,
                    }}
                />
            ))}

            {/* 🌟 Twinkling stars */}
            {[...Array(40)].map((_, i) => (
                <div
                    key={`star-${i}`}
                    className="star"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}

            {/* 🎈 Floating toys & balloons */}
            {elements.map((el) => (
                <div
                    key={el.id}
                    className={`toy ${el.type}`}
                    style={{
                        width: el.size,
                        height: el.size,
                        left: `${el.left}%`,
                        backgroundColor: el.color,
                        animationDelay: `${el.delay}s`,
                        animationDuration: `${el.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}
