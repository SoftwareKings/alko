// @flow

import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  documentName: {
    textAlign: 'center',
    color: Colors.snow,
    fontSize: 16,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.smallMargin,
  },

  updatedOn: {
    textAlign: 'center',
    color: Colors.inactive,
    fontSize: 12,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.doubleBaseMargin,
  },

  container: {
    padding: Metrics.doubleBaseMargin,
    flex: 1,
  },

  header: {
    color: Colors.blazeOrange,
    fontFamily: Fonts.type.primary,
    fontSize: 14,
    marginBottom: Metrics.smallMargin,
  },

  body: {
    color: Colors.snow,
    fontFamily: Fonts.type.primary,
    fontSize: 12,
    lineHeight: 11 * 1.25,
  },

  spacer: {
    height: Metrics.baseMargin,
  },

});
