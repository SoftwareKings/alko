import { createIconSetFromFontello } from 'react-native-vector-icons';
import React from 'react';

import fontelloConfig from './config.json';

const Icon = createIconSetFromFontello(fontelloConfig, 'alko');

export default class IconAlko extends React.Component {
  render() {
    return (
      <Icon {...this.props} />
    );
  }
}
