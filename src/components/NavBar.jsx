import { Link, NavLink } from 'react-router-dom'
import { NAV, SITE } from '../lib/config'
import { cx } from '../lib/ui'


export default function NavBar() {
    return (
        <header className="sticky top-0 z-40 bg-brand-50/70 backdrop-blur border-b border-brand-100">
            <div className="container mx-auto flex items-center justify-between px-4 py-3">
                <Link to="/" className="flex items-center gap-2">
                    <span className="text-2xl font-extrabold text-brand-700">{SITE.name}</span>
                    <span className="hidden sm:inline pill">{SITE.tagline}</span>
                </Link>
                <nav className="flex items-center gap-2 sm:gap-4">
                    {NAV.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                cx(
                                    'px-3 py-1.5 rounded-full text-sm font-medium transition',
                                    isActive
                                        ? 'bg-brand-600 text-white shadow'
                                        : 'text-brand-700 hover:bg-brand-200'
                                )
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    )
}