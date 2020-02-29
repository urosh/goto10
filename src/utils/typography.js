import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
import kirkhamTheme from "typography-theme-kirkham"
import parnassusTheme from "typography-theme-parnassus"

// const typography = new Typography({
const typography = new Typography(parnassusTheme);
//   baseFontSize: "26px",
//   baseLineHeight: 1.666,
//   headerFontFamily: [
//     "Avenir Next",
//     "Helvetica Neue",
//     "Segoe UI",
//     "Helvetica",
//     "Arial",
//     "sans-serif",
//   ],
//   bodyFontFamily: ["Georgia", "serif"],
// })

export const { scale, rhythm, options } = typography
export default typography