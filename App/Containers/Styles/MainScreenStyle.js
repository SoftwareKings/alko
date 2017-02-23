// @flow

import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Fonts } from '../../Themes/';
// import Metrics from '../../Themes/Metrics';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mapContainer: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 256,
  },
  map: {
    // For Android :/
    flex: 1,
    height: 256,
  },
  barListContainer: {
    flex: 1,
  },
  linearGradient: {
    position : 'absolute',
    borderRadius: 5,
    height: 35,
    left: 25,
    top: 10,
    width: Metrics.screenWidth - 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontFamily: Fonts.type.primary,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  shape: {
    position: 'absolute',
    left: 5,
    top: 5
  }
});
