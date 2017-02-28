// @flow

import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Fonts, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingHorizontal: Metrics.largeMargin,
    paddingBottom: Metrics.largeMargin,
    backgroundColor: Colors.brand.dark,
  },
  contentContainer: {
    paddingTop: Metrics.largeMargin,
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
  section: {
    marginBottom: 50,
  },
  topSection: {
    paddingTop: Metrics.largeMargin,
    marginBottom: 20,
  },
  sectionTitle: {
    color: Colors.brand.orange,
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.baseMargin,
  },
  description: {
    color: Colors.snow,
    fontFamily: Fonts.type.primary,
    fontSize: Fonts.size.regular,
  },
});
