/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-home":
          "url('https://thumbs.dreamstime.com/b/concentrated-lab-technician-using-microscope-handsome-black-male-beard-sitting-table-analyzing-sample-working-147484749.jpg')",
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
