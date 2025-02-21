/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homedesktop:
          "url('/src/assets/ifundo/ihome/background-home-desktop.jpg')",
        hometablet: "url('/src/assets/ifundo/ihome/background-home-tablet.jpg')",
        homephone: "url('/src/assets/ifundo/ihome/background-home-mobile.jpg')",
        martedesktop:
          "url('/src/assets/ifundo/destination/background-destination-desktop.jpg')",
        crewdesk: "url('/src/assets/ifundo/crew/background-crew-desktop.jpg')",
      },
      colors: {
        primary: "#1E40AF", // Azul escuro
        secondary: "#FBBF24", // Amarelo vibrante
        danger: "#DC2626", // Vermelho forte
      },
      fontFamily: {
        laga: ["Bellefair", "serif"],
        condensada: ["Barlow Condensed", "serif"],
        funky: ['"Comic Sans MS"', "cursive"],
      },
      fontSize: {
        xxs: "5rem", // menor que xs
        huge: "7rem", // maior que xl
        custom: "1rem", // tamanho personalizado
      },
      spacing: {
        128: "27rem",
        boms: "85%",
      },
      animation: {
        spinslow: "spin 500s linear infinite",
        fadeIn: "fadeIn 2s ease-in-out",
        zoomInOut: "zoomInOut 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        zoomInOut: {
          "0%": {
            backgroundSize: "110%",
            backgroundPosition: "center center",
          },
          "50%": {
            backgroundSize: "120%",
            backgroundPosition: "center center",
          },
          "100%": {
            backgroundSize: "110%",
            backgroundPosition: "center center",
          },
        },
      },
    },
  },
  plugins: [],
};
