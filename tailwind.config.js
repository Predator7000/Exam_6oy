/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        drgreen: "#274C5B",
        salate: "#7EB693",
        yellow: "#EFD372",
        stain: "#D4D4D4",
        white: "#F9F8F8",
        hsalat:"#EFF6F1",
        gray:"#525C60"
      },
      backgroundImage: {
        bgimg: "url('./src/img/home/bgimg.svg')",
        bgimg_2:"url('./src/img/home/costumer_bgi.svg')",
        bgimg_3:"url('./src/img/home/bgi-inp.png')",
      }
    },
  },
  plugins: [],
};
