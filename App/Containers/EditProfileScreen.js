import _ from 'lodash';
import React, { Component } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import I18n from 'react-native-i18n';

import { Connect } from '../Redux';
import Styles from './Styles/EditProfileScreenStyle';
import { Icons, Images } from '../Themes';

class EditProfileScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: props.auth.profile.displayName,
      saving: 0, // 0: pending, 1: saving, 2: saved
    };
  }

  onFirstNameChange = (e) => {
    this.setState({
      firstName: e.nativeEvent.text,
    });
  }

  doChoosePhoto = () => {
    /*
    ImagePicker.openPicker({
      width: 512,
      height: 512,
      cropping: true,
    }).then((image) => {
      console.tron.display({
        name: 'image',
        value: image,
        important: true,
      });
    });
    */
  }

  saveProfile = () => {
    const { updateProfileProperty } = this.props.actions;
    const { firstName } = this.state;

    console.tron.display({
      name: 'saveProfile',
      value: firstName,
    });

    updateProfileProperty('displayName', firstName);
  }

  statusText = () => {
    const { saving } = this.state;
    if (saving === 1) {
      return I18n.t('Profile_Saving');
    } else if (saving === 2) {
      return I18n.t('Profile_Saved');
    }
    return '';
  }

  render() {
    const { firstName } = this.state;

    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.formContainer}>
          <View style={Styles.selectPhotoContainer}>
            <Image
              source={Images.sampleAvatar}
              style={Styles.photo}
            />

            <TouchableOpacity activeOpacity={0.7} onPress={this.doChoosePhoto}>
              <Text style={Styles.updatePhoto}>{I18n.t('Profile_TapToAddPhoto').toUpperCase()}</Text>
            </TouchableOpacity>

          </View>

          <View style={Styles.labelContainer}>
            <Text
              style={Styles.label}
            >
              {I18n.t('Profile_FirstName')}
            </Text>
            <TextInput
              style={Styles.input}
              value={firstName}
              autoCorrect={false}
              maxLength={15}
              returnKeyType="done"
              onChange={this.onFirstNameChange}
              onEndEditing={this.saveProfile}
            />
          </View>

          <View style={Styles.spacer} />

          <View style={Styles.labelContainer}>
            <Text
              style={Styles.label}
            >
              {I18n.t('Profile_FavoriteDrink')}
            </Text>
          </View>

          <View style={Styles.iconContainer}>
            {_.map(Icons, (path, icon) => (
              <Image
                key={icon}
                source={path}
                style={Styles.drinkIcon}
              />
            ))}
          </View>

        </View>
        <View style={Styles.statusContainer}>
          <Text
            style={[
              this.state.saving === 1 && Styles.statusProcessing,
              this.state.saving === 2 && Styles.statusSuccess,
            ]}
          >{this.statusText()}</Text>
        </View>
      </View>
    );
  }

}

export default Connect(EditProfileScreen);
