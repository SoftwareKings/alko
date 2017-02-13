// @flow

import {StyleSheet, Platform} from 'react-native'
import {Metrics, Colors, Fonts} from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: Metrics.largeMargin,
    paddingTop: (Platform.OS === 'ios') ? Metrics.largeMargin : 0,
    backgroundColor: Colors.background
  },
  contentContainer: {
    paddingTop: Metrics.largeMargin,
    marginBottom: Metrics.largeMargin,
    flex: 1
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  stepTitle: {
    textAlign: 'center',
    fontSize: Fonts.size.h4
  },
  stepSubtitle: {
    textAlign: 'center'
  },
  stepImage: {
    marginBottom: 50
  },
  btnDisallow: {
    marginTop: Metrics.doubleBaseMargin,
    backgroundColor: '#444444'
  },
  btnDisallowText: {
    color: '#707070',
    textShadowColor: '#000000',
    textShadowOffset: {width: 0, height: 2}
  }
})
