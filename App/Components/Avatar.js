import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import IconAlko from './IconAlko';
import { Metrics, Colors } from '../Themes';
import styles from './Styles/AvatarStyle';

export default class Avatar extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    name: PropTypes.string,
    icon: PropTypes.string,
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imageStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    width: PropTypes.number,
    message: PropTypes.string,
    messagesRead: PropTypes.bool,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    width: 100,
  }

  onPress = () => {
    const { message, name, image } = this.props;
    if (this.props.onPress) {
      this.props.onPress({
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
        <IconAlko name={this.props.icon} size={45} color={disabled ? Colors.brand.gray : Colors.snow} />
      </View>
    );
  }

  renderImage() {
    const { width, message, disabled, imageStyle, messagesRead } = this.props;
    return (
      <View style={[styles.innerContainer, styles.iconContainer, { width, height: width }]}>
        <Image source={this.props.image} style={[styles.image, imageStyle, { width, height: width }]} />
        {
          message &&
            <View style={styles.btnMessage}>
              <Icon
                name="envelope"
                size={Metrics.icons.small}
                color={Colors.snow}
                style={{ opacity: messagesRead ? 0.5 : 1 }}
              />
            </View>
        }
        {disabled && <View style={styles.imageBackdrop}></View>}
      </View>
    );
  }

  renderAvatar() {
    const { image, name, width, style, disabled } = this.props;
    return (
      <View style={[{ width }, style]}>
        {image ? this.renderImage() : this.renderIcon()}
        {name && <Text style={[styles.name, disabled && styles.nameDisabled]}>{name}</Text>}
      </View>
    );
  }

  render() {
    return (
      this.props.onPress ?
        <TouchableOpacity activeOpacity={0.7} onPress={this.onPress}>
          {this.renderAvatar()}
        </TouchableOpacity>
        : this.renderAvatar()
    );
  }
}
