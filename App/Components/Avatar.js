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
    width: PropTypes.number,
    message: PropTypes.string,
    onMessage: PropTypes.func,
  }

  onMessage = () => {
    const { message, name, image } = this.props;
    if (this.props.onMessage) {
      this.props.onMessage({
        message,
        name,
        image,
      });
    }
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
    const { width, message } = this.props;
    return (
      <View style={[styles.innerContainer, styles.iconContainer, { width, height: width }]}>
        <Image source={this.props.image} style={[styles.image, { width, height: width }]} />
        {
          message &&
            <TouchableOpacity onPress={this.onMessage} style={styles.btnMessage}>
              <Icon name="envelope" size={Metrics.icons.small} color={Colors.snow} />
            </TouchableOpacity>
        }
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
