// @flow

import {StyleSheet} from 'react-native'
import {Metrics, Colors, Fonts} from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.largeMargin,
    backgroundColor: Colors.background
  },
  contentContainer: {
    paddingTop: Metrics.largeMargin,
    marginBottom: Metrics.largeMargin
  },
  section: {
    marginBottom: 50
  },
  sectionTitle: {
    color: Colors.primary,
    fontSize: Fonts.size.h5,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.baseMargin
  },
  description: {
    color: Colors.snow,
    fontFamily: Fonts.type.primary,
    fontSize: Fonts.size.regular
  }
})
