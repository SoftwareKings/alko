// @flow

import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../Themes/';

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
});
