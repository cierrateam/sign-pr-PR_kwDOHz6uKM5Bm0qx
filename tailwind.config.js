/** @type {import('tailwindcss').Config} */

module.exports = {
    mode: 'jit',
    content: [
        './assets/styles/*.css',
        './components/*.{vue,js}',
        './components/**/*.{vue,js}',
        './pages/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './*.{vue,js,ts}',
        './nuxt.config.{js,ts}',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins'],
                openSans: ['Open Sans']
            },
            colors: {
                primary: '#01182F',
                secondary: '#F35627',
                lightblue: '#D9E2EC',
                darkblue: '#9FB3C8',
                secondaryVariant: '#FFD0B5',
                primaryVariant: '#486581',
                white: '#ffffff',
                blue: '#BCCCDC',
                lightgrey: '#F0F4F8',
                dark: '#243B53',
                red: '#D2042D',
                secondaryVariant2: '#FDF3ED',
                blueVariant : '#829AB1'
            },
            spacing: {
                // 21: '5.25rem', //  84px
            },
            opacity: {
                // 60: '0.6',
            },
            letterSpacing: {
                wide: '0.02em',
                wider: '0.03em',
            },
            lineHeight: {
                // 6.5: '1.625rem', // 26px
            },
        },
    },
    plugins: [],
}
