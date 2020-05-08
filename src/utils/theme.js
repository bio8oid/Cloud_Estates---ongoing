import {colors} from './colors';

export const theme = {
  colors,
  fade: 'opacity: .5',
  responsiveImg: 'height: 100%; width: 100%; background-size: cover',
  // imageTemplate: "background: ${({ css }) => css ? 'url(${cloud1}) no-repeat center' : 'none'};",
  imageTemplate: function(image) {return "background: ${({ css }) => css ? " + `'url(${image}) no-repeat center'` + " : 'none'}"},
  // fadeTemplate: function (fade) { return "opacity: ${ ({ fade }) => fade ? " + `'${fade}'` + " : '1'}"},
  // flyTemplate: function (speed) { return "animation: ${ ({ fly }) => fly ? " + `'flyBastards ${speed}s infinite linear'` + " : 'none'}"},
    // imageTemplate: function(image) {return `background: ${({ css }) => css ? url(${image}) no-repeat center` : 'none'}`},
  // fadeTemplate: function (number) { return `opacity: ${ ({ fade }) => fade ? `${number}` : '1'}`},
  // flyTemplate: function (speed) { return `animation: ${ ({ fly }) => fly ? `flyBastards ${speed}s infinite linear` : 'none'}`},
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
    desktop: '@media (max-width: 1024px)',
    cloud: '@media (max-width: 1524px)',
  }
}
