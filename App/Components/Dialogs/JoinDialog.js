import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import I18n from 'react-native-i18n';

import Avatar from '../Avatar';
import Button from '../Button';
import Dialog from '../Dialog';
import styles from '../Styles/JoinDialogStyle';

export default class JoinDialog extends Component {

  static propTypes = {
    name: PropTypes.string,
    avatarSrc: PropTypes.string,
    distance: PropTypes.number,
    onClose: PropTypes.func,
    visible: PropTypes.bool,
  }

  render() {
    const { name, avatarSrc, distance, onClose } = this.props;
    return (
      <Dialog
        subcontent={
          <View style={styles.reportContainer}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.report}>{`${I18n.t('report')} ${name.toLowerCase()}`}</Text>
            </TouchableOpacity>
          </View>
        }
        visible
      >
        <Text style={styles.title}>{`${name} ${I18n.t('Drinkup_WantToJoin')}`}</Text>
        <Avatar
          style={styles.avatar}
          image={avatarSrc}
          imageStyle={styles.avatarImage}
          width={128}
        />
        <Text style={styles.distance}>{`${distance}mi away`}</Text>
        <Button onPress={onClose} text={I18n.t('Drinkup_SendInvite')} />
      </Dialog>
    );
  }
}
