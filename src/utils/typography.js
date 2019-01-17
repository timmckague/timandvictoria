import Typography from 'typography';
import deYoung from "typography-theme-de-young";


deYoung.googleFonts = [
    {
      name: 'Fjalla One',
      styles: ['500'],
    },
    {
      name: 'Source Sans Pro',
      styles: ['400', '400i', '700', '700i'],
    },
  ]
deYoung.headerFontFamily = ['Fjalla One', 'sans-serif']
deYoung.bodyFontFamily = ['Source Sans Pro', 'sans-serif']

const typography = new Typography({
  ...deYoung
});

export default typography;
