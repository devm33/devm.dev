import Typography from "typography";

const fonts = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica",
  "Arial",
  "sans-serif",
];

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.65,
  headerFontFamily: fonts,
  bodyFontFamily: fonts,
  scaleRatio: 2,
});

export const rhythm = typography.rhythm;
export const scale = typography.scale;

export default typography;