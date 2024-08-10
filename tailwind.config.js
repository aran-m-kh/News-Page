/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
        '2xs': { min: '200px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        mob: { min: '201px', max: '700px' },
        des: { min: '701px' }, // Desktop smallest.
        xl: { min: '1259px' }, // Desktop wide.
        '2xl': { min: '1359px' } // Desktop widescreen. 
    },
    extend: {
      fontFamily : {
        interThin : ["inter-thin"],
        InterBold : ["Inter-Bold"],
        InterExtraBold : ["Inter-ExtraBold"],
        InterRegular : ["Inter-Regular"],
      }
    },
  },
  plugins: [],
}

