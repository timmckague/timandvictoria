import Typography from 'typography';
import deYoung from "typography-theme-de-young";

/*
deYoung.googleFonts = [
    {
      name: 'Alegreya',
      styles: ['500'],
    },
    {
      name: 'Alegreya Sans',
      styles: ['400', '400i', '700', '700i'],
    },
  ]
deYoung.headerFontFamily = ['Alegreya', 'sans-serif']
deYoung.bodyFontFamily = ['Alegreya Sans', 'sans-serif']
*/
const typography = new Typography({
  ...deYoung
});

export default typography;
