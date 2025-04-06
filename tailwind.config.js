// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        colors: {
          // use basic RGB/HEX values
          primary: '#1f2937', // instead of oklch()
        },
      },
    },
    // Remove any plugins that use oklch
  }
  