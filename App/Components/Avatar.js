import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Metrics, Colors } from '../Themes';
import styles from './Styles/AvatarStyle';

export default class Avatar extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    name: PropTypes.string,
    icon: PropTypes.number,
    image: PropTypes.number,
    imageStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    width: PropTypes.number,
    message: PropTypes.string,
    onPressMessage: PropTypes.func,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    width: 100,
  }

  onPressMessage = () => {
    const { message, name, image } = this.props;
    if (this.props.onPressMessage) {
      this.props.onPressMessage({
        message,
        name,
        image,
      });
    }
  }

  renderIcon() {
    const { width, disabled } = this.props;
    return (
      <View style={[styles.innerContainer, styles.iconContainer, { width, height: width }]}>
        <Image source={this.props.icon} />
        {disabled && <View style={styles.imageBackdrop}></View>}
      </View>
    );
  }

  renderImage() {
    const { width, message, disabled, imageStyle } = this.props;
    return (
      <View style={[styles.innerContainer, styles.iconContainer, { width, height: width }]}>
        <Image source={this.props.image} style={[styles.image, imageStyle, { width, height: width }]} />
        {
          message &&
            <TouchableOpacity onPress={this.onPressMessage} style={styles.btnMessage}>
              <Icon name="envelope" size={Metrics.icons.small} color={Colors.snow} />
            </TouchableOpacity>
        }
        {disabled && <View style={styles.imageBackdrop}></View>}
      </View>
    );
  }

  render() {
    const { image, name, width, style, disabled } = this.props;
    return (
      <View style={[{ width }, style]}>
        {image ? this.renderImage() : this.renderIcon()}
        {name && <Text style={[styles.name, disabled && styles.nameDisabled]}>{name}</Text>}
      </View>
    );
  }
}
