/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-white": "hsl(0, 0%, 100%)",
        "tw-black": "hsl(0, 0%, 0%)",
        "tw-dark-gray": "hsl(0, 0%, 55%)",
        "tw-very-dark-gray": "hsl(0, 0%, 41%)",
      },
      backgroundImage: {
        "tw-bg-hero-mobile": "url(./assets/images/mobile/image-hero.jpg)",
        "tw-bg-hero-desktop": "url(./assets/images/desktop/image-hero.jpg)",
        "tw-bg-curiosity-mobile": "url(./assets/images/mobile/image-curiosity.jpg)",
        "tw-bg-curiosity-desktop": "url(./assets/images/desktop/image-curiosity.jpg)",
        "tw-bg-deep-earth-mobile": "url(./assets/images/mobile/image-deep-earth.jpg)",
        "tw-bg-deep-earth-desktop": "url(./assets/images/desktop/image-deep-earth.jpg)",
        "tw-bg-fisheye-mobile": "url(./assets/images/mobile/image-fisheye.jpg)",
        "tw-bg-fisheye-desktop": "url(./assets/images/desktop/image-fisheye.jpg)",
        "tw-bg-from-above-mobile": "url(./assets/images/mobile/image-from-above.jpg)",
        "tw-bg-from-above-desktop": "url(./assets/images/desktop/image-from-above.jpg)",
        "tw-bg-grid-mobile": "url(./assets/images/mobile/image-grid.jpg)",
        "tw-bg-grid-desktop": "url(./assets/images/desktop/image-grid.jpg)",
        "tw-bg-interactive-mobile": "url(./assets/images/mobile/image-interactive.jpg)",
        "tw-bg-interactive-desktop": "url(./assets/images/desktop/image-interactive.jpg)",
        "tw-bg-night-arcade-mobile": "url(./assets/images/mobile/image-night-arcade.jpg)",
        "tw-bg-night-arcade-desktop": "url(./assets/images/desktop/image-night-arcade.jpg)",
        "tw-bg-pocket-borealis-mobile": "url(./assets/images/mobile/image-pocket-borealis.jpg)",
        "tw-bg-pocket-borealis-desktop": "url(./assets/images/desktop/image-pocket-borealis.jpg)",
        "tw-bg-soccer-team-mobile": "url(./assets/images/mobile/image-soccer-team.jpg)",
        "tw-bg-soccer-team-desktop": "url(./assets/images/desktop/image-soccer-team.jpg)",
      }
    },
  },
  plugins: [],
}

