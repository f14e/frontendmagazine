import Typography from "typography";

import GitHub from "typography-theme-github";

GitHub.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  };
};

GitHub.googleFonts = [
  {
    name: "Roboto Condensed",
    styles: ["400"],
  },
];

GitHub.headerFontFamily = ["Roboto Condensed", "sans-serif"];
GitHub.blockMarginBottom = "20px";

const typography = new Typography(GitHub);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
