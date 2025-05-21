// tailwind.config.js
const themes = require("daisyui/src/theming/themes");
module.exports = {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    ],
    theme: {
      extend: {
        backgroundOpacity: ['active'],
        colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "customcolor1": "var(--customcolor1)"
      }},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
              
               { light: {
                  ...themes.light,
                  "--customcolor1": "#499380"
                }},
                {dark: {
                  ...themes.dark,
                  "--customcolor1": "#499380"
                }},
              {autumn:{
                ...themes.autumn,
                "--customcolor1": "#499380"
              }},
              {luxury:{
                ...themes.luxury,
                "--customcolor1": "#499380"
              }}
              ], // add your preferred themes
    },
  }