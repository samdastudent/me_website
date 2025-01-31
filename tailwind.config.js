js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            maxWidth: {
                '8xl': '1440px'
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Clash Display', 'sans-serif'],
            },
            fontSize: {
                'fluid-1': 'clamp(3rem, 5vw, 4rem)',
                'fluid-2': 'clamp(2.5rem, 4vw, 3rem)',
                'fluid-3': 'clamp(2rem, 3vw, 2.5rem)',
                'fluid-4': 'clamp(1.5rem, 2vw, 2rem)',
            }
        },
    },
    plugins: [],
}