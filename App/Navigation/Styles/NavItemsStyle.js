// @flow

import { StyleSheet } from 'react-native';
import { Colors } from '../../Themes/';

const navButton = {
  backgroundColor: Colors.transparent,
  justifyContent: 'center',
  width: 35,
  height: 35,
};

export default StyleSheet.create({
  backButton: {
    ...navButton,
    paddingBottom: 4,
    width: 15,
    marginRight: 20,
  },
  navButtonLeft: {
    ...navButton,
  },
  navButtonRight: {
    ...navButton,
  },
  icon: {
    alignSelf: 'center',
  },
});
