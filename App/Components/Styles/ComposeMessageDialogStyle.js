// @flow

import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  dialog: {
    padding: Metrics.doubleBaseMargin,
  },
  title: {
    color: Colors.snow,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.doubleBaseMargin,
    textAlign: 'center',
  },
  previousMessageText: {
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.baseMargin,
    color: Colors.brand.gray,
    fontFamily: Fonts.type.primary,
  },
  messageInput: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 80,
    borderRadius: 10,
    backgroundColor: Colors.snow,
    color: Colors.tundora,
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.baseMargin,
  },
  previousMessage: {
    color: Colors.snow,
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.primary,
  },
  separator: {
    marginVertical: 5,
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.brand.gray,
  },
});
