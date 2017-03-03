import React, { Component, PropTypes } from 'react';
import {
  Text,
} from 'react-native';
import I18n from 'react-native-i18n';

import Button from '../Button';
import Dialog from '../Dialog';
import styles from '../Styles/DirectionsDialogStyle';

export default class DirectionsDialog extends Component {

  static propTypes = {
    onClose: PropTypes.func,
    onGoogleMapsPress: PropTypes.func,
    onAppleMapsPress: PropTypes.func,
    visible: PropTypes.bool,
  }

  render() {
    return (
      <Dialog
        closeButton
        closeOnBackdropPress
        onClose={this.props.onClose}
        visible={this.props.visible}
      >
        <Text style={styles.title}>{I18n.t('Drinkup_NeedDirection')}</Text>
        <Button style={styles.button} onPress={this.props.onGoogleMapsPress} text={I18n.t('Drinkup_GoogleMap')} />
        <Button style={styles.button} onPress={this.props.onAppleMapsPress} text={I18n.t('Drinkup_AppleMap')} />
      </Dialog>
    );
  }
}
