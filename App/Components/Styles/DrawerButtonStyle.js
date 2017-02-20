// @flow

import { Metrics, Colors, Fonts } from '../../Themes';

export default {
  btnDrawer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingVertical: Metrics.baseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    alignItems: 'center',
  },
  btnDrawerText: {
    fontFamily: Fonts.type.primary,
    color: Colors.inactive,
    fontSize: Fonts.size.regular,
    flex: 1,
  },
  btnDrawerIcon: {
    color: Colors.inactive,
  },
  btnDrawerActive: {
    borderLeftWidth: 5,
    borderLeftColor: Colors.blazeOrange,
    backgroundColor: '#1C1A19',
  },
  btnDrawerTextActive: {
    color: Colors.snow,
  },
  btnDrawerIconActive: {
    color: Colors.snow,
  },
};
