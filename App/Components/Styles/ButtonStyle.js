// @flow

import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  btn: {
    backgroundColor: Colors.blazeOrange,
    paddingHorizontal: 30,
    height: 40,
    borderRadius: 3,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: Colors.snow,
    fontFamily: Fonts.type.primary,
    fontSize: 15
  }
})
