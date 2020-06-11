import { colors } from './colors';

export const theme = {
  colors,
  responsiveImg: 'height: 100%; width: 100%; background-size: cover',
  hover: {
    text: "color: skyblue; -webkit-text-stroke: 1px #040026"
  },
  font: {
    gloria: "font-family: 'Gloria Hallelujah'; color: #040026",
    indie: "font-family: 'Indie Flower'; color: #040026"
  },
  centered: "position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%)",
  flex: {
    centered: "display: flex; justify-content: center; align-items: center",
    centeredColumn: "display: flex; flex-direction: column; justify-content: center; align-items: center"
  },
  media: {
    cloud: '@media (max-width: 1524px)',
    desktop: '@media (max-width: 1048px)',
    tabletPro: '@media (max-width: 900px)',
    tablet: '@media (max-width: 728px)',
    mobile: '@media (max-width: 576px)',
    iphone5: '@media (max-width: 360px)',
  },
}