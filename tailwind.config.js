/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif']
      },
      animation: {
        'tech-bar': 'techBar 1.5s ease-out forwards'
      },
      keyframes: {
        techBar: {
          '0%': {
            width: '0%',
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        }
      },
      transitionTimingFunction: {
        'tech-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth-ease': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }
    }
  },
  plugins: []
}
