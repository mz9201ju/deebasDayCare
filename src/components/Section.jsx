// Simple, reusable page section wrapper with consistent spacing
export default function Section({ title, subtitle, children }) {
    return (
        <section className="mb-12">
            {title && (
                <h2 className="text-3xl font-extrabold text-brand-800 mb-2">{title}</h2>
            )}
            {subtitle && (
                <p className="text-brand-700/80 mb-6 max-w-2xl">{subtitle}</p>
            )}
            <div className="grid gap-6">{children}</div>
        </section>
    )
}