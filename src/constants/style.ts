import * as PIXI from 'pixi.js'

export const COLOR = {
  RED_PURPLE: '0xC86788',
  PURPLE: '0x7DA1DB',
  PINK: '0xF09AB7',
  BLUE: '0x99D4F2',
  GREEN: '0x7EBCD1',
  YELLOW: '0xF9DA88',
  CHARCOAL: '0x4A4A4A',
  BLACK: '0x000000',
  WHITE: '0xFFFFFF',
  SILVER: '0xBFC0C0',
  BASE: '0xEFF0ED',
}

export const TEXT_STYLE = {
  SUPER_HEADER_THAI: new PIXI.TextStyle({
    fontFamily: 'Chonburi',
    fontSize: 96,
  }),
  SUPER_HEADER_THAI_CHACOAL: new PIXI.TextStyle({
    fontFamily: 'Chonburi',
    fontSize: 96,
    fill: COLOR.CHARCOAL,
  }),
  HEADER_THAI: new PIXI.TextStyle({
    fontFamily: 'Chonburi',
    fontSize: 48,
  }),
  HEADER_THAI_CHACOAL: new PIXI.TextStyle({
    fontFamily: 'Chonburi',
    fontSize: 48,
    fill: COLOR.CHARCOAL,
  }),
  SUBHEADER_THAI: new PIXI.TextStyle({
    fontFamily: 'Chonburi',
    fontSize: 36,
  }),
  SUBHEADER_THAI_CHARCOAL: new PIXI.TextStyle({
    fontFamily: 'Chonburi',
    fontSize: 36,
    fill: COLOR.CHARCOAL,
  }),
  BODY_THAI: new PIXI.TextStyle({
    fontFamily: 'Chonburi',
    fontSize: 25,
  }),
  BODY_THAI_CHARCOAL: new PIXI.TextStyle({
    fontFamily: 'Chonburi',
    fontSize: 25,
    fill: COLOR.CHARCOAL,
  }),
  OVERLINE_THAI: new PIXI.TextStyle({
    fontFamily: 'Chonburi',
    fontSize: 18,
  }),
  OVERLINE_THAI_CHACOAL: new PIXI.TextStyle({
    fontFamily: 'Chonburi',
    fontSize: 18,
    fill: COLOR.CHARCOAL,
  }),
}