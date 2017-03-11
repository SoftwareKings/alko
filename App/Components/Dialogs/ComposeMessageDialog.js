import React, { Component, PropTypes } from 'react';
import {
  TextInput,
  Text,
  ListView,
  View,
  TouchableOpacity,
} from 'react-native';
import I18n from 'react-native-i18n';

import Button from '../Button';
import Dialog from '../Dialog';
import styles from '../Styles/ComposeMessageDialogStyle';

export default class ComposeMessageDialog extends Component {

  static propTypes = {
    message: PropTypes.string,
    messagePlaceholder: PropTypes.string,
    onClose: PropTypes.func,
    onChangeMessage: PropTypes.func,
    visible: PropTypes.bool,
  }

  render() {
    const previousMessages = [
      'Hey, we\'re in the back, to the left of the bar.',
      'Front table, wearing a pink hat.',
      'Sitting with the guy in the clown suit.',
      'Front table, wearing a pink hat.',
    ];

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Dialog
        closeOnBackdropPress={false}
        onClose={this.props.onClose}
        visible={this.props.visible}
        dialogStyle={styles.dialog}
      >
        <TextInput
          multiline
          numberOfLines={4}
          placeholder={this.props.messagePlaceholder}
          style={styles.messageInput}
          onChangeText={this.props.onChangeMessage}
          value={this.props.message}
        />
        <Button onPress={this.props.onClose} text={I18n.t('Drinkup_SendMessage')} />
        <Text style={styles.previousMessageText}>{I18n.t('Drinkup_SendPreviousMessage')}</Text>
        <ListView
          dataSource={ds.cloneWithRows(previousMessages)}
          renderRow={rowData =>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.props.onChangeMessage(rowData)}>
              <Text style={styles.previousMessage}>{rowData}</Text>
            </TouchableOpacity>
          }
          renderSeparator={(sectionID, rowID) =>
            rowID < previousMessages.length - 1 ?
              <View key={`${sectionID}-${rowID}`} style={styles.separator} />
              : null
          }
        />
      </Dialog>
    );
  }
}
