/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'catpik-primary': 'white',
        'catpik-secondary': '#dbeafe',
        'catpik-tertiary': '#3b82f6',
        'catpik-text': '#171717',
        'catpik-primary-dark': '#1f2937',
        'catpik-secondary-dark': '#dbeafe',
        'catpik-tertiary-dark': '#3b82f6',
        'catpik-text-dark': '#d4d4d4',
      },
    },
  },
  plugins: [],
}

