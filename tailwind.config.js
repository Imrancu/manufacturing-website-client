module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#33d9b2",
          "secondary": "#34ace0",
          "accent": "#ffda79",
          "neutral": "#2c2c54",
          "base-100": "#ffffff",
          "info": "#34ace0",
          "success": "#706fd3",
          "warning": "#ff793f",
          "error": "#ff5252",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}