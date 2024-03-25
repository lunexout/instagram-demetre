/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: 'rgb(38,38,38)',
      primary: 'rgb(0,149,246)',
      secondary: 'rgb(168,168,168)',
      'secondary-hover': 'rgb(242,242,242)',
      'secondary-dark': 'rgb(126,126,126)',
      divider: 'rgb(219,219,219)',
      link: 'rgb(38,79,124)',
      paper: 'white',
      error: 'rgb(237,76,88)',
      'modal-background': 'rgb(25,25,25)',
      gray: 'rgb(115, 115, 115)'
    },
    extend: {}
  },
  screens: {
    tablet: '640px',
    // => @media (min-width: 640px) { ... }
    laptop: '1024px',
    // => @media (min-width: 1024px) { ... }
    desktop: '1280px'
    // => @media (min-width: 1280px) { ... }
  },
  plugins: []
}
