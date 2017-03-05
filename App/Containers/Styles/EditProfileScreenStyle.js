// @flow

import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  formContainer: {
    padding: Metrics.doubleBaseMargin,
    flex: 1,
  },

  selectPhotoContainer: {
    marginBottom: Metrics.doubleBaseMargin * 2,
  },

  photo: {
    alignSelf: 'center',
    width: 128,
    height: 128,
    borderWidth: 2,
    borderColor: Colors.snow,
    borderRadius: Metrics.avatarBorderRadius,
    marginTop: Metrics.doubleBaseMargin,
  },

  updatePhoto: {
    alignSelf: 'center',
    color: Colors.snow,
    fontFamily: Fonts.type.primary,
    fontSize: 12,
    marginTop: Metrics.doubleBaseMargin,
  },

  labelContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.brand.gray,
    borderStyle: 'solid',
    height: 46,
    marginBottom: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin / 2,
    position: 'relative',
  },

  label: {
    marginTop: Metrics.doubleBaseMargin,
    color: Colors.brand.gray,
    fontSize: 14,
  },

  input: {
    color: Colors.snow,
    fontSize: 24,
    fontFamily: Fonts.type.primary,
    left: 90,
    right: 0,
    top: 0,
    bottom: 0,
    paddingLeft: Metrics.baseMargin,
    position: 'absolute',
  },

  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    height: Metrics.doubleBaseMargin * 2,
  },

  drinkIcon: {
    flex: 1,
    flexGrow: 1,
    margin: Metrics.baseMargin,
  },

  statusContainer: {
    margin: Metrics.doubleBaseMargin,
    alignItems: 'center',
  },

  statusProcessing: {
    color: Colors.snow,
    fontSize: 20,
  },

  statusSuccess: {
    color: Colors.brand.orange,
    fontSize: 20,
  },

  spacer: {
    height: Metrics.doubleBaseMargin,
  },

});
