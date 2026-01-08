/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#25f4af",
                "primary-dark": "#1bc489",
                "primary-hover": "#1ee09e",
                "background-light": "#f5f8f7",
                "background-dark": "#10221c",
                "surface-dark": "#162b24",
                "surface-highlight": "#1e362e",
                "surface-darker": "#0b1814",
            },
            fontFamily: {
                "display": ["Space Grotesk", "sans-serif"],
                "mono": ["Courier New", "monospace"],
            },
            borderRadius: {
                "DEFAULT": "0.375rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "full": "9999px"
            },
            boxShadow: {
                'neon': '0 0 5px theme("colors.primary"), 0 0 20px theme("colors.primary.DEFAULT / 0.2")',
            }
        },
    },
    plugins: [],
}
