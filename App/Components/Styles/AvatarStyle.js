// @flow

import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  innerContainer: {
    borderRadius: Metrics.avatarBorderRadius,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: Colors.brand.black,
  },
  name: {
    textAlign: 'center',
    color: Colors.snow,
    fontFamily: Fonts.type.primary,
    fontSize: Fonts.size.regular,
    marginTop: Metrics.baseMargin,
  },
  image: {
    borderRadius: Metrics.avatarBorderRadius,
  },
});
