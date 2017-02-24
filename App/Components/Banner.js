import React, { Component, PropTypes } from 'react';
import {
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './Styles/BannerStyle';
import { Colors, Images } from '../Themes/';

export default class Button extends Component {
  
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    gradientColors: PropTypes.array,
    disabledStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    disabled: PropTypes.bool,
    textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    text: PropTypes.string,
    shape: PropTypes.any,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    text: 'Button',
    gradientColors: [Colors.selectiveYellow, Colors.webOrange],
  }

  render() {
    const { shape } = this.props;

    return (
      <TouchableOpacity activeOpacity={0.7} onPress={this.props.onPress}>
        <LinearGradient
          colors={this.props.gradientColors}
          style={[
            styles.btn,
            this.props.style,
            this.props.disabled ? this.props.disabledStyle : null,
          ]}>
          { shape ? (
            <Image source = {this.props.shape} style={styles.shape}/>
          ) : null}
          <Text style={[styles.btnText, this.props.textStyle]}>{this.props.text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
