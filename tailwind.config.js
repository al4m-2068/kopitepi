/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "/src/**/*.{html,js}"],
  theme: {
    extend: {
      gap: {
        2.2: "10px",
      },
      margin: {
        tmimg: "95px",
      },
      rotate: {
        5: "5deg",
      },
      padding: {
        main: "30px",
      },
      borderRadius: {
        tm: "35px",
      },
      borderWidth: {
        1: "1px",
      },
      letterSpacing: {
        geser: "10px",
      },
      colors: {
        primary: "#FAF7F0",
        secondary: "#4A4947",
        secondary2: "#E4D0C2",
        accent: "#B17457",
      },
      fontFamily: {
        sts: ["Satoshi", "sans-serif"],
        wst: ["Westgate", "sans-serif"],
      },
      fontSize: {
        titleN: "50px",
      },
      backgroundSize: {
        watermark: "50%",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // Kelas untuk text-box-trim
        ".text-trim-both": {
          "text-box-trim": "trim-both",
        },
        // Kelas untuk text-box-edge (cap alphabetic)
        ".text-edge-cap-alpha": {
          "text-box-edge": "cap alphabetic",
        },
        // Kelas shorthand (text-box)
        ".text-box-trimmed": {
          "text-box": "trim-both cap alphabetic",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
