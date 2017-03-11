// @flow

import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  title: {
    color: Colors.snow,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.baseMargin,
    textAlign: 'center',
  },
  imageWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  overlay: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginBottom: Metrics.doubleBaseMargin,
  },
  image: {
    flex: 1,
    height: 100,
  },
});
