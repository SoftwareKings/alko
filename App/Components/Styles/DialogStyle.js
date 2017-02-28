// @flow

import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes/';

export default StyleSheet.create({
  dialogContainer: {
      flex: 1,
      backgroundColor: Colors.charcoal,
      width: Metrics.screenWidth - 50,
      height: Metrics.screenWidth - 80
  }
});
