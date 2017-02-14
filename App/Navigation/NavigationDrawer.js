// @flow

import React, { PropTypes, Component } from 'react';
import Drawer from 'react-native-drawer';
import { DefaultRenderer, Actions as NavigationActions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import DrawerContent from '../Containers/DrawerContent';
import Styles from './Styles/NavigationDrawerStyle';

/* *******************
* Documentation: https://github.com/root-two/react-native-drawer
********************/

class NavigationDrawer extends Component {
  render() {
    const state = this.props.navigationState;
    const children = state.children;
    return (
      <Drawer
        ref={ref => this.drawer = ref}
        type="displace"
        open={state.open}
        onOpen={() => NavigationActions.refresh({ key: state.key, open: true })}
        onClose={() => NavigationActions.refresh({ key: state.key, open: false })}
        content={<DrawerContent />}
        styles={Styles}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        tweenHandler={ratio => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
        })}
      >
        <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}

NavigationDrawer.propTypes = {
  navigationState: PropTypes.shape({
    children: PropTypes.array,
  }),
  onNavigate: PropTypes.func,
};

/* eslint no-unused-vars: 0 */
const mapStateToProps = state => ({
});

/* eslint no-unused-vars: 0 */
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationDrawer);
