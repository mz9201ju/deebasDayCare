import { useEffect, useRef } from "react";
import cursorPng from "../assets/cursor.gif";

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

        let x = 0, y = 0;
        let targetX = 0, targetY = 0;

        // If you want perfect alignment, set this to 1.0
        const speed = 0.35;

        const onMove = (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };

        // Optional: snap on click/enter to avoid mismatch during fast moves
        const snap = () => { x = targetX; y = targetY; el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`; };

        const animate = () => {
            x += (targetX - x) * speed;
            y += (targetY - y) * speed;
            // Center the image under the cursor
            el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
            requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("mousedown", snap, { passive: true });
        window.addEventListener("mouseenter", snap, { passive: true });

        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mousedown", snap);
            window.removeEventListener("mouseenter", snap);
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
                width: 100,
                height: 100,
                // Center the bitmap at the mouse point
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
