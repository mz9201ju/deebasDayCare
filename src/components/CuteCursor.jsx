import { useEffect, useRef } from "react";
import cursorPng from "../assets/cursor.png";

export default function CuteCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const el = cursorRef.current;
        if (!el) return;

        // Hide on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            el.style.display = "none";
            return;
        }

        let x = 0;
        let y = 0;
        let targetX = 0;
        let targetY = 0;

        const speed = 0.2;

        const onMove = (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        const animate = () => {
            x += (targetX - x) * speed;
            y += (targetY - y) * speed;
            el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMove);
        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMove);
        };
    }, []);

    return (
        <img
            ref={cursorRef}
            src={cursorPng}
            alt="cursor"
            style={{
                position: "fixed",
                left: 0,
                top: 0,
                width: 32,
                height: 32,
                transform: "translate3d(0,0,0)",
                pointerEvents: "none",
                zIndex: 9999,
                opacity: 1,
                filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))",
            }}
        />
    );
}
