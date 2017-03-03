// @flow

import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    paddingHorizontal: Metrics.doubleBaseMargin,
    paddingVertical: Metrics.largeMargin,
    backgroundColor: Colors.brand.dark,
  },
  list: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingTop: 15,
  },
  memberContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  waitingInviteText: {
    marginTop: Metrics.largeMargin,
    color: Colors.brand.orange,
    fontFamily: Fonts.type.primary,
    fontSize: Fonts.size.h5,
    textAlign: 'center',
  },
  name: {
    color: Colors.snow,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.baseMargin,
  },
  message: {
    color: Colors.brand.gray,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.primary,
    marginBottom: Metrics.semiLargeMargin,
  },
  joiningAvatar: {
    alignSelf: 'center',
    marginBottom: Metrics.doubleBaseMargin,
  },
  joiningAvatarImage: {
    borderWidth: 2,
    borderColor: Colors.brand.gray,
    borderRadius: 10,
  },
  reportText: {
    marginTop: 10,
    color: Colors.brand.gray,
    fontFamily: Fonts.type.primary,
    textAlign: 'right',
  },
  joiningDistance: {
    color: Colors.brand.gray,
    fontFamily: Fonts.type.primary,
    textAlign: 'center',
    marginBottom: Metrics.largeMargin,
  },
});
