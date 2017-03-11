import React, { Component, PropTypes } from 'react';
import {
  Text,
} from 'react-native';
import I18n from 'react-native-i18n';

import Button from '../Button';
import Dialog from '../Dialog';
import styles from '../Styles/AlkoSpecialWarningDialogStyle';

export default class AlkoSpecialWarningDialog extends Component {

  static propTypes = {
    onClose: PropTypes.func,
    onButtonPress: PropTypes.func,
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
        <Text style={styles.title}>{I18n.t('Redeem_WarningTitle')}</Text>
        <Text style={styles.body}>{I18n.t('Redeem_WarningBody')}</Text>
        <Button onPress={this.props.onButtonPress} text={I18n.t('Redeem_WarningDismiss')} />
      </Dialog>
    );
  }
}
