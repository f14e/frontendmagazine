import Typography from "typography";

import GitHub from "typography-theme-github";

GitHub.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  };
};

// GitHub.googleFonts = [
//   {
//     name: "Roboto Condensed",
//     styles: ["400"],
//   },
//   {
//     name: "PT Sans",
//     styles: ["400", "400i", "700"],
//   },
// ];

// GitHub.bodyFontFamily = [
//   "-apple-system",
//   "BlinkMacSystemFont",
//   "Segoe UI",
//   "Helvetica",
//   "Arial",
//   "sans-serif",
// ];
// GitHub.headerFontFamily = [
//   "-apple-system",
//   "BlinkMacSystemFont",
//   "Segoe UI",
//   "Helvetica",
//   "Arial",
//   "sans-serif",
// ];
// GitHub.baseFontSize = "16px";
// GitHub.scaleRatio = 1.75;

const typography = new Typography(GitHub);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
