// @flow

import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  container: {
    padding: Metrics.doubleBaseMargin,
    flex: 1,
  },

  documentName: {
    textAlign: 'center',
    color: Colors.snow,
    fontSize: 16,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.smallMargin,
  },

  updatedOn: {
    textAlign: 'center',
    color: Colors.brand.gray,
    fontSize: 12,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.baseMargin,
  },

  header: {
    color: Colors.brand.orange,
    fontFamily: Fonts.type.primary,
    fontSize: 14,
    marginTop: Metrics.baseMargin,
  },

  body: {
    color: Colors.snow,
    fontFamily: Fonts.type.primary,
    fontSize: 12,
    lineHeight: 17,
  },

  spacer: {
    height: Metrics.baseMargin,
  },

});
