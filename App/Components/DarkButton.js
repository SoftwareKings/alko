import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './Styles/DarkButtonStyle';

export default class Button extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    disabledStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    disabled: PropTypes.bool,
    textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    text: PropTypes.string,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    text: 'Button',
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={this.props.onPress}>
        <View
          style={[
            styles.btn,
            this.props.style,
            this.props.disabled ? this.props.disabledStyle : null,
          ]}>
          <Text style={[styles.btnText, this.props.textStyle]}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
