import {colors} from './colors';

export const theme = {
  colors,
  fade: 'opacity: .5',
  responsiveImg: 'height: 100%; width: 100%; background-size: cover',
  font: {
    thin: 300,
    regular: 400,
    bold: 800,
    bolder: 800,
  },
  media: {
    tablet: '@media (max-width: 728px)',
    tabletPro: '@media (max-width: 900px)',
    mobile: '@media (max-width: 576px)',
    desktop: '@media (max-width: 1048px)',
    cloud: '@media (max-width: 1524px)',
  },
}
