// @flow

import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  title: {
    color: Colors.snow,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.doubleBaseMargin,
    textAlign: 'center',
  },
  body: {
    color: Colors.brand.gray,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.doubleBaseMargin,
  },
});
