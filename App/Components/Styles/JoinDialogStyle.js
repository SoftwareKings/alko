// @flow

import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  title: {
    color: Colors.snow,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.primary,
    marginBottom: 25,
    textAlign: 'center',
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: Metrics.baseMargin,
  },
  avatarImage: {
    borderWidth: 2,
    borderColor: Colors.brand.gray,
    borderRadius: 10,
  },
  distance: {
    color: Colors.brand.gray,
    fontFamily: Fonts.type.primary,
    textAlign: 'center',
    marginBottom: Metrics.largeMargin,
  },
  reportContainer: {
    position: 'absolute',
    right: 0,
    top: 8,
  },
  report: {
    color: Colors.brand.gray,
    fontFamily: Fonts.type.primary,
    textAlign: 'right',
    fontSize: Fonts.size.small,
  },
});
