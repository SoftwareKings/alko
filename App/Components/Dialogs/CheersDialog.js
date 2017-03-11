import React, { Component, PropTypes } from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';
import I18n from 'react-native-i18n';

import Button from '../Button';
import Dialog from '../Dialog';
import styles from '../Styles/CheersDialogStyle';
import { Images } from '../../Themes';

export default class CheersDialog extends Component {

  static propTypes = {
    onClose: PropTypes.func,
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
        <Text style={styles.title}>{I18n.t('Drinkup_AcceptedInviteMessage')}</Text>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={Images.cheers_static}
          />
        </View>
        {/* Image shown after gif animation stops */}
        <View style={styles.overlay}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={Images.cheers}
          />
        </View>
        <Button
          text={I18n.t('Drinkup_MeetNewPeople')}
          onPress={this.props.onClose}
        />
      </Dialog>
    );
  }
}
