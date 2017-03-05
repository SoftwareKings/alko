// @flow

import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  btn: {
    height: 40,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    backgroundColor: Colors.brand.orange,
  },
  btnText: {
    color: Colors.snow,
    backgroundColor: Colors.transparent,
    fontFamily: Fonts.type.bold,
    fontSize: 14,
    textShadowColor: Colors.brand.shadow.orange,
    textShadowOffset: { width: 0, height: 2 },
  },
  darkBtn: {
    backgroundColor: Colors.tundora,
  },
  darkBtnText: {
    color: Colors.brand.gray,
    textShadowColor: Colors.brand.black,
  },
  btnDisallow: {
    backgroundColor: Colors.tundora,
  },
  btnDisallowText: {
    color: '#707070',
    textShadowColor: 'rgb(50,50,50)',
  },
});
