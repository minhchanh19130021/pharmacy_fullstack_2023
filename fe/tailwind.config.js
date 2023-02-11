/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
            },
            margin: {
                '16.66667%': '16.66667%',
            },
            screens: {
                'xs': '320px',
               
            },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
};
