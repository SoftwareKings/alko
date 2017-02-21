import React, { Component, PropTypes } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native';

import styles from './Styles/BarResultStyle';
import { Colors, Images } from '../Themes/';

export default class Button extends Component {
  static propTypes = {
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    name: PropTypes.string,
    onPress: PropTypes.func,
  }

  static defaultProps = {
    name: 'Button',
    gradientColors: [Colors.blazeOrange, Colors.christine],
  }

  static renderBarIcon(activeDrinkUp, promotions) {
    if (activeDrinkUp && promotions.includes('twoForOne')) {
      return (
        <Image style={styles.icon} source={Images.mugSeal} />
      );
    } else if (activeDrinkUp) {
      return (
        <Image style={styles.icon} source={Images.mug} />
      );
    } else if (promotions.includes('twoForOne')) {
      return (
        <Image style={styles.icon} source={Images.seal} />
      );
    }
    return null;
  }

  render() {
    const { name, activeDrinkUp, promotions, distance, textStyle, onPress } = this.props;

    const buttonStyles = [styles.btnContainer, this.props.style];
    if (activeDrinkUp) buttonStyles.push(styles.btnActiveDrinkUp);

    return (
      <TouchableOpacity activeOpacity={0.7} style={buttonStyles} onPress={onPress}>
        <View style={styles.container}>
          {this.constructor.renderBarIcon(activeDrinkUp, promotions)}
          <View style={styles.infoContainer}>
            <Text style={[styles.btnText, textStyle]}>{name}</Text>
            <Text style={[styles.btnText, textStyle]}>{distance}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
