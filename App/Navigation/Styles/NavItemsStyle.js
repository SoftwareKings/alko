// @flow

import { StyleSheet } from 'react-native';
import { Metrics, Colors } from '../../Themes/';

const navButton = {
  backgroundColor: Colors.transparent,
  justifyContent: 'center',
};

export default StyleSheet.create({
  backButton: {
    ...navButton,
    marginTop: Metrics.baseMargin,
    marginLeft: Metrics.baseMargin,
  },
  navButtonLeft: {
    ...navButton,
    width: 35,
    height: 35,
    alignItems: 'center',
  },
  searchButton: {
    ...navButton,
    marginTop: Metrics.section,
    marginRight: Metrics.baseMargin,
    alignItems: 'center',
  },
});
