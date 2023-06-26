/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                main: '#6ff3a4',
                lightColor: '#2d2f35',
                darkColor: '#282a30',
                purple: '#6672ed',
                orange: '#eb8a2f',
                blue: '#53b8e7',

                lightText: '#9e9e9e',
                darkText: '#2d2e32',
            },
            fontFamily: {
                sans: ['Inconsolata', 'monospace'],
            },
            screens: {
                sm: '480px',
                lg: '850px',
                xl: '1024px',
            },
            keyframes: {
                fade: {
                    from: { opacity: 0.3 },
                    to: { opacity: 1 },
                },
            },
        },
    },
    plugins: [
        require('@catppuccin/tailwindcss')({
            prefix: 'ctp',
            defaultFlavour: 'macchiato',
        }),
    ],
};
