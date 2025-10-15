import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV, SITE } from "../lib/config";
import { cx } from "../lib/ui";
import { Menu, X } from "lucide-react"; // make sure to npm i lucide-react

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 bg-brand-50/70 backdrop-blur border-b border-brand-100">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                {/* Brand */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-brand-700">
                        {SITE.name}
                    </span>
                    <span className="sm:inline pill">{SITE.tagline}</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden sm:flex items-center gap-2 sm:gap-4">
                    {NAV.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                cx(
                                    "px-3 py-1.5 rounded-full text-sm font-medium transition",
                                    isActive
                                        ? "bg-brand-600 text-white shadow"
                                        : "text-brand-700 hover:bg-brand-200"
                                )
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMenuOpen((v) => !v)}
                    className="sm:hidden p-2 rounded-lg text-brand-700 hover:bg-brand-200 transition"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="sm:hidden bg-brand-50/95 border-t border-brand-100 shadow-inner">
                    <nav className="flex flex-col items-center py-3 space-y-2">
                        {NAV.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                onClick={() => setMenuOpen(false)} // close menu on click
                                className={({ isActive }) =>
                                    cx(
                                        "w-full text-center py-2 rounded-md text-sm font-medium transition",
                                        isActive
                                            ? "bg-brand-600 text-white"
                                            : "text-brand-700 hover:bg-brand-200"
                                    )
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
