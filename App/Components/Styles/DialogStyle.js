// @flow

import { StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../Themes/';

export default StyleSheet.create({
  container: {
    minHeight: 215,
    width: Metrics.screenWidth - 100,
    backgroundColor: Colors.brand.black,
    borderRadius: 15,
    borderColor: Colors.brand.gray,
    borderWidth: 2,
    padding: 10,
    flexDirection: 'column',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  closeButton: {
    justifyContent: 'center',
    position: 'absolute',
    top: -10,
    right: -10,
    width: 30,
    height: 30,
    backgroundColor: Colors.brand.dark,
    borderRadius: 15,
    borderColor: Colors.brand.gray,
    borderWidth: 2,
  },
  closeIcon: {
    paddingBottom: 2,
    backgroundColor: Colors.transparent,
    alignSelf: 'center',
  },
});
