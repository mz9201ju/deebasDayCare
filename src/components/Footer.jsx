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
                    {/* Address + Phone */}
                    <div className="space-y-1 select-none">
                        {/* 📍 Address → Opens Google Maps */}
                        <p
                            className="flex items-center justify-center sm:justify-start gap-2 cursor-pointer hover:text-brand-700 transition"
                            onClick={() =>
                                window.open(
                                    "https://www.google.com/maps/place/15219+SE+1st+St,+Bellevue,+WA+98007",
                                    "_blank"
                                )
                            }
                        >
                            📍 <span>15219 SE 1st St, Bellevue, WA 98007</span>
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
                    </div>



                    {/* Tagline */}
                    <div className="opacity-70">Made with ❤️ for happy kiddos.</div>
                </div>
            </div>
        </footer>
    );
}
