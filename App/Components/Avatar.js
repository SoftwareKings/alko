import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import styles from './Styles/AvatarStyle';

export default class Avatar extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    name: PropTypes.string,
    icon: PropTypes.number,
    image: PropTypes.number,
    width: PropTypes.number,
  }

  renderIcon() {
    const { width } = this.props;
    return (
      <View style={[styles.innerContainer, styles.iconContainer, { width, height: width }]}>
        <Image source={this.props.icon} />
      </View>
    );
  }

  renderImage() {
    const { width } = this.props;
    return (
      <View style={[styles.innerContainer, styles.iconContainer, { width, height: width }]}>
        <Image source={this.props.image} style={[styles.image, { width, height: width }]} />
      </View>
    );
  }

  render() {
    const { image, name, width } = this.props;
    return (
      <View style={{ width }}>
        {image ? this.renderImage() : this.renderIcon()}
        <Text style={styles.name}>{name}</Text>
      </View>
    );
  }
}
