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
        'catpik-primary-dark': 'bg-natural-600',
        'catpik-secondary-dark': 'bg-blue-50',
        'catpik-tertiary-dark': 'bg-white',
        'catpik-text-dark': 'neutral-600',
      },
    },
  },
  plugins: [],
}

