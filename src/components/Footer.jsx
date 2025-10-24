import { SITE } from "../lib/config";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-brand-100 bg-brand-50/60 backdrop-blur">
            <div className="container mx-auto px-4 py-8 text-sm text-brand-700">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    {/* Copyright */}
                    <div>
                        © {year} {SITE.name}. All rights reserved.
                    </div>

                    {/* Address + Phone */}
                    <div className="space-y-1 select-none">
                        {/* 📍 Address → Opens Google Maps */}
                        <p
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center sm:justify-start gap-2 cursor-pointer hover:text-brand-700 transition"
                            onClick={() =>
                                window.open(
                                    "https://www.google.com/maps/@47.6093918,-122.1362333,3a,75y,168.69h,90t/data=!3m7!1e1!3m5!1sNun-tI9Txz7EgHf4cLQb0g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DNun-tI9Txz7EgHf4cLQb0g%26yaw%3D168.69!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D",
                                    "_blank"
                                )
                            }
                        >
                            <span>📍 15216 SE 1st St, Bellevue, WA 98007</span>
                        </p>
                        {/* 📞 Phone → Opens Dialer (mobile only) */}
                        <p
                            className="flex items-center justify-center sm:justify-start gap-2 cursor-pointer font-medium text-brand-600 hover:text-brand-700 transition"
                            onClick={(e) => {
                                e.stopPropagation(); // 🧠 stop parent click
                                const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
                                if (isMobile) {
                                    window.location.href = "tel:+12063311792";
                                } else {
                                    // optional: copy number or show tooltip
                                    alert("📞 To call, please use your phone device.");
                                }
                            }}
                        >
                            📞 <span>(206) 331-1792</span>
                        </p>
                        {/* Hours of Operation */}
                        <p className="mt-2 text-sm text-brand-700/90">
                            🕒 <span className="font-semibold">Hours: Mon–Fri 7 AM – 6 PM</span>
                        </p>
                        <p className="mt-2 text-sm text-brand-700/90">
                            🕒 <span className="font-semibold">Hours: Sat-Sun Closed</span>
                        </p>
                    </div>



                    {/* Tagline + Socials */}
                    <div className="flex items-center justify-center gap-3 opacity-80 text-sm">
                        <span>Made with ❤️ for happy kiddos.</span>

                        <a
                            href="https://www.facebook.com/deebasdaycare/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition"
                            aria-label="Facebook"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.5c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.3V12H18l-.4 3h-2.7v7A10 10 0 0 0 22 12z" />
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/deeba-qadri-33012935/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700 transition"
                            aria-label="LinkedIn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM0 8h5v16H0zM9 8h4.7v2.2h.1c.6-1.1 2-2.2 4.2-2.2 4.5 0 5.3 3 5.3 6.8V24h-5v-7.8c0-1.9 0-4.4-2.7-4.4-2.7 0-3.1 2.1-3.1 4.2V24H9z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
