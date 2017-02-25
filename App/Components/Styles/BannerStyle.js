// @flow

import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  btn: {
    height: 40,
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  body: {
    flexDirection: 'row',
  },
  bodyText: {
    color: Colors.black,
    flex: 1,
    backgroundColor: Colors.transparent,
    fontFamily: Fonts.type.bold,
    fontSize: 15,
    textShadowColor: Colors.gold,
    textShadowOffset: { width: 0, height: 2 },
    alignSelf: 'center',
    textAlign: 'center',
  },
  alertText: {
    color: Colors.snow,
    textShadowColor: Colors.tenn,
  },
  icon: {
    alignSelf: 'center',
    backgroundColor: Colors.transparent,
  },
});
