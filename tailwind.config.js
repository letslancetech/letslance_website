/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        200: "2",
      },
      keyframes: {
        floatX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" }, // subtle right shift
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(-10px) translateX(-5px)",
          },
        },
        "fade-float": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-10px) translateX(-5px)",
          },
        },
        "float-x": {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "50%": {
            transform: "translateX(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
        },
      },
      animation: {
        "float-slow": "float 3s ease-in-out infinite",
        "fade-float": "fade-float 3s ease-in-out forwards",
        "float-x": "float-x 8s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease forwards",
        "fade-out-up": "fade-out-up 0.8s ease forwards",
      },

      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#143c5c",
        secondary: "#3e8fad",
        background: "#a4cfcb",
        foreground: "#8e9fb6",
        front: "#143c5c",
        back: "#ffffff",
      },
      borderRadius: {
        inherit: "inherit",
      },
      fontFamily: {
        rosaria: '"Rosaria", sans-serif',
        tienne: '"Tienne", Georgia, sans-serif',
        infant: '"Ysabeau Infant", sans-serif',
        Ysabeau: ['"Ysabeau Infant"', 'sans-serif']
      },
      transitionDuration: {
        inherit: "inherit",
      },
      zIndex: {
        1: 1,
      },
      content: {
        visible: '" "',
      },
    },
  },
  plugins: [],
};
