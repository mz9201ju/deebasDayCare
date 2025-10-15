/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            // Central theme tokens map to CSS variables defined in src/index.css
            colors: {
                brand: {
                    50: 'rgb(var(--color-brand-50) / <alpha-value>)',
                    100: 'rgb(var(--color-brand-100) / <alpha-value>)',
                    200: 'rgb(var(--color-brand-200) / <alpha-value>)',
                    300: 'rgb(var(--color-brand-300) / <alpha-value>)',
                    400: 'rgb(var(--color-brand-400) / <alpha-value>)',
                    500: 'rgb(var(--color-brand-500) / <alpha-value>)',
                    600: 'rgb(var(--color-brand-600) / <alpha-value>)',
                    700: 'rgb(var(--color-brand-700) / <alpha-value>)',
                    800: 'rgb(var(--color-brand-800) / <alpha-value>)',
                    900: 'rgb(var(--color-brand-900) / <alpha-value>)',
                },
            },
            fontFamily: {
                display: ['"Baloo 2"', 'system-ui', 'ui-sans-serif', 'sans-serif'],
                body: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
            },
            boxShadow: {
                card: '0 10px 30px -12px rgba(0,0,0,0.15)',
            },
            borderRadius: {
                xl2: '1.25rem',
            }
        },
    },
    plugins: [],
}