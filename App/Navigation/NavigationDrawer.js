// @flow
import React, { PropTypes, Component } from 'react';
import Drawer from 'react-native-drawer';
import { DefaultRenderer } from 'react-native-router-flux';

import { Connect } from '../Redux';
import DrawerContent from '../Containers/DrawerContent';
import Styles from './Styles/NavigationDrawerStyle';

/* *******************
* Documentation: https://github.com/root-two/react-native-drawer
********************/

class NavigationDrawer extends Component {

  render() {
    const state = this.props.navigationState;

    return (
      <Drawer
        ref={ref => this.drawer = ref}
        type="displace"
        open={this.props.show}
        onClose={this.props.actions.closeDrawer}
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
        <DefaultRenderer
          navigationState={state.children[0]}
          onNavigate={this.props.onNavigate}
        />
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

const mapStateToProps = state => ({ show: state.drawer.show });

export default Connect(NavigationDrawer, mapStateToProps);
