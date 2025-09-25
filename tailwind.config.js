/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        'black': '#1A2434',
        'light-purple': '#84A2FA',
        'deep-purple': '#486BF2',
        'dark-purple': '#1B40B4',
        'off-white': '#F9FCFE'
      }, padding: {
        'padding-inline': 'var(--padding-inline)',
      },
      // fontSize: {
      //   'page-heading': 'var(--page-heading)',
      //   'section-heading': 'var(--section-heading)',
      // },
    },
  },
  plugins: [],
};
