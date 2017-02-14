import React, { PropTypes } from 'react';
import { View, Image, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import NavItems from './NavItems';
import styles from './Styles/CustomNavBarStyle';
import SearchBar from '../Components/SearchBar';
import { Metrics, Images } from '../Themes';
import SearchActions from '../Redux/SearchRedux';

class CustomNavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showSearchBar: false,
    };
  }

  onSearch = (searchTerm) => {
    this.props.performSearch(searchTerm);
  }

  showSearchBar = () => {
    this.setState({ showSearchBar: true });
  }

  renderMiddle() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (this.state.showSearchBar) {
      return <SearchBar onSearch={this.props.performSearch} searchTerm={this.props.searchTerm} onCancel={this.cancelSearch} />;
    }
    return (
      <Image resizeMode="cover" style={styles.logo} source={Images.clearLogo} />
    );

  }

  renderRightButtons() {
    if (this.state.showSearchBar) {
      return <View style={{ width: Metrics.icons.medium }} />;
    }
    return (
      <View style={styles.rightButtons}>
        {NavItems.searchButton(this.showSearchBar)}
      </View>
    );

  }

  renderLeftButtons() {
    if (this.state.showSearchBar) {
      return null;
    }
    return (
      <View style={styles.leftButtons}>
        {NavItems.backButton()}
      </View>
    );

  }

  render() {
    let state = this.props.navigationState;
    let selected = state.children[state.index];
    while (Object.prototype.hasOwnProperty.call(selected, 'children')) {
      state = selected;
      selected = selected.children[selected.index];
    }

    const containerStyle = [
      styles.container,
      this.props.navigationBarStyle,
      state.navigationBarStyle,
      selected.navigationBarStyle,
    ];

    return (
      <View style={containerStyle}>
        {this.renderLeftButtons()}
        {this.renderMiddle()}
        {this.renderRightButtons()}
      </View>
    );
  }
}

CustomNavBar.propTypes = {
  navigationState: PropTypes.object,
  navigationBarStyle: View.propTypes.style,
};

const mapStateToProps = state => ({
  searchTerm: state.search.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  performSearch: searchTerm => dispatch(SearchActions.search(searchTerm)),
  cancelSearch: () => dispatch(SearchActions.cancelSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomNavBar);
