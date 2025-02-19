/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homedesktop:
          "url('src/assets/ifundo/ihome/background-home-desktop.jpg')",
        hometablet: "url('src/assets/ifundo/ihome/background-home-tablet.jpg')",
        homephone: "url('src/assets/ifundo/ihome/background-home-mobile.jpg')",
        martedesktop:
          "url('./src/assets/ifundo/destination/background-destination-desktop.jpg')",
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
      },
      
    },
  },
  plugins: [],
};
