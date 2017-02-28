import React, { Component, PropTypes } from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';

import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';

import Styles from './Styles/DialogStyle';
import { Colors, Images } from '../Themes/';

type DialogProps = {
    title?: string,
    show?: bool
}

export default class Dialog extends React.Component {

    componentDidMount() {
        if (this.props.show) {
            this.popupDialog.show();
        }
    }

    static defaultProps: {title: "", show: boolean}
    props: DialogProps

    render() {
        const DialogComponent = null;
        if (this.props.show) {
            return (
                <View style = {Styles.dialogContainer}>
                    <PopupDialog
                        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                        dialogAnimation = { new SlideAnimation({ slideFrom: 'bottom' }) }
                    />
                </View>
            );
        }
        return DialogComponent;
    }
}