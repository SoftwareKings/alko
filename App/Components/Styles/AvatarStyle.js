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
  btnMessage: {
    position: 'absolute',
    right: 0,
    top: -10,
    width: 30,
    height: 30,
    backgroundColor: Colors.transparent,
    alignItems: 'flex-end',
  },
  imageBackdrop: {
    borderRadius: Metrics.avatarBorderRadius,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  nameDisabled: {
    color: Colors.brand.gray,
  },
});
