// @flow

import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from '../../Themes/';

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
  bannerContainer: {
    position: 'absolute',
    top: 10,
    left: 25,
    width: Metrics.screenWidth - 50,
  }
});
