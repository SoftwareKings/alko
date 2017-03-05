import React, { Component } from 'react';
import { Text, View } from 'react-native';
import I18n from 'react-native-i18n';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

import Styles from '../Styles/BarScreenStyle';
import Button from '../../Components/Button';
import DrinkupActions from '../../Redux/DrinkupRedux';
import { requestingMember } from '../../Fixtures/drinkupMembers';

class ItsJustMeScreen extends Component {

  componentDidUpdate() {
    if (!this.props.joined) {
      NavigationActions.map();
    }
  }

  // this function is only use for demo
  onDraftLeave = () => {
    this.props.leaveDrinkup(requestingMember);
  }

  render() {
    const twoForOne = this.props.bar.promotions.includes('twoForOne');
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.contentContainer}>
          {
            twoForOne ?
              <View style={Styles.section}>
                <Text style={Styles.header}>{I18n.t('Bar_ItsJustMe_2for1_Header')}</Text>
                <Text style={Styles.body}>{I18n.t('Bar_ItsJustMe_2for1_Body')}</Text>
              </View>
              : null
          }
        </View>
        <View style={Styles.footer}>
          <Text style={Styles.footerText}>{I18n.t('Bar_ItsJustMe_Footer')}</Text>
          <Button
            theme="dark"
            onPress={this.onDraftLeave}
            text={I18n.t('Bar_ItsJustMe_Button')}
          />
        </View>
      </View>
    );
  }

}

const mapStateToProps = state => ({
  joined: state.drinkup.joined,
  bar: state.drinkup.bar,
});

//eslint-disable-next-line
const mapDispatchToProps = dispatch => ({
  leaveDrinkup: member => dispatch(DrinkupActions.leaveDrinkup(member)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItsJustMeScreen);
