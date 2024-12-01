module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://scx2.b-cdn.net/gfx/news/hires/2018/1-food.jpg')",
        "custom-grid": `
          repeating-linear-gradient(90deg, hsla(196, 0%, 79%, 0.06) 0px, hsla(196, 0%, 79%, 0.06) 1px, transparent 1px, transparent 96px),
          repeating-linear-gradient(0deg, hsla(196, 0%, 79%, 0.06) 0px, hsla(196, 0%, 79%, 0.06) 1px, transparent 1px, transparent 96px),
          repeating-linear-gradient(0deg, hsla(196, 0%, 79%, 0.09) 0px, hsla(196, 0%, 79%, 0.09) 1px, transparent 1px, transparent 12px),
          repeating-linear-gradient(90deg, hsla(196, 0%, 79%, 0.09) 0px, hsla(196, 0%, 79%, 0.09) 1px, transparent 1px, transparent 12px),
          linear-gradient(90deg, rgb(255, 255, 255), rgb(255, 255, 255))
        `,
        "black-grid": `repeating-linear-gradient(90deg, hsla(57,0%,42%,0.09) 0px, hsla(57,0%,42%,0.09) 1px, transparent 1px, transparent 60px), 
                        repeating-linear-gradient(0deg, hsla(57,0%,42%,0.09) 0px, hsla(57,0%,42%,0.09) 1px, transparent 1px, transparent 60px), 
                        repeating-linear-gradient(0deg, hsla(57,0%,42%,0.09) 0px, hsla(57,0%,42%,0.09) 1px, transparent 1px, transparent 10px), 
                        repeating-linear-gradient(90deg, hsla(57,0%,42%,0.09) 0px, hsla(57,0%,42%,0.09) 1px, transparent 1px, transparent 10px), 
                        linear-gradient(90deg, rgb(20,20,20), rgb(20,20,20))`,
      },
      fontSize: {
        sm: "16px",
        md: "40px",
        xl: "72px",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      fontFamily: {
        sans: ["Inria Serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["Poppins"],
        display: ["Oswald"],
        body: ['"Open Sans"'],
      },
      boxShadow: {
        custom:
          "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30)",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
