import { useMemo } from "react";

export default function PlayfulBackground() {
    const clouds = useMemo(
        () =>
            Array.from({ length: 5 }).map((_, i) => ({
                id: `cloud-${i}`,
                top: `${10 + Math.random() * 70}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${40 + Math.random() * 20}s`,
            })),
        []
    );

    const stars = useMemo(
        () =>
            Array.from({ length: 40 }).map((_, i) => ({
                id: `star-${i}`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
            })),
        []
    );

    const toys = useMemo(() => {
        const shapeTypes = ["balloon", "cube", "ball", "teddy"];

        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            size: 40 + Math.random() * 60,
            left: Math.random() * 100,
            delay: Math.random() * 15,
            duration: 18 + Math.random() * 20,
            color: `hsl(${Math.random() * 360}, 85%, 70%)`,
            type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        }));
    }, []);


    return (
        <div className="kids-bg">
            <div className="animated-gradient" />

            {clouds.map((cloud) => (
                <div
                    key={cloud.id}
                    className="cloud"
                    style={{
                        top: cloud.top,
                        left: cloud.left,
                        animationDelay: cloud.animationDelay,
                        animationDuration: cloud.animationDuration,
                    }}
                />
            ))}

            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDelay: star.animationDelay,
                    }}
                />
            ))}

            {toys.map((toy) => (
                <div
                    key={toy.id}
                    className={`toy ${toy.type}`}
                    style={{
                        width: toy.size,
                        height: toy.size,
                        left: `${toy.left}%`,
                        backgroundColor: toy.color,
                        animationDelay: `${toy.delay}s`,
                        animationDuration: `${toy.duration}s`,
                    }}
                />
            ))}
        </div>
    );
}
