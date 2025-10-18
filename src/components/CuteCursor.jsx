import { useEffect, useRef } from "react";
import cursorPng from "../assets/cursor.gif";

export default function CuteCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const el = cursorRef.current;
        if (!el) return;

        let x = 0,
            y = 0;
        let targetX = 0,
            targetY = 0;
        const speed = 0.35;

        // ✅ Handle both mouse & touch input
        const onMove = (e) => {
            if (e.touches && e.touches.length > 0) {
                // Touch event
                targetX = e.touches[0].clientX;
                targetY = e.touches[0].clientY;
            } else {
                // Mouse event
                targetX = e.clientX;
                targetY = e.clientY;
            }
        };

        const snap = () => {
            x = targetX;
            y = targetY;
            el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        };

        const animate = () => {
            x += (targetX - x) * speed;
            y += (targetY - y) * speed;
            el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
            requestAnimationFrame(animate);
        };

        // ✅ Support mouse *and* touch input
        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("touchmove", onMove, { passive: true });
        window.addEventListener("mousedown", snap, { passive: true });
        window.addEventListener("touchstart", snap, { passive: true });

        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("touchmove", onMove);
            window.removeEventListener("mousedown", snap);
            window.removeEventListener("touchstart", snap);
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
                width: 80,
                height: 80,
                transform: "translate3d(0,0,0) translate(-50%, -50%)",
                pointerEvents: "none",
                zIndex: 9999,
                opacity: 1,
                filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.25))",
                willChange: "transform",
            }}
        />
    );
}
