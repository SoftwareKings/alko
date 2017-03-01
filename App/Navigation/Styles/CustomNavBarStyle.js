import { Platform } from 'react-native';

import { Colors, Metrics, Fonts } from '../../Themes/';

export default {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    height: Metrics.navBarHeight,
    paddingHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.brand.dark,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.brand.gray,
    borderBottomWidth: 1,
  },
  buttonContainer: {
    width: 35,
  },
  leftButton: {
    // paddingTop: Metrics.baseMargin,
  },
  title: {
    flex: 1,
    color: Colors.snow,
    fontFamily: Fonts.type.primary,
    fontSize: 16,
    textAlign: 'center',
  },
  logo: {
    height: Metrics.navBarHeight - Metrics.doubleBaseMargin,
    width: Metrics.navBarHeight - Metrics.doubleBaseMargin,
    resizeMode: 'contain',
  },
  rightButton: {
    paddingTop: Metrics.baseMargin,
  },
};
