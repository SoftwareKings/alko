import React, { Component, PropTypes } from 'react'
import {
  TouchableOpacity,
  Text
} from 'react-native'
import styles from './Styles/ButtonStyle'

export default class Button extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    disabledStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    disabled: PropTypes.bool,
    textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    text: PropTypes.string,
    onPress: PropTypes.func
  }

  static defaultProps = {
    text: 'Button'
  }

  render () {
    return (
      <TouchableOpacity {...this.props}
        activeOpacity={0.7}
        style={[
          styles.btn,
          this.props.style,
          this.props.disabled ? this.props.disabledStyle : null
        ]}
        onPress={this.props.onPress}>
        <Text style={[styles.btnText, this.props.textStyle]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
