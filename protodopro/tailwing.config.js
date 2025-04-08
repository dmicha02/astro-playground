// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    ],
    theme: {
      extend: {colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      }},
    },
    plugins: [require("daisyui")],
    daisyui: {
      themes: ["light", "dark", "autumn", "luxury"], // add your preferred themes
    },
  }