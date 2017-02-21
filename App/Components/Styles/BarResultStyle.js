// @flow

import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../Themes/';

export default StyleSheet.create({
  btnContainer: {
    height: 60,
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.tundora,
  },
  btnActiveDrinkUp: {
    backgroundColor: Colors.codGray,
    borderBottomWidth: 1,
    borderBottomColor: Colors.blazeOrange,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  btnText: {
    color: Colors.snow,
    fontFamily: Fonts.type.primary,
    fontSize: 15,
  },
});
