import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import stringifyObject from 'stringify-object';

import styles from './Styles/MainScreenStyle';

class MainScreen extends Component {
  static defaultProps: {
    profile: {},
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={{ color: 'white' }}>Profile</Text>
        <Text style={{ color: 'white' }}>{stringifyObject(this.props.profile)}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.auth.profile,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
