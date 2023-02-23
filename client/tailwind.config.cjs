/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "space-bg": "url('/src/assets/space.jpg')",
            },
        },
    },
    plugins: [],
};
