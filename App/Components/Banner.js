import React, { Component, PropTypes } from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import IconAlko from './IconAlko';
import styles from './Styles/BannerStyle';
import { ApplyComponentTheme } from '../Lib/Utilities';
import BannerTheme from './Themes/BannerTheme';

export default class Button extends Component {

  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    gradientColors: PropTypes.array,
    textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    text: PropTypes.string,
    onPress: PropTypes.func,
    iconFamily: PropTypes.oneOf(['material', 'fontawesome', 'alko']),
    iconName: PropTypes.string,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    theme: PropTypes.oneOf(Object.keys(BannerTheme)),
  }

  static defaultProps = {
    theme: 'info',
    iconFamily: 'alko',
    iconName: 'badge',
    iconSize: 20,
  }

  static getIconFamilyComponent(iconFamily) {
    let Icon = null;
    switch (iconFamily) {
      case 'material':
        Icon = IconMaterial;
        break;
      case 'fontawesome':
        Icon = IconFontAwesome;
        break;
      case 'alko':
        Icon = IconAlko;
        break;
      default:
        Icon = IconMaterial;
    }
    return Icon;
  }

  render() {
    const theme = BannerTheme[this.props.theme];
    const { style, gradientColors, onPress, textStyle, iconColor, iconSize, iconName } = ApplyComponentTheme(theme, this.props);
    const Icon = this.constructor.getIconFamilyComponent(this.props.iconFamily);

    return (
      <LinearGradient
        colors={gradientColors}
        style={[
          styles.btn,
          style,
        ]}>
        <TouchableOpacity activeOpacity={0.7} style={styles.body} onPress={onPress}>
          <Icon style={styles.icon} name={iconName} size={iconSize} color={iconColor}></Icon>
          <Text style={[styles.bodyText, textStyle]}>{this.props.text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}
