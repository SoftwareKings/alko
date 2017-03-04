// @flow

import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: Metrics.largeMargin,
    paddingTop: (Platform.OS === 'ios') ? Metrics.largeMargin : 0,
    paddingHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.dune,
  },
  contentContainer: {
    paddingTop: Metrics.baseMargin,
    marginBottom: Metrics.largeMargin,
    flex: 1,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flex: 1,
  },
  title: {
    fontSize: 72,
    letterSpacing: 10,
    fontWeight: '600',
    color: Colors.snow,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.baseMargin,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: Metrics.largeMargin,
  },
  giftName: {
    color: Colors.snow,
    fontSize: 24,
    marginBottom: Metrics.smallMargin,
    fontFamily: Fonts.type.primary,
  },
  packName: {
    color: Colors.brand.gray,
    fontSize: 24,
    marginBottom: Metrics.smallMargin,
    fontFamily: Fonts.type.primary,
  },
  date: {
    color: Colors.brand.gray,
    fontSize: 15,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.baseMargin,
  },
  timeoutContainer: {
    alignItems: 'center',
    paddingHorizontal: Metrics.largeMargin,
    marginTop: Metrics.doubleLargeMargin,
  },
  disappearTime: {
    color: Colors.snow,
    fontFamily: Fonts.type.primary,
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: Metrics.baseMargin,
  },
  guideContainer: {
    alignItems: 'center',
    paddingHorizontal: Metrics.largeMargin,
  },
  guide: {
    color: Colors.brand.gray,
    marginBottom: Metrics.baseMargin,
    fontFamily: Fonts.type.primary,
    textAlign: 'center',
  },
  closeButton: {
    marginHorizontal: Metrics.baseMargin,
  },
});
