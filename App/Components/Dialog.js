import React, { Component, PropTypes } from 'react';
import {
  Modal,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles/DialogStyle';
import { Colors } from '../Themes';

export default class Dialog extends Component {

  static propTypes = {
    closeOnBackdropPress: PropTypes.bool,
    onClose: PropTypes.func,
    animationType: PropTypes.string,
    backdropColor: PropTypes.string,
    visible: PropTypes.bool,
    closeButton: PropTypes.bool,
    subcontent: React.PropTypes.oneOfType([
      PropTypes.arrayOf(React.PropTypes.node),
      PropTypes.node,
    ]),
  }

  static defaultProps = {
    closeOnBackdropPress: true,
    backdropColor: Colors.clearShadow,
    animationType: 'fade',
    visible: false,
  }

  static renderCloseButton(onPress) {
    return (
      <View style={Styles.closeButton}>
        <TouchableOpacity onPress={onPress}>
          <IconFontAwesome name="close" color={Colors.snow} size={16} style={Styles.closeIcon} >
          </IconFontAwesome>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <Modal
        transparent
        animationType={this.props.animationType}
        visible={this.props.visible}
        onRequestClose={this.props.onClose}
      >
        <View style={Styles.modalContainer}>
          <TouchableHighlight
            underlayColor={this.props.backdropColor}
            style={[Styles.backdrop, { backgroundColor: this.props.backdropColor }]}
            onPress={this.props.closeOnBackdropPress ? this.props.onClose : null}
          >
            <View></View>
          </TouchableHighlight>
          <View style={Styles.container}>
            {
              this.props.closeButton ?
              this.constructor.renderCloseButton(this.props.onClose)
              : null
            }
            {this.props.children}
          </View>
          <View style={Styles.subcontentContainer}>
            {this.props.subcontent}
          </View>
        </View>
      </Modal>
    );
  }
}
