import React, { Component, PropTypes } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { ApplyComponentTheme } from '../Lib/Utilities';
import styles from './Styles/ButtonStyle';
import ButtonTheme from './Themes/ButtonTheme';

export default class Button extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    gradient: PropTypes.bool,
    gradientColors: PropTypes.array,
    disabledStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    disabled: PropTypes.bool,
    textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    text: PropTypes.string,
    theme: PropTypes.oneOf(Object.keys(ButtonTheme)),
    onPress: PropTypes.func,
  }

  static defaultProps = {
    text: 'Button',
    theme: 'primary',
  }

  render() {
    const theme = ButtonTheme[this.props.theme];
    const { style, gradient, gradientColors, disabled, disabledStyle, onPress, textStyle } = ApplyComponentTheme(theme, this.props);
    const ButtonView = gradient ? LinearGradient : View;

    const ButtonViewProps = {
      style: [
        styles.btn,
        style,
        disabled ? disabledStyle : null,
      ],
    };

    if (gradient) {
      ButtonViewProps.colors = gradientColors;
    }

    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <ButtonView {...ButtonViewProps}>
          <Text style={[styles.btnText, textStyle]}>{this.props.text}</Text>
        </ButtonView>
      </TouchableOpacity>
    );
  }
}
