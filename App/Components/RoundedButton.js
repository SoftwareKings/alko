// @flow

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Styles/RoundedButtonStyle';
import ExamplesRegistry from '../Services/ExamplesRegistry';

// Example
ExamplesRegistry.add('Rounded Button', () =>
  <RoundedButton
    text="real buttons have curves"
    onPress={() => window.alert('Rounded Button Pressed!')}
  />
);

type RoundedButtonProps = {
  onPress: () => void,
  text?: string,
  children?: string,
  // eslint-disable-next-line react/no-unused-prop-types
  navigator?: Object
}

export default class RoundedButton extends React.Component {

  getText() {
    const buttonText = this.props.text || this.props.children || '';
    return buttonText.toUpperCase();
  }

  props: RoundedButtonProps

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.getText()}</Text>
      </TouchableOpacity>
    );
  }
}
