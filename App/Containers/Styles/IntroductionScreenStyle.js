// @flow

import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.largeMargin,
    paddingTop: (Platform.OS === 'ios') ? Metrics.largeMargin : 0,
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
  stepTitle: {
    textAlign: 'center',
    fontSize: Fonts.size.h4,
  },
  stepSubtitle: {
    textAlign: 'center',
  },
  stepImage: {
    marginBottom: 50,
  },
  settingContainer: {
    marginBottom: 20,
  },
  settingRow: {
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingName: {
    fontFamily: Fonts.type.primary,
    fontSize: Fonts.size.regular,
    color: '#aaaaaa',
    flex: 1,
  },
  switcherStatus: {
    marginHorizontal: 10,
    fontFamily: Fonts.type.primary,
    fontSize: Fonts.size.medium,
    color: Colors.snow,
  },
  switcherStatusOff: {
    color: '#999999',
  },
});
